<template>
    <div class="main">
        <v-row class="px-4 mb-4">
            <v-col cols="12" sm="12" md="6" lg="4">
                <v-card class="card" height="450px">
                    <v-img height="100%" src="https://images.pexels.com/photos/7820358/pexels-photo-7820358.jpeg?auto=compress&cs=tinysrgb&w=800"></v-img>
                    
                    <div class="hidden-content px-2 py-4">
                        <h3>HOTELS BRIDGE</h3>
                        <p class="text-subtitle text-justify">
                            HotelsBridge aims at improving hotel communication by providing software that can helps the guest in getting full satisfaction that he deserves. Its not just a solution to communication but a luxury that you can provide.
                        </p>
                        <v-btn href="https://hotelsbridge.com" link outlined large>View Product</v-btn>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="8">
                <v-card class="card" height="450px">    
                    <v-img height="100%" src="https://images.pexels.com/photos/7567230/pexels-photo-7567230.jpeg?auto=compress&cs=tinysrgb&w=800"></v-img>
                    <div class="hidden-content px-2 py-4">
                        <h3>MarkeTON</h3>
                        <p class="text-subtitle text-justify">
                            MarkeTON is a partly decentralised marketplace for buying and selling secondary electronic goods using TON blockchain. It is deployed as a DAPP (Decentralized Application) on Telegram. Anyone with access to Telegram and TON wallet can make purchase or sell their products on MarkeTON.
                        </p>
                        <v-btn href="https://github.com/digvijay-webdev/MarkeTON" link outlined large>View Project</v-btn>
                    </div>
                </v-card>
            </v-col>
        </v-row>

        <v-row class="px-4">
            <v-col cols="12" sm="12" md="6" lg="8">
                <v-card class="card" height="450px">    
                    <v-img height="100%" src="https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=800"></v-img>
                    <div class="hidden-content px-2 py-4">
                        <h3>WEBSITE DEVELOPMENT</h3>
                        <p class="text-subtitle text-justify">
                            At Stellar Route, we offer top-notch website development services that cater to your specific needs. Our team of skilled developers ensures that your website is responsive, user-friendly, and visually appealing. We work closely with you to deliver the best possible results and help you achieve your business goals.
                        </p>
                        <v-btn href="/web-development" link outlined large>Learn More</v-btn>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="4">
                <v-card class="card" height="450px">
                    <v-img height="100%" src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800"></v-img>
                    
                    <div class="hidden-content px-2 py-4">
                        <h3>MOBILE APP DEVELOPMENT</h3>
                        <p class="text-subtitle text-justify">
                            At Stellar Route, we're passionate about crafting innovative mobile apps that are tailored to meet your unique business needs. Our team of experienced developers uses the latest tools and technologies to create high-performing, user-friendly apps that will help your business succeed in today's competitive digital landscape.
                        </p>
                        <v-btn href="/app-development" link outlined large>Learn More</v-btn>
                    </div>
                </v-card>
            </v-col>
        </v-row>

        <v-row class="px-4">
            <v-col cols="12" sm="12" md="6" lg="4">
                <v-card class="card" height="450px">
                    <v-img height="100%" src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800"></v-img>
                    
                    <div class="hidden-content px-2 py-4">
                        <h3>DIGITAL MARKETING</h3>
                        <p class="text-subtitle text-justify">
                            At Stellar Route, we offer top-notch digital marketing services that help businesses grow their online presence and reach their target audience. Our team of experts works closely with clients to create tailored strategies that drive results and increase conversions.
                        </p>
                        <v-btn href="/digital-marketing" link outlined large>Learn More</v-btn>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="8">
                <v-card class="card" height="450px">    
                    <v-img height="100%" src="https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=800"></v-img>
                    <div class="hidden-content px-2 py-4">
                        <h3>DESKTOP APP DEVELOPMENT</h3>
                        <p class="text-subtitle text-justify">
                            At Stellar Route, we offer exceptional desktop app development services tailored to meet the unique needs of our clients. Our team of skilled developers and designers use cutting-edge technologies and innovative strategies to deliver high-performing and user-friendly desktop applications that enhance productivity and efficiency.
                        </p>
                        <v-btn href="/app-development" outlined large>Learn More</v-btn>
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

/* Show hidden content on small screen sizes */
@media screen and (max-width: 1020px) {
    .card .hidden-content {
        bottom: 0;
    }
}
</style>
