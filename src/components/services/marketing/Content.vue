<template>
    <div class="main">
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="6" lg="4">
                    <v-card class="py-4" elevation="0">
                        <h1 class="text-center">
                            <v-avatar size="66px" color="primary">
                                <v-icon x-large color="white">mdi-finance</v-icon>
                            </v-avatar>
                        </h1>
                        
                        <h2 class="text-center my-2">Social Media Marketing</h2>
                        <p class="text-center px-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quaerat placeat sequi ipsum molestias eligendi provident accusamus quod, modi obcaecati saepe dolores?
                        </p>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="4">
                    <v-card class="py-4" elevation="0">
                        <h1 class="text-center">
                            <v-avatar size="66px" color="primary">
                                <v-icon x-large color="white">mdi-web</v-icon>
                            </v-avatar>
                        </h1>
                        
                        <h2 class="text-center my-2">SEO Optimization</h2>
                        <p class="text-center px-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quaerat placeat sequi ipsum molestias eligendi provident accusamus quod, modi obcaecati saepe dolores?
                        </p>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="4">
                    <v-card class="py-4" elevation="0">
                        <h1 class="text-center">
                            <v-avatar size="66px" color="primary">
                                <v-icon x-large color="white">mdi-email</v-icon>
                            </v-avatar>
                        </h1>
                        
                        <h2 class="text-center my-2">Email Marketing</h2>
                        <p class="text-center px-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quaerat placeat sequi ipsum molestias eligendi provident accusamus quod, modi obcaecati saepe dolores?
                        </p>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <div class="wrapper mt-4">
            <v-row>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <v-img height="400px" src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"></v-img>
                </v-col>
                <v-col class="d-flex align-center" cols="12" sm="12" md="6" lg="6">
                    <v-card class="pa-4 card" elevation="0">
                        <h1 class="my-2">HEADING FOR MARKETING SECTION</h1>
                        <h3 class="my-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                        <p class="text-caption text-justify">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quia, excepturi quidem ipsam voluptatibus, natus ad temporibus id facilis minus provident distinctio! Ipsa doloribus voluptates soluta blanditiis totam excepturi molestiae iusto ex beatae commodi. Culpa quod facere dignissimos temporibus quisquam ullam repudiandae, consequuntur ea.
                        </p>
                        <p class="text-caption text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam quod accusamus pariatur a officia repellat vitae earum placeat eaque et! Molestiae libero enim a commodi aliquam laudantium, obcaecati necessitatibus, odio suscipit, quaerat repudiandae neque! Molestiae nemo debitis officia assumenda rem!
                        </p>
                        <v-btn color="black" outlined rounded>Let's Get Started</v-btn>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "Content"
}
</script>

<style scoped>
.main {
    margin: 24px auto;
}
</style>
