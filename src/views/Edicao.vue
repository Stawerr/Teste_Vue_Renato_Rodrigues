<template>
    <div class="border border-white d-flex flex-column p-5">
        <H1Comp text="Gestão de contactos"></H1Comp>
        <div class="border border-white d-flex flex-column mt-4 p-4">
            <form @submit.prevent="onSubmitHandler($event)">
                <div class="d-flex flex-column gap-4 pb-2 justify-content-start">
                    <input type="text" class="form-control" placeholder="Nome" ref="nome" v-model="addUser.nome">
                    <input type="number" class="form-control" placeholder="Número de Telemóvel" ref="telemovel" v-model="addUser.telemovel">
                    <input type="text" class="form-control" placeholder="Email" ref="email" v-model="addUser.email">
                    <input type="text" class="form-control" placeholder="Morada" ref="morada" v-model="addUser.morada">
                </div>
                <div class=" d-flex flex-row justify-content-end gap-2 mt-4">
                    <button type="reset" class="border border-white bg-danger rounded" @click="cancelar">Cancelar</button>
                    <button type="submit" class="border border-white bg-info rounded">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import addUser from '../models/addUser';
import H1Comp from '../components/widgets/h1Comp.vue';
import { mapState } from 'pinia'
import {contactStore} from '../store/contactStore';
export default {
    setup(){
        // initialize the store
        const contactStoreT = contactStore();
        return {contactStoreT} 
    },
    data() {
        return {
            addUser: new addUser(),
        };
    },
    computed:{
        getContacts(){
            return this.contactStoreT.getContacts;
        }
    },
    methods: {
        onSubmitHandler(e){
                if(this.addUser.id){
                    this.contactStoreT.update(this.addUser)
                }
                else{
                    if(this.addUser.nome=='' || this.addUser.telemovel==''|| this.addUser.email==''|| this.addUser.morada==''){
                        alert("Não pode submeter utilizadores com campos vazios.");
                    }else{
                        this.contactStoreT.add(this.addUser)
                        this.$router.push({ name: "Listagem" });
                    }
                }
        },
        cancelar() {
            this.$router.push({ name: "Listagem" });
        }
    },
    components: { H1Comp }
}
</script>

<style scoped>

</style>