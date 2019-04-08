<template>
    <div class="main">
        <h1>Accounts</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Platform</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="account in accounts">
                    <th scope="row">{{ account.name }}</th>
                    <td>PC</td>
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