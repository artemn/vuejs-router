<template><div></div></template>

<script>
    // import Entity from "@/components/Entity";

    // const $parent = Entity;


    export default {
        name: "EntityEditStep1",
        data: function() {
            return {
                inp1: "inp1 child step1"
            }

        },
        created() {
            // eslint-disable-next-line
            console.info('Child created');
        },
        mounted() {
            // eslint-disable-next-line
            console.error();
            // eslint-disable-next-line
            console.log('Route ID: ' + this.$route.params.id + '| Step1');
            // eslint-disable-next-line
            console.info('Child mounted');

            this.$parent.inp1 = this.inp1;
        },
        // mocks: {
        //     $parent
        // }
    }
</script>

<style scoped>

</style>
