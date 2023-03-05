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
                            Our Social Media Marketing service helps businesses reach their target audience and build brand awareness. We use data-driven strategies to deliver measurable results and drive growth.
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
                            Our SEO Optimization service helps improve your website's visibility and ranking on search engines, driving organic traffic to your website and increasing leads and sales.
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
                            Reach your audience directly through their inbox with our Email Marketing service. We'll create and manage effective email campaigns to boost your brand and drive conversions.
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
                        <h1 class="my-2">DIGITAL MARKETING MADE EASY</h1>
                        <h3 class="my-2">
                            Drive Business Success with Stellar Routes' Digital Marketing Services
                        </h3>
                        <p class="text-caption text-justify">
                            At Stellar Routes, we provide customized digital marketing solutions with transparency and collaboration. Our experts stay ahead of industry trends to deliver effective strategies for SEO, social media, and email marketing. With a proven track record of success, we are dedicated to helping businesses grow their online presence and achieve their goals. Trust Stellar Routes to take your business to the next level.
                        </p>
                        <p class="text-caption text-justify">
                            Stellar Routes is committed to excellence and customer satisfaction. As one of the best digital marketing agencies in the industry, we offer top-quality services tailored to your business needs. Our team of experts is always informed and involved in the process, ensuring that you receive the most up-to-date and effective strategies. With a focus on staying ahead of the curve, we continuously monitor industry trends and updates to deliver results for your business. Let Stellar Routes help you succeed with our customized digital marketing solutions.
                        </p>
                        <v-btn href="/contact" link color="black" outlined rounded>Let's Get Started</v-btn>
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
