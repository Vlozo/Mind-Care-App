import HEADER from "../components/common.js"

const APP = Vue.createApp({
    data() {
        return {
            therapist: "Zé Fulano",
            patients: []
        };
    },
    methods: {
        async getPatients(){
            try {
                const RESPONSE = await fetch("../consumables/patients.json");
                const DATA = await RESPONSE.json();
                this.patients = DATA.patients;

            } catch (error) {
                console.error("Erro ao carregar dados dos pacientes", error);
            }
        }
    },
    mounted(){
        this.getPatients();
    }
});

APP.component(HEADER.nametag, HEADER)

APP.mount('#app')