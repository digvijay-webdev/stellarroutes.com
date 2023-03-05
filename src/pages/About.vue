<template>
    <main>
        <LandingArea />
        <Reviews />
        <OurTeam />
        <HomeSwiper />
        <Footer />
    </main>
</template>

<script>
import LandingArea from '@/components/about/LandingArea.vue';
import Reviews from '@/components/about/Reviews.vue';
import OurTeam from '@/components/about/OurTeam.vue';
import HomeSwiper from '@/components/home/HomeSwiper.vue';
import Footer from '@/components/global/Footer.vue';

export default {
    name: "About",
    metaInfo: {
        title: "About us",
        meta: [
            {
                name: 'description',
                content: 'We are Stellar Routes, a tech company providing innovative software solutions. Our team develops user-friendly technology to help clients achieve their goals and stay ahead of the curve. We believe in the transformative power of technology and are committed to your success.'
            }
        ]
    },
    components: {
        LandingArea,
        Reviews,
        OurTeam,
        HomeSwiper,
        Footer,
    }
}
</script>

<style scoped>
main {
    overflow-x: hidden;
    margin-top: 80px;
}
</style>
