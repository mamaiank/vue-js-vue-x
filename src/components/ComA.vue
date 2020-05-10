<template>
  <div class="com_a">
    <h1>{{$store.getters.getCount}}</h1>
    <button @click="deleteData">Delete</button>
  </div>
</template>

<script>
export default {
  methods: {
    deleteData() {
      this.$store.dispatch("deleteAction");
    }
  }
};
</script>