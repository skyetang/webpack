<template>
  <div id="app">
    <ec-header>
      <ec-head-info></ec-head-info>
    </ec-header>
    <ec-side>
      <ec-side-erp :ierpPostCodes="developmentPostCodes"></ec-side-erp>
    </ec-side>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        developmentPostCodes: [
          'M1200',
          'M1028',
          'M1026',
          'M1030']
      };
    }
  };
</script>
