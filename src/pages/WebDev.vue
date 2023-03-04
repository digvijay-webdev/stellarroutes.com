<template>
    <main>
        <LandingArea />
        <TimeLine />
        <HighlightsSection 
            heading="SOME GREAT HEADING"
            para-one="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa esse nemo autem nisi facere? Odio, quidem saepe pariatur ex ea consequuntur dolor quam illum delectus autem soluta commodi exercitationem inventore, nobis dolorem architecto cum! Nesciunt ut inventore laudantium reiciendis corrupti optio impedit quia quam, sunt provident?"
            paraTwo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore est sequi in aliquid. Quos iure quidem officia nostrum, quas tempore vitae facilis rem nisi. Provident magnam eum sint unde deleniti vel veniam reprehenderit, possimus voluptatem nam! Perferendis, quidem voluptate. Corrupti laudantium fugit qui veritatis voluptatem excepturi vitae? Ullam, earum corrupti?"
        />
        <ThreeCards
            :cardOne="cardOne"
            :cardTwo="cardTwo"
            :cardThree="cardThree"
        />
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
