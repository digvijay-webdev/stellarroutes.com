<template>
    <div class="main pb-4">
        <v-container>
            <h1 class="pt-4">OUR REVIEWS</h1>
            <v-row>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <h2>Happy Clients, Happy Us: Our Reviews</h2>
                    <p class="text-justify">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quis vitae est adipisci quidem commodi voluptatibus ipsam aliquam tempore architecto! Maxime similique incidunt optio laudantium sapiente sequi itaque libero hic! Voluptate, nulla, architecto inventore quis quae odio porro amet reiciendis eum eveniet harum alias.
                    </p>
                    <p class="text-justify">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi commodi recusandae minus, odit, reprehenderit tenetur, totam ipsam distinctio vitae laudantium ipsa repudiandae.
                    </p>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <v-card elevation="2">
                        <v-card-title>
                            4.9 Star Ratings
                        </v-card-title>
                        <v-divider></v-divider>

                        <v-row>
                            <v-col cols="12" sm="6" md="6" lg="6">
                                <v-card-text class="text-center">
                                    <h3 class="mb-2">
                                        Trustpilot <sup><small> (14)</small></sup>
                                    </h3>
                                    <v-progress-circular :rotate="360" :size="100" :width="15" value="95" color="green">
                                        95%
                                    </v-progress-circular>
                                </v-card-text>
                            </v-col>
                            <v-col cols="12" sm="6" md="6" lg="6">
                                <v-card-text class="text-center">
                                    <h3 class="mb-2">
                                        Google <sup><small> (21)</small></sup>
                                    </h3>
                                    <v-progress-circular :rotate="360" :size="100" :width="15" value="92" color="amber">
                                        92%
                                    </v-progress-circular>
                                </v-card-text>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import aosMixin from "@/mixins/aos.js";

export default {
    name: "Reviews",
    mixins: [aosMixin],
}
</script>

<style scoped>
.main {
    background: #E0E3E4;
    margin: 18px 0;
}

h1 {
    font-size: 54px;
}
</style>
