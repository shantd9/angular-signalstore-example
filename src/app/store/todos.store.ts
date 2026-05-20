import { Todo } from '../model/todo.model';
import { signalStore, withState } from '@ngrx/signals';

export type TodosFilter = "all" | "completed" | "pending";

type TodosState = {
  todos: Todo[];
  loading: boolean;
  filter: TodosFilter
}

const initialState: TodosState = {
  todos: [],
  loading: false,
  filter: "all",
}

export const TodosStore = signalStore({providedIn: 'root'}, withState(initialState))
