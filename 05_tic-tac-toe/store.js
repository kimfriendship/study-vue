import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "CHANGE_TURN";
export const RESET_GAME = "RESET_GAME";
export const NO_WINNER = "NO_WINNER";
export const RESET_WINNER = "RESET_WINNER";
export const INCREASE_TURN_CHANGE = "INCREASE_TURN_CHANGE";

export default new Vuex.Store({
  state: {
    turn: "O",
    winner: null,
    turnChange: 0,
    tableData: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
  },
  getters: {},
  mutations: {
    [SET_WINNER](state, winner) {
      state.winner = winner;
    },
    [CLICK_CELL](state, { row, cell }) {
      Vue.set(state.tableData[row], cell, state.turn);
    },
    [CHANGE_TURN](state) {
      state.turn = state.turn === "O" ? "X" : "O";
    },
    [INCREASE_TURN_CHANGE](state) {
      state.turnChange += 1;
    },
    [RESET_GAME](state) {
      state.turnChange = 0;
      state.tableData = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
    },
    [NO_WINNER](state) {
      state.winner = "DRAW";
    },
    [RESET_WINNER](state) {
      state.winner = null;
    },
  },
  actions: {},
});
