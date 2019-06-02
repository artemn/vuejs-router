<template>
    <div class="user">
        <h2>Route ID: {{ $route.params.id }}</h2>
        <router-view></router-view>
        <div>
            <ul class="tmpMenu">
                <li><a href="/entity/edit/1/step1">Step1</a></li>
                <li><a href="/entity/edit/1/step2">Step2</a></li>
                <li><a href="/entity/edit/1/step3">Step3</a></li>
                <li><a href="/entity/edit/1/step4">Step4</a></li>
            </ul>
        </div>
        <div style="height: 10px;  clear: both;"></div>
        <div style="border: 1px crimson dashed;padding: 10px;">

            <label for="inp1">inp1 </label>
            <input name="inp1" id="inp1" :value="inp1" />
            <br>

            <label for="inp2">inp2 </label>
            <input name="inp2" id="inp2" :value="inp2" />
            <br>

            <label for="inp3">inp3 </label>
            <input name="inp3" id="inp3" :value="inp3" />
            <br>

            <label for="inp4">inp4 </label>
            <input name="inp4" id="inp4" :value="inp4" />
            <br>

            <label for="inp5">inp5 </label>
            <input name="inp5" id="inp5" :value="inp5" />
            <br>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Entity",
        data: function () {
            return {
                inp1: "inp1 parent",
                inp2: "inp2 parent",
                inp3: "inp3 parent",
                inp4: "inp4 parent",
                inp5: "inp5 parent"
            }
        },
        created() {
            // eslint-disable-next-line
            console.info('Parent created');
        },
        mounted() {
            // eslint-disable-next-line
            console.info('Parent mounted');
        },

    }
</script>

<style scoped>
.tmpMenu {
    list-style-type:none;
}
.tmpMenu li {
    padding: 0 15px;
    float: left;
}
</style>
~
