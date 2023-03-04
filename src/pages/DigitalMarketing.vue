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
