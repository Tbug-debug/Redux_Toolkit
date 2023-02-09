import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToDo {
  text: string;
  id: number;
}

const initialState: ToDo[] = [];

const toDos = createSlice({
  name: "toDosReducer",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action: PayloadAction<number>) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const { add, remove } = toDos.actions;

const store = configureStore({ reducer: toDos.reducer });

export type RooteState = ReturnType<typeof store.getState>;

export default store;
