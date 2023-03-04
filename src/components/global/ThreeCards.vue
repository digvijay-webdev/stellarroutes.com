<template>
    <div class="main">
        <v-row class="mx-4">
            <v-col class="mx-auto" cols="12" sm="8" md="6" lg="4">
                <v-card class="card" elevation="6">
                    <v-card-title>
                        <h1 class="text-uppercase">{{ cardOne.heading }}</h1>
                    </v-card-title>
                    <v-container>
                        <v-divider></v-divider>
                    </v-container>

                    <v-card-text>
                        <v-list>
                            <v-list-item v-for="(item, index) in cardOne.bullets" :key="index">
                                <v-list-item-avatar>
                                    <v-icon>mdi-check-all</v-icon>
                                </v-list-item-avatar>
                                {{ item }}
                            </v-list-item>
                        </v-list>
                    </v-card-text>

                    <div style="background: #3280D5; height: 18px;"></div>
                </v-card>
            </v-col>
            
            <v-col class="mx-auto" cols="12" sm="8" md="6" lg="4">
                <v-card class="card" elevation="6">
                    <v-card-title>
                        <h1 class="text-uppercase">{{ cardTwo.heading }}</h1>
                    </v-card-title>
                    <v-container>
                        <v-divider></v-divider>
                    </v-container>

                    <v-card-text>
                        <v-list>
                            <v-list-item v-for="(item, index) in cardTwo.bullets" :key="index">
                                <v-list-item-avatar>
                                    <v-icon>mdi-check-all</v-icon>
                                </v-list-item-avatar>
                                {{ item }}
                            </v-list-item>
                        </v-list>
                    </v-card-text>

                    <div style="background: #3280D5; height: 18px;"></div>
                </v-card>
            </v-col>

            <v-col class="mx-auto" cols="12" sm="8" md="6" lg="4">
                <v-card class="card" elevation="6">
                    <v-card-title>
                        <h1 class="text-uppercase">{{ cardThree.heading }}</h1>
                    </v-card-title>
                    <v-container>
                        <v-divider></v-divider>
                    </v-container>

                    <v-card-text>
                        <v-list>
                            <v-list-item v-for="(item, index) in cardThree.bullets" :key="index">
                                <v-list-item-avatar>
                                    <v-icon>mdi-check-all</v-icon>
                                </v-list-item-avatar>
                                {{ item }}
                            </v-list-item>
                        </v-list>
                    </v-card-text>

                    <div style="background: #3280D5; height: 18px;"></div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "ThreeCards",
    props: {
        cardOne: Object,
        cardTwo: Object,
        cardThree: Object,
    }
}
</script>

<style scoped>
.main {
    margin: 24px 0;
}

.card {
    border-radius: 0;
    transition: all .3s ease;
}

.card:hover {
    transform: translateY(-10px);
}
</style>
