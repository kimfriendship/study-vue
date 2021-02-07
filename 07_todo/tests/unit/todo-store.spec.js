import TodoStore, { getDefaultState } from "../../src/store/modules/todo";

const { state, getters, mutations, actions } = TodoStore;

describe("state test", () => {
  it("default state", () => {
    const defaultState = {
      todos: [],
      inputValue: ""
    };
    expect(state).toMatchObject(defaultState);
  });
});

describe("mutations test", () => {
  const { SET_TODOS, INIT } = mutations;
  let mockState;

  beforeEach(() => {
    mockState = getDefaultState();
  });

  describe("SET_TODOS test", () => {
    it("test 1", () => {
      const newTodos = ["1", "2 ", "3"];
      SET_TODOS(mockState, newTodos);
      expect(mockState.todos).toEqual(newTodos);
    });
  });
  describe("INIT test", () => {
    it("test1", () => {
      const asIsState = {
        todos: ["1"],
        inputValue: "eddie"
      };
      INIT(asIsState);
      expect(asIsState.todos).toEqual(getDefaultState().todos);
      expect(asIsState.inputValue).toEqual(getDefaultState().inputValue);
    });
  });
});
