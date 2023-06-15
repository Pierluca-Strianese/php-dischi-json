const { createApp } = Vue;

createApp({
    data() {
        return {
            urlApi: 'server.php',
            arrDiscs: [],
        }
    },

    created() {
        axios.get(this.urlApi)
            .then(response => this.arrDiscs = response.data);
    }

}).mount('#app')