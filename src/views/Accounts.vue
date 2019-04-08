<template>
    <div class="main">
        <h1>Accounts</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Platform</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="account in accounts">
                    <router-link :to="{ name: 'account', params: { id: account.id } }">
                        <th>{{ account.name }}</th>
                    </router-link>
                    <td>PC</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'Accounts',
        data () {
            return {
                accounts: []
            }
        },
        mounted () {
            axios  
            .get('http://localhost:8080/JEA6KillerAppV2/rest/account/', {
                })
            .then(response => (this.accounts = response.data))
        }
    }
</script>