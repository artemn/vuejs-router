<template><div></div></template>

<script>
    export default {
        name: "EntityEditStep4",
        mounted() {
            // eslint-disable-next-line
            console.log('Route ID: ' + this.$route.params.id + '| Step4');
            // eslint-disable-next-line
            console.info('Child mounted');
        },
        created() {
            // eslint-disable-next-line
            console.info('Child created');
        }
    }
</script>

<style scoped>

</style>
