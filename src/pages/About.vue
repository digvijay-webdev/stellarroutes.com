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
