<template>
    <div class="border border-white d-flex flex-column p-5">
        <H1Comp text="Gestão de contactos"></H1Comp>
        <form @submit.prevent="editar($event)">
            <div class="d-flex flex-row justify-content-end align-items-end mt-4 gap-4">
                <div><button class="border border-white bg-info rounded">Editar</button></div>
                <div><button class="border border-white bg-danger rounded" @click="eliminar">Eliminar</button></div>
            </div>
            <div class="border border-white d-flex my-3 p-4">
                <div class="d-flex flex-column gap-4 pb-2 px-5 align-items-start">
                    <input type="text" class="form-control px-5" placeholder="Nome" ref="nome" v-model="$route.params.nome">
                    <input type="number" class="form-control" placeholder="Número de telemóvel" ref="telemovel" v-model="$route.params.telemovel">
                    <input type="email" class="form-control" placeholder="Email" ref="email" v-model="$route.params.email">
                    <input type="text" class="form-control" placeholder="Morada" ref="morada" v-model="$route.params.morada">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import H1Comp from '../components/widgets/h1Comp.vue';
import { mapState } from 'pinia';
import {contactStore} from '../store/contactStore';
import addUser from '../models/addUser';
export default {
    setup(){
        // initialize the store
        const contactStoreT = contactStore();
        return {contactStoreT} 
    },
    data() {
        return {
            user:{}
        };
    },
    methods: {
        editar(){
            this.user={
                id:this.$route.params.id,
                nome:this.$route.params.nome,
                telemovel:this.$route.params.telemovel,
                email:this.$route.params.email,
                morada:this.$route.params.morada
            }
                if(this.user.nome=='' ||this.user.telemovel=='' ||this.user.email=='' ||this.user.morada=='' ){
                    alert("Não pode submeter com campos vazios.");
                }else{
                    this.contactStoreT.update(this.user)
                    this.$router.push({ name: "Listagem" });
                }
        },
        eliminar() {
                this.contactStoreT.delete(this.$route.params.id)
                this.$router.push({ name: "Listagem" });
        }
    },
    components: { H1Comp }
}
</script>

<style scoped>

</style>