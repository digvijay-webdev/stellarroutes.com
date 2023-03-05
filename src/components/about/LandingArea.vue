<template>
    <div class="main">
        <v-container class="container">
            <div class="wrapper">
                <h1 class="heading" data-aos="fade-up" data-aos-duration="500">
                    INNOVATING FOR <span :class="`${items[counter].color}--text`">{{ items[counter].text }}</span>
                </h1>
                <p class="text-subtitle headingPara" data-aos="fade-up" data-aos-duration="1000">
                    We are Stellar Routes, a tech company providing innovative software solutions. Our team develops user-friendly technology to help clients achieve their goals and stay ahead of the curve. We believe in the transformative power of technology and are committed to your success.
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
                    text: 'PROGRESS'
                },
                {
                    color: 'blue',
                    text: 'IMPACT'
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
