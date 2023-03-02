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
            <router-link class="mx-4 nav-link" to="/services">Services</router-link>
            <router-link class="mx-4 nav-link" to="/products">Products</router-link>
            <router-link class="mx-4 nav-link" to="/blog">Blog</router-link>
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
