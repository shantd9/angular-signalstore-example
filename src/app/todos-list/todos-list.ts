import { Component, inject } from '@angular/core';
import { MatFormField, MatInput, MatLabel, MatSuffix } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { TodosStore } from '../store/todos.store';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'todos-list',
  imports: [
    MatFormField,
    MatLabel,
    MatIcon,
    MatInput,
    MatSuffix,
    MatButtonToggle,
    MatButtonToggleGroup,
    MatSelectionList,
    MatListOption,
    NgStyle,
  ],
  templateUrl: './todos-list.html',
  styleUrl: './todos-list.scss',
})
export class TodosList {
  store = inject(TodosStore);

  async onAddTodo(title: string) {
    await this.store.addTodo(title);
  }

  async onDeleteTodo(id: string, event: MouseEvent) {
    event.stopPropagation();
    await this.store.deleteTodo(id);
  }

  async onTodoToggled(id: string, completed: boolean) {
    await this.store.updateTodo(id, completed);
  }
}
