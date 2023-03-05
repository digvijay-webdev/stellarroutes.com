<template>
    <main>
       <LandingArea />
       <HomeSwiper class="mb-4" />
       <FeaturedCard />
       <HighlightsSection
        heading="ATTRACT A CROWD, DRIVE WEBSITE GROWTH"
        paraOne="At Stellar Route, we understand that every business has unique needs, goals and target audience. That's why we offer a range of innovative solutions tailored to meet your specific requirements. Our team of experienced professionals work closely with you to develop customized strategies that will help you achieve your business objectives."
        paraTwo="Whether you're looking to develop a mobile app, build a website, or launch a digital marketing campaign, we have the expertise and experience to deliver results that exceed your expectations. We pride ourselves on delivering high-quality, scalable and user-friendly solutions that are designed to drive growth and improve your bottom line. With Stellar Route by your side, you can be confident that you have a reliable partner who is committed to your success."
        />
        <TopServices />

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
