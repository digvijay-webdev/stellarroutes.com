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

            <router-link class="mx-4 nav-link" to="/">Home</router-link>
            <router-link class="mx-4 nav-link" to="/about">About</router-link>
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <a href="#!" v-bind="attrs" v-on="on" class="mx-4 nav-link">Services</a>
                </template>
                <v-list>
                    <v-list-item-group color="primary">
                        <router-link to="/">
                            <v-list-item>
                                Web Development
                            </v-list-item>
                        </router-link>
                        <router-link to="/">
                            <v-list-item>
                                App Development
                            </v-list-item>
                        </router-link>
                        <router-link to="/">
                            <v-list-item>
                                Digital Marketing
                            </v-list-item>
                        </router-link>
                        <router-link to="/">
                            <v-list-item>
                                Data Analytics
                            </v-list-item>
                        </router-link>
                    </v-list-item-group>
                </v-list>
            </v-menu>
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <a href="#!" v-bind="attrs" v-on="on" class="mx-4 nav-link">Products</a>
                </template>
                <v-list>
                    <v-list-item-group color="primary">
                        <a href="https://hotelsbridge.com" target="_blank">
                            <v-list-item>
                                HotelsBridge
                            </v-list-item>
                        </a>
                        <router-link to="/">
                            <v-list-item>
                                MarkeTON
                            </v-list-item>
                        </router-link>
                    </v-list-item-group>
                </v-list>
            </v-menu>
            <router-link class="mx-4 nav-link" to="/blogs">Blogs</router-link>
            <router-link class="mx-4 nav-link" to="/contact">Let's Get Started</router-link>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: "Desktop",
    data() {
        return {
            
        }
    },

}
</script>

<style scoped>
/* css reset */
a {
    text-decoration: none;
    outline: none;
}

ul li {
    list-style-type: none;
}

.main {
    background: rgba(255,255,255,0.45);
}

.nav-link {
    color: #2c3e50;
    font-weight: bold;
    transition: all .3s ease;
}

.nav-link:hover {
    color: #2980b9;
}

.router-link-exact-active {
    color: #2980b9;
}

.logo {
    color: #2c3e50;
}
</style>
