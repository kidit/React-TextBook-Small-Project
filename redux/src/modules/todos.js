import { createAction, handleActions } from 'redux-actions';
import {produce} from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값 변경
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3;

export const insert = createAction(INSERT, text => ({
    id: id++,
    text,
    done: false,
}));

export const toggle = createAction(TOGGLE, id => id);

export const remove = createAction(REMOVE, id => id);

// 초기 상태 정의
const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: "redux basic",
            done: true
        },
        {
            id: 2,
            text: 'react and redux',
            done: false
        }
    ]
};

const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, {payload: input}) =>
            produce(state, draft => {
                draft.input = input;
            }),
        [INSERT]: (state, {payload: todo})=>
            produce(state,draft => {
                draft.todos.push(todo);
            }),
        [TOGGLE]: (state, {payload: id}) =>
            produce(state, draft => {
                const todo = draft.todos.find(todo => todo.id === id);
                todo.done = !todo.done;
            }),
        [REMOVE]: (state, {payload: id}) =>
            produce(state, draft => {
                const index = draft.todos.findIndex(todo => todo.id === id);
                draft.todos.splice(index,1);
            }),
    },
    initialState,
);

export default todos;
