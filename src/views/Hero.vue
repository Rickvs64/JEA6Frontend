<template>
    <div class="main">
        <img v-bind:src="getCorrectAvatar(hero.portraitURL)" alt="Character portrait" style="min-width: 16em">
        <h1>{{ hero.name }}</h1>
        <h2>Difficulty: {{ getDifficultyAsText(hero.difficulty) }}</h2>

        <p>{{ hero.description }}</p>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'Hero',
        data () {
            return {
                id: 0,
                hero: null
            }
        },
        mounted () {
            this.id = this.$route.params.id;
            
            axios  
            .get('http://localhost:8080/JEA6KillerAppV2/rest/hero/' + this.id, {
                })
            .then(response => (this.hero = response.data));
        },
        methods: {
            getCorrectAvatar: function (portraitURL) {
                try{
                return require('@/assets/avatars/' + portraitURL);
                }catch(e){
                    return require('@/assets/avatars/default.png')
                }
            },
            getDifficultyAsText: function (difficultyAsInt) {
                switch(difficultyAsInt) {
                    case 1:
                        return '★☆☆☆☆'
                        break;

                    case 2:
                        return '★★☆☆☆'
                        break;
                    
                    case 3:
                        return '★★★☆☆'
                        break;

                    case 4:
                        return '★★★★☆'
                        break;

                    case 5:
                        return '★★★★★'
                        break;

                    default:
                        return '☆☆☆☆☆'
                }
            }
        }
    }
</script>