<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="name"></use>
  </svg>
</template>

<script>
  // https://webpack.js.org/guides/dependency-management/#context-module-api
  const requireAll = (requireContext) =>
    requireContext.keys().map(requireContext);
  const req = require.context("../../svg-icons", false, /\.svg$/);
  requireAll(req);

  export default {
    name: "SvgIcon",
    props: {
      iconName: {
        // icon filename
        type: String,
        required: true,
      },
      className: {
        // css class name
        type: String,
        default: "",
      },
    },
    computed: {
      name() {
        return `#icon-${this.iconName}`;
      },
      svgClass() {
        if (this.className) {
          return "svg-icon " + this.className;
        } else {
          return "svg-icon";
        }
      },
    },
  };
</script>

<style>
  .svg-icon {
    width: 1em;
    height: 1em;
    fill: currentColor; /* important */
    overflow: hidden;
  }
</style>
