<template>
    <div class="main">
        <v-container>
            <footer>
                <div class="box">
                    <p class="text-title"><strong>SERVICES</strong></p>
                    <ul>
                        <!-- <li>
                            <router-link to="/data-analytics">Data Analytics</router-link>
                        </li> -->
                        <li>
                            <router-link to="/digital-marketing">Digital Marketing</router-link>
                        </li>
                        <li>
                            <router-link to="/web-development">Website Development</router-link>
                        </li>
                        <li>
                            <router-link to="/app-development">App Development</router-link>
                        </li>
                    </ul>
                </div>

                <div class="box">
                    <p class="text-title"><strong>PRODUCTS</strong></p>
                    <ul>
                        <li>
                            <a href="https://hotelsbridge.com" target="_blank">HotelsBridge</a>
                        </li>
                        <li>
                            <a href="https://github.com/digvijay-webdev/MarkeTON" target="_blank">MarkeTON</a>
                        </li>
                    </ul>
                </div>

                <div class="box">
                    <p class="text-title"><strong>COMPANY</strong></p>
                    <ul>
                        <li>
                            <router-link to="/about">About</router-link>
                        </li>
                        <li>
                            <router-link to="/blogs">Blog</router-link>
                        </li>
                        <!-- <li>
                            <router-link to="/careers">Careers</router-link>
                        </li> -->
                    </ul>
                </div>

                <div class="box">
                    <p class="text-title"><strong>OTHER</strong></p>
                    <ul>
                        <li>
                            <router-link to="/sitemap">Sitemap</router-link>
                        </li>
                        <li>
                            <router-link to="/cookies">Cookies</router-link>
                        </li>
                        <li>
                            <router-link to="/privacy-policy">Privacy Policy</router-link>
                        </li>
                        <li>
                            <router-link to="/terms-and-conditions">Terms & Conditions</router-link>
                        </li>
                    </ul>
                </div>
            </footer>

            <v-divider class="my-4"></v-divider>

            <div class="copybar">
                <p class="text-caption">
                    © 2023 Stellar Routes. All Rights Reserved.
                </p>

                <div class="socialLinks">
                    <v-btn href="#!" small color="#636e72" link icon><v-icon>mdi-linkedin</v-icon></v-btn>
                    <v-btn href="#!" color="#636e72" link icon><v-icon>mdi-instagram</v-icon></v-btn>
                    <v-btn href="#!" color="#636e72" link icon><v-icon>mdi-facebook</v-icon></v-btn>
                    <v-btn href="#!" color="#636e72" link icon><v-icon>mdi-email</v-icon></v-btn>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
a {
    text-decoration: none;
    outline: none;
}
.main {
    padding-top: 18px;
}

footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
}

.box ul li {
    list-style-type: none;
}

.box ul li::before {
    content: "";
    margin-left: -24px;
}

.box ul li a {
    font-size: 14px;
    color: #636e72;
    transition: all .3s ease;
}
.box ul li a:hover {
    text-decoration: underline;
}

.copybar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
}


@media screen and (max-width: 560px) {
    footer {
        flex-direction: column;
    }
    footer .box {
        margin-top: 16px;
    }
    .copybar {
        flex-direction: column;
    }
}
</style>
