<template>
    <div class="main">
        <v-row class="mx-4">
            <v-col cols="12" sm="12" md="6" lg="4">
                <v-card class="card">
                    <v-card-title>
                        <h1>
                            <v-icon large>mdi-web</v-icon>
                            Web Development
                        </h1>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <ul>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, laborum.</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro excepturi quos vitae.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro excepturi quos vitae.</li>
                        </ul>
                    </v-card-text>
                    <v-card-actions class="mb-2">
                        <v-btn href="/services" outlined link block color="primary">Learn More</v-btn>
                    </v-card-actions>

                    <div style="background: #3280D5; height: 18px;"></div>
                </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="4">
                <v-card class="card">
                    <v-card-title>
                        <h1>
                            <v-icon large>mdi-android</v-icon>
                            Mobile Development
                        </h1>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <ul>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, laborum.</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro excepturi quos vitae.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro excepturi quos vitae.</li>
                        </ul>
                    </v-card-text>
                    <v-card-actions class="mb-2">
                        <v-btn href="/services" outlined link block color="success">Learn More</v-btn>
                    </v-card-actions>

                    <div style="background: #5CB55E; height: 18px;"></div>
                </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="4">
                <v-card class="card">
                    <v-card-title>
                        <h1>
                            <v-icon large>mdi-brain</v-icon>
                            Data Analytics
                        </h1>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <ul>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, laborum.</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro excepturi quos vitae.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro excepturi quos vitae.</li>
                        </ul>
                    </v-card-text>
                    <v-card-actions class="mb-2">
                        <v-btn href="/services" outlined link block color="warning">Learn More</v-btn>
                    </v-card-actions>

                    <div style="background: #FB962A; height: 18px;"></div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "TopServices"
}
</script>

<style scoped>
h1 {
    font-size: 32px;
}

ul li {
    list-style-type: none;
    list-style-position: outside;
    padding-left: 35px;
    vertical-align: center;
    background: url(@/assets/icon-check.png) top left no-repeat;
}

.card {
    border-radius: 0;
    transition: all .3s ease;
}

.card:hover {
    transform: translateY(-10px);
}
</style>
