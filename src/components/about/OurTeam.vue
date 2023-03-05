<template>
    <div class="main">
        <v-container>
            <h1 class="text-center mb-4">MEET THE TEAM</h1>

            <v-row>
                <v-col class="mx-auto" cols="12" sm="8" md="6" lg="4">
                    <v-card class="card">
                        <v-img height="400" src="@/assets/digvijay.jpeg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                            <v-card-title>Digvijay Padhiyar</v-card-title>
                        </v-img>

                        <div class="hidden-content px-2 py-4">
                            <h3>Digvijay Padhiyar</h3>
                            <p class="text-title">Co-Founder & CTO</p>

                            <div class="links">
                                <v-btn href="https://www.linkedin.com/in/digvijay-padhiyar-2a6a77179" link outlined icon>
                                    <v-icon>mdi-linkedin</v-icon>
                                </v-btn>
                                <v-btn href="https://github.com/digvijay-webdev" class="mx-2" link outlined icon>
                                    <v-icon>mdi-github</v-icon>
                                </v-btn>
                                <v-btn href="https://digvijay.tech" link outlined icon>
                                    <v-icon>mdi-web</v-icon>
                                </v-btn>
                            </div>
                        </div>
                    </v-card>
                </v-col>
                <v-col class="mx-auto" cols="12" sm="8" md="6" lg="4">
                    <v-card class="card">
                        <v-img height="400" src="@/assets/preet.jpeg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                            <v-card-title>Preet Parikh</v-card-title>
                        </v-img>

                        <div class="hidden-content px-2 py-4">
                            <h3>Preet Parikh</h3>
                            <p class="text-title">Co-Founder & CEO</p>

                            <div class="links">
                                <v-btn href="https://www.linkedin.com/in/preet-parikh26" link outlined icon>
                                    <v-icon>mdi-linkedin</v-icon>
                                </v-btn>
                            </div>
                        </div>
                    </v-card>
                </v-col>
                <v-col class="mx-auto" cols="12" sm="8" md="6" lg="4">
                    <v-card class="card">
                        <v-img height="400" src="@/assets/aditi.jpeg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                            <v-card-title>Aditi Parikh</v-card-title>
                        </v-img>

                        <div class="hidden-content px-2 py-4">
                            <h3>Aditi Parikh</h3>
                            <p class="text-title">Co-Founder & Fullstack Developer</p>

                            <div class="links">
                                <v-btn href="https://www.linkedin.com/in/aditi-parikh05" link outlined icon>
                                    <v-icon>mdi-linkedin</v-icon>
                                </v-btn>
                            </div>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "OurTeam"
}
</script>

<style scoped>
h1 {
    font-size: 44px;
}

.card {
    position: relative;
    overflow: hidden;
}

.card .hidden-content {
    width: 100%;
    background: rgba(255,255,255,0.5);
    -webkit-backdrop-filter: blur(25px);
    backdrop-filter: blur(25px);
    border: 1px solid rgba(255,255,255,0.25);
    position: absolute;
    bottom: -100%;
    transition: all .3s ease;
}

.card:hover > .hidden-content {
    bottom: 0;
}
</style>
