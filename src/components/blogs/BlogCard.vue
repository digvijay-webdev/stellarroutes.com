<template>
    <div class="main">
        <v-container>
            <v-row>
                <v-col v-for="blog in 11" :key="blog" cols="12" sm="12" md="6" lg="4">
                    <router-link to="/blogs">
                        <v-card class="card" height="350px">
                            <v-img height="100%" src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800"></v-img>

                            <div class="content px-2 py-4">
                                <h4>Efficient Time Management</h4>
                                <p class="text-subtitle text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, adipisci!..
                                </p>
                                <v-btn outlined large>Read Blog</v-btn>
                            </div>
                        </v-card>
                    </router-link>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "BlogCard"
}
</script>

<style scoped>
.main {
    /* border: 1px solid red; */
}

.card {
    position: relative;
    overflow: hidden;
    transition: all .3s ease;
}

.card:hover {
    transform: translateY(-5px);
}

.card .content {
    width: 100%;
    background: rgba(255,255,255,0.5);
    -webkit-backdrop-filter: blur(25px);
    backdrop-filter: blur(25px);
    border: 1px solid rgba(255,255,255,0.25);
    position: absolute;
    bottom: 0;
    transition: all .3s ease;
}
</style>
