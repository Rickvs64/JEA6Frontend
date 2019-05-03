<template>
    <div class="main">
        <h1>{{ gamemode.name }}</h1>

        <p>{{ gamemode.description }}</p>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'Gamemode',
        data () {
            return {
                id: 0,
                gamemode: null
            }
        },
        mounted () {
            this.id = this.$route.params.id;
            
            axios  
            .get('http://localhost:8080/JEA6KillerAppV2/rest/gamemode/' + this.id, {
                })
            .then(response => (this.gamemode = response.data));
        }
    }
</script>