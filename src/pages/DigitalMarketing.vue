<template>
    <main>
        <LandingArea />
        <Content />
        <Footer />
    </main>
</template>

<script>
import LandingArea from '@/components/services/marketing/LandingArea.vue';
import Content from '@/components/services/marketing/Content.vue';
import Footer from '@/components/global/Footer.vue';

export default {
    name: "DigitalMarketing",
    metaInfo: {
        title: "Digital Marketing",
        meta: [
            {
                name: 'description',
                content: "Welcome to our digital marketing page, where we specialize in helping businesses succeed online. Our team of experienced marketing professionals leverages data-driven strategies to help our clients improve their online presence, increase traffic and engagement, and ultimately grow their businesses. Whether you're looking for search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, or any other digital marketing services, we're here to help you reach your goals. Let's get started!"
            }
        ]
    },
    components: {
        LandingArea,
        Content,
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
