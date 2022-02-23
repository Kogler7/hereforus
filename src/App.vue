<template>
  <main>
    <flying-hearts v-if="new Date() >= new Date('2022-02-22T22:22:22')" />
    <todo-list />
  </main>
</template>

<script type="module">
import FlyingHearts from "./components/flying_hearts/hearts.vue";
import TodoList from "./components/todo_list/TodoList.vue";
export default {
  name: "App",
  components: { TodoList, FlyingHearts },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft YaHei", sans-serif;
}

main {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  background: rgb(203, 210, 240);
}
</style>