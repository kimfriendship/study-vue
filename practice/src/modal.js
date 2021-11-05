import ModalContainer from "./components/modal/ModalContainer.vue";

export default {
  install(Vue) {
    const getModalContainer = (c) => {
      const modalHolder = c.$root;

      if (!modalHolder._modalContainer) {
        modalHolder._modalContainer = new (Vue.extend(ModalContainer))({
          parent: modalHolder,
        });
        modalHolder._modalContainer.$mount();
        modalHolder.$el.appendChild(modalHolder._modalContainer.$el);
      }

      return modalHolder._modalContainer;
    };

    Vue.prototype.$modal = function showModal(comp, options) {
      return getModalContainer(this).add(comp, options);
    };
  },
};
