<template>
  <div>
    <div class="todo-list">
      <h1>Shared todo list</h1>
      <todo-add :tid="todoItemList.length" @add-todo="addTodo" />
      <todo-filter :selected="filter" @change-filter="filter = $event" />
      <todo-item-list :todo-item-list="filteredTodoItemList" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { computed } from "@vue/runtime-core";
import TodoAdd from "./TodoAdd.vue";
import TodoFilter from "./TodoFilter.vue";
import TodoItemList from "./TodoItemList.vue";

export default {
  name: "TodoList",
  components: { TodoAdd, TodoFilter, TodoItemList },
  setup() {
    const todoItemList = ref([]);
    const addTodo = (todo) => todoItemList.value.push(todo);

    const filter = ref("all");
    const filteredTodoItemList = computed(() => {
      switch (filter.value) {
        case "done":
          return todoItemList.value.filter((todo) => todo.completed);
        case "todo":
          return todoItemList.value.filter((todo) => !todo.completed);
        default:
          return todoItemList.value;
      }
    });

    return {
      todoItemList,
      addTodo,
      filter,
      filteredTodoItemList,
    };
  },
};
</script>

<style>
.todo-list {
  width: 60%;
  max-width: 400px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 24px 24px;
  background-color: rgb(245, 246, 252);
}

h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}
</style>