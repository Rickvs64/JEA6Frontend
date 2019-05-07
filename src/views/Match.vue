<template>
    <div class="main">
        <h1 v-if="this.match">Match ID: {{ match.id }}</h1>
        <h2 v-if="this.gamemode">Mode: 
            <router-link :to="{ name: 'gamemode', params: { id: gamemode.id } }">
                {{ gamemode.name }}
            </router-link>
        </h2>
         
        
        <p v-if="this.match">{{ match.actualDate }}</p>
        <br />
        <h2>Participants:</h2>

        <h3>Team A:</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Hero</th>
                    <th>Kills</th>
                    <th>Deaths</th>
                    <th>Assists</th>
                </tr>
            </thead>
            <tbody>
                <!-- eslint-disable-next-line -->
                <tr v-for="participant in participants">
                    <td>Test: {{ getUsername(participant.accountId) }}</td>
                    <td>Hero</td>
                    <td>Kills</td>
                    <td>Deaths</td>
                    <td>Assists</td>
                </tr>
            </tbody>
        </table>
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
                gamemode: null,
                participants: []
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
                    
                    // Now that this async Axios call is completed we can fetch the gamemode and participants (which require non-null match data)
                    this.getGamemode(response.data.gamemodeId);
                    this.getParticipants();
                });
            },
            getGamemode(gamemodeId) {
                axios.get('http://localhost:8080/JEA6KillerAppV2/rest/gamemode/' + gamemodeId).then((response) => {
                    this.gamemode = response.data;
                });
            },
            getParticipants() {
                axios.get('http://localhost:8080/JEA6KillerAppV2/rest/participant/bymatch/' + this.id).then((response) => {
                    this.participants = response.data;
                });
            },
            getUsername(accountId) {
                axios.get('http://localhost:8080/JEA6KillerAppV2/rest/account/' + accountId).then((response) => {
                    return response.data.result.name;
                });
            }
        }
    }
</script>