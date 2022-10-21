<template>
    <div class="border border-white d-flex flex-column p-5">
        <h1Comp text="Gestão de contactos"></h1Comp>
        <div class="d-flex justify-content-end mt-2">
            <div><ButtonComp text="bg-info" @click="criar">Adicionar</ButtonComp></div>
        </div>
        <div class="border border-white d-flex flex-column my-3 p-4">
                <div class="d-flex flex-row justify-content-between p-4 align-items-center" v-for="(item,i) in getContacts">
                    <div class="mx-5">
                        <td><router-link :to="{name:'DetalheVista',params:{id:item.id, nome:item.nome, telemovel:item.telemovel, email:item.email, morada:item.morada}}">{{item.nome}}</router-link></td>
                    </div>
                    <div>
                        <ButtonComp text="bg-info" @click="detalhe(item)">Editar</ButtonComp>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import h1Comp from "../components/widgets/h1Comp.vue";
import { mapState } from 'pinia';
import {contactStore} from '../store/contactStore';
import ButtonComp from "../components/widgets/buttonComp.vue";
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
    components: { h1Comp, ButtonComp }
}
</script>

<style scoped>

</style>