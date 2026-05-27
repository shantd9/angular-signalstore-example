import { Component, inject } from '@angular/core';
import { MatFormField, MatInput, MatLabel, MatSuffix } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { TodosStore } from '../store/todos.store';

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
  ],
  templateUrl: './todos-list.html',
  styleUrl: './todos-list.scss',
})
export class TodosList {
  store = inject(TodosStore);
}
