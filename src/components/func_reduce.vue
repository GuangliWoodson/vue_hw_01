<template>
  <div id="app">
    <p>let str = 'asdasdasdasdasdasd'</p>
    <button @click="showRes">reduce</button>
    <h1>{{getRes}}</h1>
  </div>
</template>

<script>
    const func_rc = ()=> {
      let str = 'asdasdasdasdasdasd'
      str.split('').reduce((res, cur) => {
        res[cur] ? res[cur]++ : res[cur] = 1
        return res;
      }, {});
    }

export default {
  methods: {
    showRes() {
      const final = func_rc
      console.log(final);
    }
  },
  data() {
    return {
      getRes: this.showRes
    }
  }
}
</script>