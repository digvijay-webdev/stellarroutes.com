<template>
    <div class="main">
        <v-row class="px-4 mb-4">
            <v-col cols="12" sm="12" md="6" lg="4">
                <v-card class="card" height="450px">
                    <v-img height="100%" src="https://images.pexels.com/photos/15476701/pexels-photo-15476701.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"></v-img>
                    
                    <div class="hidden-content px-2 py-4">
                        <h3>Heading</h3>
                        <p class="text-subtitle text-justify">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, quam! Inventore tempora eum corporis dicta! Reiciendis ipsam quis id illum, cum laudantium.
                        </p>
                        <v-btn outlined large>View Project</v-btn>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="8">
                <v-card class="card" height="450px">    
                    <v-img height="100%" src="https://images.pexels.com/photos/15695047/pexels-photo-15695047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></v-img>
                    <div class="hidden-content px-2 py-4">
                        <h3>Heading</h3>
                        <p class="text-subtitle text-justify">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, quam! Inventore tempora eum corporis dicta! Reiciendis ipsam quis id illum, cum laudantium.
                        </p>
                        <v-btn outlined large>View Project</v-btn>
                    </div>
                </v-card>
            </v-col>
        </v-row>

        <v-row class="px-4">
            <v-col cols="12" sm="12" md="6" lg="8">
                <v-card class="card" height="450px" data-aos="fade-up" data-aos-duration="500">    
                    <v-img height="100%" src="https://images.pexels.com/photos/2565919/pexels-photo-2565919.jpeg?auto=compress&cs=tinysrgb&w=800"></v-img>
                    <div class="hidden-content px-2 py-4">
                        <h3>Heading</h3>
                        <p class="text-subtitle text-justify">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, quam! Inventore tempora eum corporis dicta! Reiciendis ipsam quis id illum, cum laudantium.
                        </p>
                        <v-btn outlined large>View Project</v-btn>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="4">
                <v-card class="card" height="450px" data-aos="fade-up" data-aos-duration="1000">
                    <v-img height="100%" src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=800"></v-img>
                    
                    <div class="hidden-content px-2 py-4">
                        <h3>Heading</h3>
                        <p class="text-subtitle text-justify">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, quam! Inventore tempora eum corporis dicta! Reiciendis ipsam quis id illum, cum laudantium.
                        </p>
                        <v-btn outlined large>View Project</v-btn>
                    </div>
                </v-card>
            </v-col>
        </v-row>

        <v-row class="px-4">
            <v-col cols="12" sm="12" md="6" lg="4">
                <v-card class="card" height="450px" data-aos="fade-up" data-aos-duration="500">
                    <v-img height="100%" src="https://images.pexels.com/photos/3184455/pexels-photo-3184455.jpeg?auto=compress&cs=tinysrgb&w=800"></v-img>
                    
                    <div class="hidden-content px-2 py-4">
                        <h3>Heading</h3>
                        <p class="text-subtitle text-justify">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, quam! Inventore tempora eum corporis dicta! Reiciendis ipsam quis id illum, cum laudantium.
                        </p>
                        <v-btn outlined large>View Project</v-btn>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="8">
                <v-card class="card" height="450px" data-aos="fade-up" data-aos-duration="1000">    
                    <v-img height="100%" src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=800"></v-img>
                    <div class="hidden-content px-2 py-4">
                        <h3>Heading</h3>
                        <p class="text-subtitle text-justify">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, quam! Inventore tempora eum corporis dicta! Reiciendis ipsam quis id illum, cum laudantium.
                        </p>
                        <v-btn outlined large>View Project</v-btn>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import aosMixin from "@/mixins/aos.js";

export default {
    name: "FeaturedCard",
    mixins: [aosMixin],
}
</script>

<style scoped>
.card {
    position: relative;
    overflow: hidden;
}

.card .hidden-content {
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
