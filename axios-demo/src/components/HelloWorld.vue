<script setup lang="ts">
import { ref } from 'vue';
import axios from '../../../ts-axios/src';
const date = new Date();
/* 
axios({
  method: 'get',
  url: 'http://localhost:8081/base/get',
  params: {
    date,
  },
});

axios({
  method: 'get',
  url: 'http://localhost:8081/base/get',
  params: {
    foo: '@:$, ',
  },
});

axios({
  method: 'get',
  url: 'http://localhost:8081/base/get',
  params: {
    foo: 'bar',
    baz: null,
  },
});

axios({
  method: 'get',
  url: 'http://localhost:8081/base/get#hash',
  params: {
    foo: 'bar',
  },
});

axios({
  method: 'get',
  url: 'http://localhost:8081/base/get?foo=bar',
  params: {
    bar: 'baz',
  },
}); */
const arr = new Int32Array([21, 31]);
axios({
  method: 'post',
  url: 'http://localhost:8081/base/post',
  data: {
    a: 1,
    b: 2,
  },
}).then(res => console.log(res));
axios({
  method: 'post',
  url: 'http://localhost:8081/base/post',
  responseType: 'json',
  data: {
    a: 3,
    b: 4,
  },
}).then(res => console.log(res));

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>

    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>See <code>README.md</code> for more information.</p>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
