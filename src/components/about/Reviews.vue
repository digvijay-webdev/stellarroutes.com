<template>
    <div class="main pb-4">
        <v-container>
            <h1 class="pt-4">OUR REVIEWS</h1>
            <v-row>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <h2>Happy Clients, Happy Us: Our Reviews</h2>
                    <p class="text-justify">
                        Stellar Routes takes pride in providing top-quality services to our clients, with their satisfaction and success stories at the heart of everything we do. Our reviews section showcases the feedback we have received from clients and the positive impact our services have had on their businesses. From website development to digital marketing, we consistently receive positive feedback. 
                    </p>
                    <p class="text-justify">
                        Transparency is important to us, and our reviews section provides potential clients with the opportunity to hear from businesses we've worked with. We strive to build long-lasting relationships with our clients and are committed to delivering top-quality services that help them innovate, scale, and expand their businesses.
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
