<template>
    <div>
        <v-container fluid>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel>
                        <v-carousel-item
                            v-for="ad in ads"
                            :key="ad.id"
                            :src="ad.src"
                        >
                            <div class="car-link">
                                <v-btn class="error" :to="'/ad/' + ad.id">
                                    {{ ad.title }}
                                </v-btn>
                            </div>
                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex
                        xs12
                        sm6
                        md4
                        v-for="ad of ads"
                        :key="ad.id"
                >
                    <v-card
                            class="mx-auto"
                            max-width="400"
                    >
                        <v-img
                                class="white--text align-end"
                                height="200px"
                                :src="ad.src"
                        >
                            <v-card-title>{{ad.title}}</v-card-title>
                        </v-img>

                        <v-card-text class="text--primary">
                            <div>{{ad.description}}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    flat
                                    :to="'/ad/' + ad.id"
                            >
                                Open
                            </v-btn>

                            <v-btn
                                    raised
                                    dark
                                    class="green"
                            >
                                Buy
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
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
            },
            {
                title: 'Third item',
                description: 'I am a description of third item',
                promo: false,
                src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                id: '3'
            }
        ]
    })
};
</script>

<style scoped>
.car-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, .5);
    transform: translate(-50%, 0);
    padding: 5px 15px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
</style>