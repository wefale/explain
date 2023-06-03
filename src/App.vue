<template>
  <div id="app">
    {{ result }}
  </div>
</template>

<script>
import {request} from './network/request' ;

export default {
  name: 'App',
  data() {
    return {
      result: ''
    }
  },
  created() {
    request({
      url: '/home/multidata'
    })
      .then(res => {
        console.log(res);
        this.result = res
      })
      .catch(err => {
        console.log(err);
      })
  }
}
</script>

<style>

</style>
