import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosStore } from './store/todos.store';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  store = inject(TodosStore);

  ngOnInit() {
    this.loadTodos().then(() => console.log('todos loaded'));
  }

  async loadTodos() {
    await this.store.loadAll();
  }
}
