<template>
    <div class="border border-white d-flex flex-column p-5">
        <H1Comp text="Gestão de contactos"></H1Comp>
            <div class="d-flex flex-row justify-content-end align-items-end mt-4 gap-4">
                <div><ButtonComp text="bg-danger" @click="voltar">Voltar</ButtonComp></div>
            </div>
            <div class="border border-white d-flex my-3 p-4">
                <div class="d-flex flex-column gap-4 align-items-start">
                   <p>{{$route.params.nome}}</p>
                   <p>{{$route.params.telemovel}}</p>
                    <p>{{$route.params.email}} </p>
                    <p>{{$route.params.morada}} </p>
                </div>
            </div>
    </div>
</template>

<script>
import H1Comp from '../components/widgets/h1Comp.vue';
import ButtonComp from '../components/widgets/buttonComp.vue';
export default {
    methods: {
        voltar() {
            this.$router.push({ name: "Listagem" });
        }
    },
    components: { H1Comp, ButtonComp }
}
</script>

<style scoped>

</style>