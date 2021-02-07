export const getDefaultState = () => ({
  todos: [],
  inputValue: ""
});

const getters = {};

// mutations const
export const INIT = "INIT";
export const SET_TODOS = "SET_TODOS";

const mutations = {
  [INIT](state) {
    // const defaultStates = Object.entries(getDefaultState());
    // Object.keys(state).forEach(key => {
    //   const defaultValue = defaultStates.find(
    //     ([defaultKey]) => key === defaultKey
    //   )[1];
    //   state[key] = defaultValue;
    // });
    Object.entries(getDefaultState()).forEach(([key, value]) => {
      state[key] = value;
    });
  },

  [SET_TODOS](state, newTodos) {
    state.todos = newTodos;
  }
};

// actions const
export const FETCH_TODOS = "FETCH_TODOS";
const actions = {};

export default {
  namespaced: true,
  state: getDefaultState(),
  getters,
  mutations,
  actions
};
