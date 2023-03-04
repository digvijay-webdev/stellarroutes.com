<template>
    <div class="main">
        <v-container class="container">
            <div class="wrapper">
                <h1 class="heading" data-aos="fade-up" data-aos-duration="500">
                    DISCOVER OUR UNIQUE <span :class="`${items[counter].color}--text`">{{ items[counter].text }}</span>
                </h1>
                <p class="text-subtitle headingPara" data-aos="fade-up" data-aos-duration="1000">
                    Welcome to our tech blog, where we share expert perspectives on the latest tech trends and innovations. Discover the intersection of technology and culture through our in-depth analysis and insights. Explore our blog for valuable tech news and inspiration.
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
                    color: 'green',
                    text: 'INNOVATIVE INSIGHTS'
                },
                {
                    color: 'blue',
                    text: 'VIEWPOINTS'
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
