import Vue from 'vue'
import VueRouter from 'vue-router'

import Entity from '@/components/Entity'
import EntityEditStep1 from '@/components/EntityEditStep1'
import EntityEditStep2 from '@/components/EntityEditStep2'
import EntityEditStep3 from '@/components/EntityEditStep3'
import EntityEditStep4 from "@/components/EntityEditStep4";

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/entity/edit/:id',
            component: Entity,

            children: [
                {
                    path: 'step1',
                    component: EntityEditStep1,
                },
                {
                    path: 'step2',
                    component: EntityEditStep2,
                },
                {
                    path: 'step3',
                    component: EntityEditStep3,
                },
                {
                    path: 'step4',
                    component: EntityEditStep4,
                }
            ]
        }
    ]
});


export default router
