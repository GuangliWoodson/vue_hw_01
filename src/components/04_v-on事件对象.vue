<template>
  <div>
    <a @click="ban" href="http://www.baidu.com">禁止百度</a>
  </div>
</template>


<script>
export default {
  methods: {

    ban(num, e) {
      e.preventDefault()
    }
  }
}
</script>