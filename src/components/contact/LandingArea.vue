<template>
    <div class="main">
        <v-container class="container">
            <div class="wrapper">
                <h1 class="heading" data-aos="fade-up" data-aos-duration="500">
                    LET'S TURN YOUR IDEAS TO <span :class="`${items[counter].color}--text`">{{ items[counter].text }}</span>
                </h1>
                <!-- <p class="text-subtitle headingPara" data-aos="fade-up" data-aos-duration="1000">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore architecto quae officiis distinctio cupiditate, aliquid necessitatibus temporibus laboriosam alias fugit voluptatibus minima obcaecati voluptatem quasi qui vero deserunt explicabo earum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ratione.
                </p> -->
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
                    text: 'SUCCESS'
                },
                {
                    color: 'blue',
                    text: 'REALITY'
                },
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
