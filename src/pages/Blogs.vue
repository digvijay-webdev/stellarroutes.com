<template>
    <main>
        <LandingArea />
        <BlogCard />
        <Footer />
    </main>
</template>

<script>
import LandingArea from '@/components/blogs/LandingArea.vue';
import BlogCard from '@/components/blogs/BlogCard.vue';
import Footer from '@/components/global/Footer.vue';

export default {
    name: "Blogs",
    components: {
        LandingArea,
        BlogCard,
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
