<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My ads</h1>
                <v-card
                        class="elevation-12 mb-5"
                        v-for="ad in ads"
                        :key="ad.id"
                >
                    <v-layout row>
                        <v-flex xs4>
                            <v-img
                                    class="white--text align-end"
                                    height="175px"
                                    :src="ad.src"
                            >
                            </v-img>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primary">
                                    {{ ad.title }}
                                </h2>
                                <p>
                                    {{ ad.description }}
                                </p>
                            </v-card-text>
                            <v-card-actions class="center">
                                <v-btn
                                        class="info"
                                        :to="'/ad/' + ad.id"
                                >
                                    Open
                                </v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        ads: [
            {
                title: 'First item',
                description: 'I am a description of first item',
                promo: true,
                src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                id: '1'
            },
            {
                title: 'Second item',
                description: 'I am a description of second item',
                promo: true,
                src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                id: '2'
            }
        ]
    })
};
</script>

<style scoped>
    .center {
        display: flex;
        justify-content: center;
    }
</style>