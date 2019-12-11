<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Create new ad</h1>
                <v-form
                        ref="form"
                        v-model="valid"
                        class="mb-3"
                        validation
                >
                    <v-text-field
                            label="Ad title"
                            name="title"
                            type="text"
                            v-model="title"
                            required
                            :rules="[v => !!v || 'Title is required']"
                    />
                    <v-textarea
                            name="description"
                            v-model="description"
                            :rules="[v => !!v || 'Description is required']"
                    >
                        <template v-slot:label>
                            <div>
                                Ad description
                            </div>
                        </template>
                    </v-textarea>
                </v-form>
                <v-layout row>
                    <v-flex xs12>
                        <v-btn
                                class="warning"
                        >
                            Upload
                            <v-icon right dark>mdi-cloud-upload</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row class="mt-3">
                    <v-flex xs12>
                        <img
                            src=""
                            alt=""
                            height="100"
                        />
                    </v-flex>
                </v-layout>
                <v-layout row class="mt-3">
                    <v-flex xs12>
                        <v-switch
                            v-model="promo"
                            label="Add to promo?"
                            color="green"
                        >
                        </v-switch>
                    </v-flex>
                </v-layout>
                <v-layout row class="mt-3">
                    <v-flex xs12>
                        <v-btn
                                class="success"
                                @click="createAd"
                                :disabled="!valid"
                        >
                            Create ad
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            title: '',
            description: '',
            promo: false,
            valid: false
        }),
        methods: {
            createAd () {
                if(this.$refs.form.validate()) {
                    const ad ={
                        title: this.title,
                        description: this.description,
                        promo: this.promo
                    }
                    console.log(ad)
                }
            }
        }
    };
</script>