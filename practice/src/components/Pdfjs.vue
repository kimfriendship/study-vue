<template>
  <div>
    <label for="upload-pdf" class="upload-button">PDF 업로드</label>
    <input
      type="file"
      id="upload-pdf"
      accept="application/pdf"
      class="upload-input"
      @change="uploadPDF"
    />
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
  export default {
    // mounted() {
    //   const script = document.createElement("script");
    //   script.setAttribute("src", "./pdf.js");
    //   document.head.appendChild(script);
    //   console.log(script);
    // },
    methods: {
      async uploadPDF(e) {
        const pdf = e.target.files[0];
        const pdfUrl = URL.createObjectURL(pdf);
        const pdfjs = window.pdfjsLib;
        console.log({ pdfUrl, pdfjs });

        pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.js";
        const loadingTask = await pdfjs.getDocument({
          url: pdfUrl,
          disableFontFace: true,
          cMapUrl: "/cmaps/",
          cMapPacked: true,
        });
        const doc = await loadingTask.promise;
        const pageTotal = doc.numPages;
        console.log("page total", pageTotal);
        const imageList = await Promise.all(
          Array(1)
            // Array(pageTotal)
            .fill()
            .map(async (_, i) => {
              const pageNumber = i + 1;
              const page = await doc.getPage(pageNumber);
              const scale = 1.5;
              const viewport = page.getViewport({ scale });
              const outputScale = window.devicePixelRatio || 1;
              // Prepare canvas using PDF page dimensions
              // TODO: resize FHD
              const canvas = document.getElementById("canvas");
              const context = canvas.getContext("2d");
              canvas.height = viewport.height;
              canvas.width = viewport.width;
              const textContent = await page.getTextContent();
              const transform =
                outputScale !== 1
                  ? [outputScale, 0, 0, outputScale, 0, 0]
                  : null;

              console.log("context", textContent);
              // Render PDF page into canvas context
              const renderContext = {
                canvasContext: context,
                viewport: viewport,
                transform,
              };
              await page.render(renderContext).promise;
              return {
                assetType: "IMAGE",
                assetName: `${pdf.name}_${pageNumber}.jpg`,
                assetW: canvas.width,
                assetH: canvas.height,
              };
            })
        );
        console.log(imageList);
      },
    },
  };
</script>

<style></style>
