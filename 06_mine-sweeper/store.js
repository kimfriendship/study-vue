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
    openedCount: 0,
    result: "",
  },
  getters: {},
  mutations: {
    [START_GAME](state, { row, cell, mine }) {
      state.data = { row, cell, mine };
      state.table = plantMine(row, cell, mine);
      state.halted = false;
      state.result = "";
    },
    [OPEN_CELL](state, { row, cell }) {
      const checked = [];
      const checkAround = (row, cell) => {
        const isUndefined =
          row < 0 ||
          row >= state.table.length ||
          cell < -0 ||
          cell >= state.table[0].length;

        if (isUndefined) return;
        if (
          [
            CODE.OPENED,
            CODE.FLAG,
            CODE.FLAG_MINE,
            CODE.QUESTION,
            CODE.QUESTION_MINE,
          ].includes(state.table[row][cell])
        )
          return;

        if (checked.includes(row + "/" + cell)) return;
        else checked.push(row + "/" + cell);

        let around = [];
        if (state.table[row - 1]) {
          around = around.concat([
            state.table[row - 1][cell - 1],
            state.table[row - 1][cell],
            state.table[row - 1][cell + 1],
          ]);
        }

        if (state.table[row + 1]) {
          around = around.concat([
            state.table[row + 1][cell - 1],
            state.table[row + 1][cell],
            state.table[row + 1][cell + 1],
          ]);
        }

        around = around.concat([
          state.table[row][cell - 1],
          state.table[row][cell + 1],
        ]);

        const counted = around.filter((v) =>
          [CODE.MINE, CODE.FLAG_MINE, CODE.QUESTION_MINE].includes(v)
        );

        if (counted.length === 0 && row >= 0) {
          const near = [];
          if (row - 1 >= 0) {
            near.push([row - 1, cell - 1]);
            near.push([row - 1, cell]);
            near.push([row - 1, cell + 1]);
          }
          if (row + 1 < state.table.length) {
            near.push([row + 1, cell - 1]);
            near.push([row + 1, cell]);
            near.push([row + 1, cell + 1]);
          }
          near.push([row, cell + 1]);
          near.push([row, cell - 1]);

          near.forEach((v) => {
            if (state.table[v[0]][v[1]] !== CODE.OPENED)
              checkAround(v[0], v[1]);
          });
        }
        if (state.table[row][cell] === CODE.NORMAL) state.openedCount += 1;
        Vue.set(state.table[row], cell, counted.length);
      };
      checkAround(row, cell);
      if (
        state.openedCount ===
        state.data.row * state.data.cell - state.data.mine
      ) {
        state.result = `${state.timer}초만에 승리!`;
        state.halted = true;
        state.timer = 0;
      }
    },
    [CLICK_MINE](state, { row, cell }) {
      Vue.set(state.table[row], cell, CODE.CLICKED_MINE);
      state.halted = true;
    },
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
