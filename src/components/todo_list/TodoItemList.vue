<template>
  <div class="todo-item-list">
    <todo-item
      v-for="todo in todoItemList"
      :key="todo.id"
      :todo-item="todo"
      @change-state="todo.completed = $event.target.checked"
    ></todo-item>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoItemList",
  components: { TodoItem },
  props: ["todoItemList"],
};
</script>

<style>
.todo-item-list {
  display: grid;
  row-gap: 14px;
}
</style>