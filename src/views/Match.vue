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
                <tr v-for="(participant, index) in participants">
                    <td>
                        <router-link :to="{ name: 'account', params: { id: accounts[index].id } }">
                            {{ accounts[index].name }}
                        </router-link>
                    </td>
                    <td>
                        <router-link :to="{ name: 'hero', params: { id: heroes[index].id } }">
                            {{ heroes[index].name }}
                        </router-link>
                    </td>
                    <td>{{ participant.kills }}</td>
                    <td>{{ participant.deaths }}</td>
                    <td>{{ participant.assists }}</td>
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
                participants: [],
                accounts: [],
                heroes: []
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
                    this.participants = response.data.result_participants;
                    this.accounts = response.data.result_accounts;
                    this.heroes = response.data.result_heroes;
                    /* eslint-disable-next-line */
                    console.log(response.data.result_participants);
                });
            }
        }
    }
</script>