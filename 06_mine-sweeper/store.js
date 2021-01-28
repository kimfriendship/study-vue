import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const START_GAME = "START_GAME";
export const OPEN_CELL = "OPEN_CELL";
export const CLICK_MINE = "CLICK_MINE";
export const FLAG_CELL = "FLAG_CELL";
export const QUESTION_CELL = "QUESTION_CELL";
export const NORMALIZE_CELL = "NORMALIZE_CELL";
export const INCREMENT_TIMER = "INCREMENT_TIMER";

export const CODE = {
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPENED: 0,
};

const plantMine = (row, cell, mine) => {
  const candidate = Array.from({ length: row * cell }, (_, i) => i);
  const shuffle = [];
  const data = [];

  while (shuffle.length <= mine) {
    const randomNumber = Math.floor(Math.random() * candidate.length);
    const chosen = candidate.splice(randomNumber, 1)[0];
    shuffle.push(chosen);
  }

  for (let i = 0; i < row; i++) {
    const rowData = [];
    for (let j = 0; j < cell; j++) {
      rowData.push(CODE.NORMAL);
    }
    data.push(rowData);
  }

  for (let k = 0; k < mine; k++) {
    const x = Math.floor(shuffle[k] / cell);
    const y = shuffle[k] % cell;
    data[x][y] = CODE.MINE;
  }

  return data;
};

export default new Vuex.Store({
  state: {
    table: [],
    data: {
      row: 0,
      cell: 0,
      mine: 0,
    },
    timer: 0,
    halted: true,
    result: "",
  },
  getters: {},
  mutations: {
    [START_GAME](state, { row, cell, mine }) {
      state.data = { row, cell, mine };
      state.table = plantMine(row, cell, mine);
    },
    [OPEN_CELL](state, { row, cell }) {
      Vue.set(state.table[row], cell, CODE.OPENED);
    },
    [CLICK_MINE](state, { row, cell }) {},
    [FLAG_CELL](state, { row, cell }) {
      if (state.table[row][cell] === CODE.MINE) {
        Vue.set(state.table[row], cell, CODE.FLAG_MINE);
      } else {
        Vue.set(state.table[row], cell, CODE.FLAG);
      }
    },
    [QUESTION_CELL](state, { row, cell }) {
      if (state.table[row][cell] === CODE.FLAG_MINE) {
        Vue.set(state.table[row], cell, CODE.QUESTION_MINE);
      } else {
        Vue.set(state.table[row], cell, CODE.QUESTION);
      }
    },
    [NORMALIZE_CELL](state, { row, cell }) {
      if (state.table[row][cell] === CODE.QUESTION_MINE) {
        Vue.set(state.table[row], cell, CODE.MINE);
      } else {
        Vue.set(state.table[row], cell, CODE.NORMAL);
      }
    },
    [INCREMENT_TIMER](state) {
      state.timer += 1;
    },
  },
  actions: {},
});
