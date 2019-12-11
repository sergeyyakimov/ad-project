<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card>
                    <v-img
                            class="white--text align-end"
                            height="300px"
                            src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
                    >
                    </v-img>
                    <v-card-text>
                        <h1 class="text--primary">lorem</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis debitis dignissimos doloribus ea exercitationem facilis fugiat hic id, iure labore laudantium magni molestiae nulla omnis porro quasi sed suscipit.</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="warning" flat>Edit</v-btn>
                        <v-btn class="success">Buy</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({

        })
    };
</script>