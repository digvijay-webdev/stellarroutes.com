<template>
    <main>
        <LandingArea />
        <HomeSwiper />
        <TimeLine />
        <ThreeCards
            :cardOne="cardContent.cardOne"
            :cardTwo="cardContent.cardTwo"
            :cardThree="cardContent.cardThree"
        />
        <Footer class="mt-4" />
    </main>
</template>

<script>
import LandingArea from "@/components/services/app/LandingArea.vue";
import TimeLine from "@/components/services/web/TimeLine.vue";
import HomeSwiper from "@/components/home/HomeSwiper.vue";
import ThreeCards from "@/components/global/ThreeCards.vue";
import Footer from "@/components/global/Footer.vue";

export default {
    name: "AppDev",
    components: {
        LandingArea,
        TimeLine,
        HomeSwiper,
        ThreeCards,
        Footer,
    },
    data() {
        return {
            cardContent: {
                cardOne: {
                    heading: "Android Apps",
                    bullets: [
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti officia harum doloribus in earum?",
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti officia harum doloribus in earum?",
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti officia harum doloribus in earum?",
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti officia harum doloribus in earum?",
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti officia harum doloribus in earum?",
                    ]
                },
                cardTwo: {
                    heading: "IOS Apps",
                    bullets: [
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti officia harum doloribus in earum?",
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti officia harum doloribus in earum?",
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti officia harum doloribus in earum?",
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti officia harum doloribus in earum?",
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti officia harum doloribus in earum?",
                    ]
                },
                cardThree: {
                    heading: "Desktop Apps",
                    bullets: [
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti officia harum doloribus in earum?",
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti officia harum doloribus in earum?",
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti officia harum doloribus in earum?",
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti officia harum doloribus in earum?",
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti officia harum doloribus in earum?",
                    ]
                }
            }
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
