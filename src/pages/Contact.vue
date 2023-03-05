<template>
    <main>
        <LandingArea />
        <Form />
        <Footer />
    </main>
</template>

<script>
import LandingArea from '@/components/contact/LandingArea.vue';
import Form from '@/components/contact/Form.vue';
import Footer from '@/components/global/Footer.vue';

export default {
    name: "Contact",
    metaInfo: {
        title: "Contact us",
    },
    components: {
        LandingArea,
        Form,
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
