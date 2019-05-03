<template>
    <div class="main">
        <h1 v-if="this.match">Match ID: {{ match.id }}</h1>
        <h2 v-if="this.gamemode">Mode: {{ gamemode.name }} </h2>
        
        <p v-if="this.match">{{ match.actualDate }}</p>
        <p>(Info about match)</p>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'Match',
        data () {
            return {
                id: 0,
                match: null,
                gamemode: null
            }
        },
        mounted () {
            this.id = this.$route.params.id;
            
            this.getMatch();    // Also fills the other objects with data
        },

        methods: {
            getMatch() {
                axios.get('http://localhost:8080/JEA6KillerAppV2/rest/match/' + this.id).then((response) => {
                    this.match = response.data;
                    
                    // Now that this async Axios call is completed we can fetch the gamemode (which requires non-null match data)
                    this.getGamemode(response.data.gamemodeId);
                });
            },
            getGamemode(gamemodeId) {
                axios.get('http://localhost:8080/JEA6KillerAppV2/rest/gamemode/' + gamemodeId).then((response) => {
                    this.gamemode = response.data;
                });
            }
        }
    }
</script>