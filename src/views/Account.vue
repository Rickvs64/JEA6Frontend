<template>
    <div class="main">
        <h1>{{ account.name }}</h1>
        <h2>Platform: {{ account.platform }}</h2>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'Account',
        data () {
            return {
                id: 0,
                account: null
            }
        },
        mounted () {
            this.id = this.$route.params.id;
            
            axios  
            .get('http://localhost:8080/JEA6KillerAppV2/rest/account/' + this.id, {
                })
            .then(response => (this.account = response.data.result));
        }
    }
</script>