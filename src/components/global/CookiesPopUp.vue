<template>
    <div class="main">
        <v-dialog v-model="cookiesDialog" persistent max-width="290">
            <v-card>
                <v-card-title class="text-h5">
                    Accepts Cookies
                </v-card-title>
                <v-card-text>
                    By using accessing this website you are agreeing to the use of cookies set by Stellar Routes Limited.
                    <br>
                    <router-link to="/cookies">Learn more</router-link>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="setCookies" outlined block>Accept & Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: "CookiesPopUp",
    data() {
        return {
            cookiesDialog: true
        }
    },
    methods: {
        setCookies() {
            // save consent in LS for memory
            localStorage.setItem("srcc", JSON.stringify("COOKIE-PERMISSION-GRANTED"));

            // close dialog
            this.cookiesDialog = false;
        },
        verifyCookies() {
            // check for permission in LS
            try {
                if (JSON.parse(localStorage.getItem("srcc")) === "COOKIE-PERMISSION-GRANTED") {
                    // we already have permission 
                    this.cookiesDialog = false;
                } else {
                    // we don't have permission inforce cookie-dialog
                    this.cookiesDialog = true;
                }
            } catch(e) {
                console.log(`Error: Something went wrong..\n${e}`);
            }
        }
    },
    created() {
        this.verifyCookies();
    }
}
</script>

<style scoped>

</style>
