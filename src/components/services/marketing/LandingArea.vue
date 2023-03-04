<template>
    <div class="main">
        <v-container class="container">
            <div class="wrapper">
                <h1 class="heading" data-aos="fade-up" data-aos-duration="500">
                    <span :class="`${items[counter].color}--text`">{{ items[counter].text }}</span> YOUR ONLINE PRESENCE WITH US
                </h1>
                <p class="text-subtitle headingPara" data-aos="fade-up" data-aos-duration="1000">
                    Welcome to our digital marketing page, where we specialize in helping businesses succeed online. Our team of experienced marketing professionals leverages data-driven strategies to help our clients improve their online presence, increase traffic and engagement, and ultimately grow their businesses. Whether you're looking for search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, or any other digital marketing services, we're here to help you reach your goals. Let's get started!
                </p>
            </div>
        </v-container>
    </div>
</template>

<script>
import aosMixin from "@/mixins/aos.js";

export default {
    name: "LandingArea",
    mixins: [aosMixin],
    data() {
        return {
            counter: 0,
            items: [
                {
                    color: 'red',
                    text: 'IMPROVE'
                },
                {
                    color: 'blue',
                    text: 'ELEVATE'
                }
            ]
        }
    },
    created() {
        setInterval(() => {
            if (this.counter === 1) {
                this.counter = 0;
            } else {
                this.counter++;
            }
        }, 5000);
    }
}
</script>

<style scoped>
.main {
    height: max-content;
    margin-bottom: 24px;
}

.container {
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
}

.wrapper {
    width: 80%;
}

.heading {
    font-size: 84px;
    font-weight: bolder;
}

.heading span {
    transition: all .9s ease;
}

.headingPara {
    width:80%;
}

@media screen and (max-width: 920px) {
    .main {
        height: max-content;
    }
    .wrapper {
        width: 100%;
    }
    .heading {
        font-size: 54px;
    }
    .headingPara {
        width: 100%;
    }
}
</style>
