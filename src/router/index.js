import { createRouter, createWebHistory } from "vue-router";


const routes=[
    {path:'/',name: 'Listagem', component: ()=>import('../views/Listagem.vue')},
    {path:'/edicao',name: 'Edicao', component: ()=>import('../views/Edicao.vue')},
    {path:'/detalhe/:id/:nome/:telemovel/:email/:morada',name: 'Detalhe', component: ()=>import('../views/Detalhe.vue')},
    {path:'/detalheVista/:id/:nome/:telemovel/:email/:morada',name: 'DetalheVista', component: ()=>import('../views/DetalheVista.vue')},
]

const router=createRouter({
    history: createWebHistory(),
    routes
})

export default router