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
    metaInfo: {
        title: "Custom App For Your Business",
        meta: [
            {
                name: 'description',
                content: "We specialize in creating custom mobile applications for Android, iOS, and Windows platforms. Our team of experts works with you to develop an app that aligns with your business goals, engages your audience, and delivers a seamless user experience. Let's work together to bring your app ideas to life!"
            }
        ]
    },
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
                        "Our Android app development services are tailored to meet your unique business needs.",
                        "Our team of experienced developers use the latest technologies to create high-quality Android apps.",
                        "From ideation to launch, we'll guide you through the entire app development process.",
                        "Our focus on creating visually appealing designs and seamless user experiences.",
                        "Whether you need a simple app or a complex enterprise solution, we have the skills and expertise to deliver a successful Android app.",
                    ]
                },
                cardTwo: {
                    heading: "IOS Apps",
                    bullets: [
                        "Our team specializes in developing custom iOS apps tailored to your business needs.",
                        "We design and develop visually stunning and user-friendly apps that engage your audience.",
                        "We work closely with you throughout the development process to ensure your app meets your requirements.",
                        "Let us help you bring your iOS app idea to life and stand out in the competitive App Store market.",
                        "Our expertise ensures high-quality and high-performance app development.",
                    ]
                },
                cardThree: {
                    heading: "Desktop Apps",
                    bullets: [
                        "We offer custom Windows app development services to bring your business to the Microsoft Store.",
                        "Our team of experts will work with you to create a user-friendly and visually stunning Windows app.",
                        "We create apps of any complexity level, from simple informational to complex business apps.",
                        "We use the latest technologies and tools to ensure that your app is optimized for performance.",
                        "Let's work together to bring your business to the Windows platform and reach a wider audience.",
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
