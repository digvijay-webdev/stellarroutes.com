<template>
    <main>
        <v-container class="mb-4">
            <div class="img-wrapper">
                <v-img height="100%" src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"></v-img>
            </div>
            <div class="content-wrapper">
                <h1 class="text-center">
                    Building a real-time commenting app with Socket.io and React
                </h1>
                <p class="text-subtitle text-center">
                    Author: <em>Aditi Parikh</em> · Feb 19, 2023 · <v-icon>mdi-book-open-variant</v-icon> 16 min read
                </p>

                <p class="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis aspernatur debitis perspiciatis pariatur, similique animi accusantium nulla atque aut quas harum in odio ratione sed, nostrum ex obcaecati amet quisquam voluptates voluptate expedita veritatis! Culpa praesentium, odit pariatur aut eligendi quos minus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero labore saepe expedita quibusdam fuga perspiciatis ullam obcaecati autem recusandae dignissimos fugit quam odio repudiandae quia, ipsum, nulla eaque quae aliquam illo! Est, itaque laborum atque excepturi tempore reiciendis incidunt aperiam pariatur iure id corrupti in velit odio minima sunt illum magni, iste ipsum perferendis delectus eos. Asperiores, quasi? At, tempora!
                </p>

                <h2 class="mt-4">
                    Section Heading One
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis aspernatur debitis perspiciatis pariatur, similique animi accusantium nulla atque aut quas harum in odio ratione sed, nostrum ex obcaecati amet quisquam voluptates voluptate expedita veritatis! Culpa praesentium, odit pariatur aut eligendi quos minus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero labore saepe expedita quibusdam fuga perspiciatis ullam obcaecati autem recusandae dignissimos fugit quam odio repudiandae quia, ipsum, nulla eaque quae aliquam illo! Est, itaque laborum atque excepturi tempore reiciendis incidunt aperiam pariatur iure id corrupti in velit odio minima sunt illum magni, iste ipsum perferendis delectus eos. Asperiores, quasi? At, tempora!
                </p>

                <h2 class="mt-4">
                    Section Heading Two
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis aspernatur debitis perspiciatis pariatur, similique animi accusantium nulla atque aut quas harum in odio ratione sed, nostrum ex obcaecati amet quisquam voluptates voluptate expedita veritatis! Culpa praesentium, odit pariatur aut eligendi quos minus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero labore saepe expedita quibusdam fuga perspiciatis ullam obcaecati autem recusandae dignissimos fugit quam odio repudiandae quia, ipsum, nulla eaque quae aliquam illo! Est, itaque laborum atque excepturi tempore reiciendis incidunt aperiam pariatur iure id corrupti in velit odio minima sunt illum magni, iste ipsum perferendis delectus eos. Asperiores, quasi? At, tempora!
                </p>

                <h2 class="mt-4">
                    Section Heading Three
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis aspernatur debitis perspiciatis pariatur, similique animi accusantium nulla atque aut quas harum in odio ratione sed, nostrum ex obcaecati amet quisquam voluptates voluptate expedita veritatis! Culpa praesentium, odit pariatur aut eligendi quos minus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero labore saepe expedita quibusdam fuga perspiciatis ullam obcaecati autem recusandae dignissimos fugit quam odio repudiandae quia, ipsum, nulla eaque quae aliquam illo! Est, itaque laborum atque excepturi tempore reiciendis incidunt aperiam pariatur iure id corrupti in velit odio minima sunt illum magni, iste ipsum perferendis delectus eos. Asperiores, quasi? At, tempora!
                </p>
            </div>
        </v-container>

        <Footer />
    </main>
</template>

<script>
import Footer from '@/components/global/Footer.vue';

export default {
    name: "SingleBlog",
    components: {
        Footer
    }
}
</script>

<style scoped>
main {
    overflow-x: hidden;
    margin-top: 80px;
}

.img-wrapper {
    height: 500px;
}

.content-wrapper h1 {
    font-size: 38px;
    font-weight: bolder;
}


@media screen and (max-width: 920px) {
    .img-wrapper {
        height: 300px;
    }
}
</style>
