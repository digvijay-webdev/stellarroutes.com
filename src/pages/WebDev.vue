<template>
    <main>
        <LandingArea />
        <TimeLine />
        <HighlightsSection 
            heading="UNLOCK YOUR BUSINESS'S DIGITAL POTENTIAL"
            para-one="In today's digital age, having a website is crucial for businesses. A website serves as a 24/7 storefront, providing potential customers with easy access to information about your products or services. At Stellar Routes, we understand the importance of a strong online presence and offer top-notch website development services tailored to meet your business needs. Our team of experts will work with you to create a visually stunning, user-friendly, and responsive website that engages your audience and drives growth."
            paraTwo="Choose Stellar Routes for your website development needs and experience the benefits of working with a dedicated and experienced team. Our focus is on providing personalized services that are tailored to the unique needs of your business. From initial concept to final deployment, we work closely with our clients to ensure their vision is brought to life. With a track record of delivering successful projects for a variety of businesses, you can trust us to help you achieve your online goals."
        />
        <!-- <ThreeCards
            :cardOne="cardOne"
            :cardTwo="cardTwo"
            :cardThree="cardThree"
        /> -->
        <HomeSwiper />
        <Footer class="mt-4" />
    </main>
</template>

<script>
import LandingArea from "@/components/services/web/LandingArea.vue";
import TimeLine from "@/components/services/web/TimeLine.vue";
import HighlightsSection from "@/components/global/HighlightsSection.vue";
import ThreeCards from "@/components/global/ThreeCards.vue";
import HomeSwiper from "@/components/home/HomeSwiper.vue";
import Footer from "@/components/global/Footer.vue";

export default {
    name: "WebDev",
    metaInfo: {
        title: "Tailored Web Design",
        meta: [
            {
                name: 'description',
                content: "Our expert team offers tailored website development services to meet your business needs. We create visually stunning, user-friendly, and responsive websites that engage your audience and drive growth. Let's work together to bring your online presence to life, whether you need a simple informational website or a complex e-commerce platform."
            }
        ]
    },
    components: {
        LandingArea,
        TimeLine,
        HighlightsSection,
        ThreeCards,
        HomeSwiper,
        Footer,
    },
    data() {
        return {
            cardOne: {
                heading: "Heading One",
                bullets: [
                    "Digvijay, ipsum dolor sit amet consectetur adipisicing elit.",
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                ],
            },
            cardTwo: {
                heading: "Heading Two",
                bullets: [
                    "Digvijay, ipsum dolor sit amet consectetur adipisicing elit.",
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                ],
            },
            cardThree: {
                heading: "Heading Three",
                bullets: [
                    "Digvijay, ipsum dolor sit amet consectetur adipisicing elit.",
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                ],
            },
        }
    }
}
</script>

<style scoped>
main {
    overflow-x: hidden;
    margin-top: 80px;
}
</style>
