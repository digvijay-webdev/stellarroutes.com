<template>
    <div class="main">
        <v-app-bar style="background: rgba(255,255,255,0.5); backdrop-filter: blur(22px);" height="80px" fixed>
            <v-toolbar-title>
                <h3>
                    <router-link class="logo" to="/">
                        Kipperin
                    </router-link>
                </h3>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        </v-app-bar>

        <!-- navigation drawer -->
        <v-navigation-drawer v-model="drawer" fixed>
            <div class="frame-bg"></div>

            <v-list nav dense>
                <v-list-item-group v-model="group">
                    <router-link to="/">
                        <v-list-item>
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link to="/about">
                        <v-list-item>
                            <v-list-item-title>About</v-list-item-title>
                        </v-list-item>
                    </router-link>

                    <v-list-group :value="false">
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>Services</v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <router-link to="/web-development">
                            <v-list-item>
                                <v-list-item-title>
                                    Web Development
                                </v-list-item-title>
                            </v-list-item>
                        </router-link>
                        <router-link to="/app-development">
                            <v-list-item>
                                <v-list-item-title>
                                    App Development
                                </v-list-item-title>
                            </v-list-item>
                        </router-link>
                        <router-link to="/digital-marketing">
                            <v-list-item>
                                <v-list-item-title>
                                    Digital Marketing
                                </v-list-item-title>
                            </v-list-item>
                        </router-link>
                        <router-link to="/data-analytics">
                            <v-list-item>
                                <v-list-item-title>
                                    Data Analytics
                                </v-list-item-title>
                            </v-list-item>
                        </router-link>
                    </v-list-group>

                    <v-list-group :value="false">
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>Products</v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <a href="https://hotelsbridge.com" target="_blank">
                            <v-list-item>
                                <v-list-item-title>
                                    HotelsBridge
                                </v-list-item-title>
                            </v-list-item>
                        </a>
                        <a href="https://github.com/digvijay-webdev/MarkeTON" target="_blank">
                            <v-list-item>
                                <v-list-item-title>
                                    MarkeTON
                                </v-list-item-title>
                            </v-list-item>
                        </a>
                    </v-list-group>

                    <router-link to="/blogs">
                        <v-list-item>
                            <v-list-item-title>Blog</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link to="/contact">
                        <v-list-item>
                            <v-list-item-title>Let's Get Started</v-list-item-title>
                        </v-list-item>
                    </router-link>
                </v-list-item-group>
            </v-list>

            <!-- navigation footer -->
            <template v-slot:append>
                <div class="pa-2">
                    <v-divider></v-divider>
                    <p class="text-caption pt-2">
                        © 2023 Kipperin Limited. All Rights Reserved.
                    </p>
                </div>
            </template>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: "MobileNav",
    data() {
        return {
            drawer: false,
            group: null,
        }
    }
}
</script>

<style scoped>
/* css reset */
a {
    text-decoration: none;
    outline: none;
}

.logo {
    color: #2c3e50;
}

.frame-bg {
    height: 140px;
    background: linear-gradient(135deg,#0000 18.75%,#ffffff 0 31.25%,#0000 0), repeating-linear-gradient(45deg,#ffffff -6.25% 6.25%,#dfe6e9 0 18.75%);
    background-size: 70px 70px;
    animation: moveBars 20s ease infinite;
}

@keyframes moveBars { 
    0%{background-position:50% 0%}
    50%{background-position:100% 50%}
    100%{background-position:50% 0%}
}
</style>
