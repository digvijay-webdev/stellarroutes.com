<template>
    <main>
       <LandingArea />
       <FeaturedCard />
       <HighlightsSection
        heading="ATTRACT A CROWD, DRIVE WEBSITE GROWTH"
        paraOne="Even the most beautiful website design and development in the world won't realize its full potential if customers cannot find the site when they search. We can maximize the performance of your new website."
        paraTwo="Our search engine optimization builds on our custom web design and web development service and improves your website’s search performance. Our Pay-Per-Click (PPC) management services will ensure you get the most out of every dollar, your ads are shown in the most effective positions, and our review generation service will get you more 5-star reviews on the sites that matter most!"
        />
        <TopServices />
        <HomeSwiper />

        <Footer />
    </main>
</template>

<script>
import LandingArea from '@/components/home/LandingArea.vue';
import FeaturedCard from '@/components/home/FeaturedCard.vue';
import HighlightsSection from "@/components/global/HighlightsSection.vue";
import TopServices from '@/components/home/TopServices.vue';
import HomeSwiper from '@/components/home/HomeSwiper.vue';
import Footer from '@/components/global/Footer.vue';

export default {
    name: "Home",
    components: {
        LandingArea,
        FeaturedCard,
        HighlightsSection,
        TopServices,
        HomeSwiper,
        Footer
    }
}
</script>

<style scoped>
main {
    overflow-x: hidden;
    margin-top: 80px;
}
</style>
