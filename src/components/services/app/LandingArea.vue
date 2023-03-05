<template>
    <div class="main">
        <v-container class="container">
            <div class="wrapper">
                <h1 class="heading" data-aos="fade-up" data-aos-duration="500">
                    APP DEVELOPMENT FOR <span :class="`${items[counter].color}--text`">{{ items[counter].text }}</span>
                </h1>
                <p class="text-subtitle headingPara" data-aos="fade-up" data-aos-duration="1000">
                    We specialize in creating custom mobile applications for Android, iOS, and Windows platforms. Our team of experts works with you to develop an app that aligns with your business goals, engages your audience, and delivers a seamless user experience. Let's work together to bring your app ideas to life!
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
                    text: 'ANDROID'
                },
                {
                    color: 'blue',
                    text: 'IOS'
                },
                {
                    color: 'green',
                    text: 'WINDOWS'
                },
            ]
        }
    },
    created() {
        setInterval(() => {
            if (this.counter === 2) {
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
    height: 60vh;
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

@media screen and (max-width: 520px) {
    .heading {
        font-size: 44px;
    }
}
</style>
