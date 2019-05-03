<template>
    <div class="main">
        <div class="container">
            <h1>Characters</h1>
            <div class="row">
                <!-- eslint-disable-next-line -->
                <div class="col-md-3" v-for="hero in heroes">
                    <div class="card" style="width: 16rem;">
                        <img class="card-img-top" v-bind:src="getCorrectAvatar(hero.portraitURL)" alt="Character portrait">
                        <div class="card-body">
                            <h5 class="card-title">{{ hero.name }}</h5>
                            <router-link :to="{ name: 'hero', params: { id: hero.id } }">
                                <button class="btn btn-primary">More info</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'Accounts',
        data () {
            return {
                heroes: []
            }
        },
        mounted () {
            axios  
            .get('http://localhost:8080/JEA6KillerAppV2/rest/hero/', {
                })
            .then(response => (this.heroes = response.data))
        },
        methods: {
            getCorrectAvatar: function (portraitURL) {
                try{
                return require('@/assets/avatars/' + portraitURL);
                }catch(e){
                    return require('@/assets/avatars/default.png')
                }
            }
        }
    }
</script>