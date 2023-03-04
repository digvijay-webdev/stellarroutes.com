<template>
    <div class="main">
        <v-container>
            <div class="wrapper">
                <h1 data-aos="fade-up" data-aos-duration="1000">{{ heading }}</h1>
                <p data-aos="fade-up" data-aos-duration="1500">
                    {{ paraOne }}
                </p>
                <p data-aos="fade-up" data-aos-duration="1800">
                    {{ paraTwo }}
                </p>
            </div>
        </v-container>
    </div>
</template>

<script>
import aosMixin from "@/mixins/aos.js";

export default {
    name: "HighlightsSection",
    mixins: [aosMixin],
    props: {
        heading: String,
        paraOne: String,
        paraTwo: String
    }
}
</script>

<style scoped>
.main {
    margin: 32px 0;
}

.wrapper {
    width: 60%;
}

.wrapper h1 {
    font-size: 64px;
}

@media screen and (max-width: 1200px) {
    .wrapper {
        width: 80%;
    }
}

@media screen and (max-width: 820px) {
    .wrapper {
        width: 90%;
    }
    .wrapper h1 {
        font-size: 44px;
    }
}

@media screen and (max-width: 820px) {
    .wrapper {
        width: 100%;
    }

    .wrapper p {
        text-align: justify;
    }
    .wrapper h1 {
        font-size: 38px;
    }
}
</style>
