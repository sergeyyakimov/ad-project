<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm-3>
                <h1 class="text--secondary mb-3">Orders</h1>
                <v-list
                        subheader
                        two-line
                        flat
                >
                    <v-list-item-group
                            multiple
                    >
                        <v-list-item
                            v-for="order in orders"
                            :key="order.id"
                        >

                                <v-list-item-action>
                                    <v-checkbox
                                            :input-value="order.done"
                                            @change="markDone(order)"
                                            color="success"
                                    ></v-checkbox>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <v-list-item-title>{{order.name}}</v-list-item-title>
                                    <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-btn
                                            dark
                                            class="green"
                                            :to="'/ad/' + order.adId"
                                    >
                                        Open
                                    </v-btn>
                                </v-list-item-action>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        orders: [
            {
                id: 'a',
                name: 'Sergey',
                phone: '8-950-020-96-32',
                adId: '123',
                done: false
            }
        ]
    }),
    methods: {
        markDone (order) {
            order.done = true
        }
    }
};
</script>