<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    class="icon"
  >
    <defs>
      <path
        id="a"
        d="M12.668 8.667a.667.667 0 1 1 0 1.333H2.509l2.586 2.155a.667.667 0 0 1-.854 1.024l-4-3.334c-.479-.399-.197-1.178.427-1.178zM8.155.24a.667.667 0 0 1 .938-.085l4 3.333c.48.399.197 1.179-.426 1.179h-12a.667.667 0 0 1 0-1.334h10.158L8.24 1.18a.667.667 0 0 1-.085-.94z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd" transform="translate(1.333 1.333)">
      <mask id="b" fill="#fff">
        <use xlink:href="#a" />
      </mask>
      <use fill="#000" fill-rule="nonzero" xlink:href="#a" />
      <g fill="#C4C4C3" mask="url(#b)">
        <path d="M-1.333-1.333h16v16h-16z" />
      </g>
    </g>
  </svg>
</template>

<script>
  export default {};
</script>

<style scoped>
  .icon path,
  .icon g {
    fill: red;
  }
</style>
