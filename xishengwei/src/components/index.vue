<template>
  <div>
      <global-head></global-head>  
      <global-banner :listImg="listImg"></global-banner>  
  </div>
</template>

<script>
    import globalHead from './global/head.vue'
    import globalBanner from './global/banner.vue'
    export default {
        data() {
            return {
                listImg: [{
                        url: require('./../assets/banner1.jpg')
                    }, {
                        url: require('./../assets/banner2.jpg')
                    }, {
                        url: require('./../assets/banner3.jpg')
                    }]
            };
        },
        created() {

        },
        mounted () {
            
        },
        components: {
            globalHead,
            globalBanner,
        },
        methods: {
            
        },
        computed: {
            
        },
        watch: {
            
        }
    }
</script>

<style scoped>

</style>
