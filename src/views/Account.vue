<template>
    <div class="main">
        <h1>{{ account.name }}</h1>
        <h2>Platform: {{ account.platform }}</h2>

        <h2>Matches played:</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Match ID</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <!-- eslint-disable-next-line -->
                <tr v-for="match in matches">
                    <router-link :to="{ name: 'match', params: { id: match.id } }">
                        <th>ID {{ match.id }}</th>
                    </router-link>
                    <td>{{ match.actualDate }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'Account',
        data () {
            return {
                id: 0,
                account: null,
                matches: []
            }
        },
        mounted () {
            this.id = this.$route.params.id;
            
            this.getAccount();
        },
        methods: {
            getAccount() {
                axios.get('http://localhost:8080/JEA6KillerAppV2/rest/account/' + this.id).then((response) => {
                    this.account = response.data.result;
                    this.getPlayedMatches();
                });
            },
            getPlayedMatches() {
                axios.get('http://localhost:8080/JEA6KillerAppV2/rest/match/byaccount/' + this.id).then((response) => {
                    this.matches = response.data;
                });
            }
        }
    }
</script>