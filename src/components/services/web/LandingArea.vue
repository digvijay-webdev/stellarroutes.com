<template>
    <div class="main">
        <v-container class="container">
            <div class="wrapper">
                <h1 class="heading" data-aos="fade-up" data-aos-duration="500">
                    TAILORED WEBSITE FOR <span :class="`${items[counter].color}--text`">{{ items[counter].text }}</span>
                </h1>
                <p class="text-subtitle headingPara" data-aos="fade-up" data-aos-duration="1000">
                    Welcome to Stellar Routes' Website Development page! Our expert team offers tailored website development services to meet your business needs. We create visually stunning, user-friendly, and responsive websites that engage your audience and drive growth. Let's work together to bring your online presence to life, whether you need a simple informational website or a complex e-commerce platform.
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
                    text: 'YOUR BUSINESS'
                },
                {
                    color: 'green',
                    text: 'YOUR BRAND'
                },
                {
                    color: 'amber',
                    text: 'YOUR STARTUP'
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
</style>
