<template>
    <div class="border border-white d-flex flex-column p-5">
        <h1Comp text="Gestão de contactos"></h1Comp>
        <div class="d-flex justify-content-end mt-2">
            <div><button class="border border-white bg-info rounded" @click="criar">Adicionar</button></div>
        </div>
        <div class="border border-white d-flex flex-column my-3 p-4">
                <div class="d-flex flex-row justify-content-between p-4 align-items-center" v-for="(item,i) in getContacts">
                    <div class="mx-5">
                        <p>{{item.nome}}</p>
                    </div>
                    <div>
                        <button class="border border-white bg-info rounded" @click="detalhe(item)">Ver</button>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import h1Comp from "../components/widgets/h1Comp.vue";
import { mapState } from 'pinia';
import {contactStore} from '../store/contactStore';
export default {
    setup(){
        // initialize the store
        const contactStoreT = contactStore();
        return {contactStoreT} 
    },
    
    data() {
        return {

        };
    },
    computed:{
        ...mapState(contactStore,['getContacts']),
        
    },
    methods: {
        criar() {
            this.$router.push({ name: "Edicao" });
        },
        detalhe(item) {
            this.$router.push({ name: "Detalhe",params:{
                id:item.id,
                nome:item.nome,
                telemovel:item.telemovel,
                email:item.email,
                morada:item.morada
            } });
        }
    },
    components: { h1Comp }
}
</script>

<style scoped>

</style>