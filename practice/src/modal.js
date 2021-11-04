import ModalContainer from "./components/modal/ModalContainer.vue";

export default {
  install(Vue) {
    const getModalContainer = (v) => {
      const modalHolder = v.$root;

      if (!modalHolder._modalContainer) {
        modalHolder._modalContainer = new (Vue.extend(ModalContainer))();
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

// export default {
//   install(Vue) {
//     const getContainer = (c) => {
//       // 현재 컴포넌트를 저장하고
//       // 루프를 돌린다 (부모가 없을때까지 위로 올라간다)
//       // 모달 컨테이너를 뷰에 로드 시키고
//       // 모달 컨테이너를 강제 마운트시키고
//       // 모달 컨테이너 Html을 삽입 자식으로

//       let modalHolder = c;
//       while (modalHolder.$parent) {
//         modalHolder = modalHolder.$parent;
//       }

//       if (!modalHolder._modalContainer) {
//         modalHolder._modalContainer = new (Vue.extend(ModalContainer))();
//         modalHolder._modalContainer.$mount();
//         modalHolder.$el.appendChild(modalHolder._modalContainer.$el);
//       }
//       return modalHolder._modalContainer;
//     };

//     Vue.prototype.$modal = function createModal(comp, options) {
//       return getContainer(this).add(comp, options);
//     };
//   },
// };
