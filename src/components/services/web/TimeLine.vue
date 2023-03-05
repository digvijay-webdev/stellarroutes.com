<template>
    <div class="main">
        <v-container>
            <h1>Development Process</h1>

            <v-timeline clipped dense align-top>
                <v-timeline-item small>
                    <v-row class="pt-1">
                        <v-col cols="12" sm="12" md="3" lg="3">
                            <strong>IDEA</strong>
                        </v-col>
                        <v-col cols="12" sm="12" md="9" lg="9">
                            <strong>Initial Meeting</strong>
                            <div class="text-caption mb-2">
                                We'll meet with you to discuss your business needs and goals for your product.
                            </div>
                        </v-col>
                    </v-row>
                </v-timeline-item>
                <v-timeline-item small>
                    <v-row class="pt-1">
                        <v-col cols="12" sm="12" md="3" lg="3">
                            <strong>WIREFRAME</strong>
                        </v-col>
                        <v-col cols="12" sm="12" md="9" lg="9">
                            <strong>Wireframe Feedback Session</strong>
                            <div class="text-caption mb-2">
                                Our team will create a basic blueprint of your products's layout and functionality.
                            </div>
                        </v-col>
                    </v-row>
                </v-timeline-item>
                <v-timeline-item small>
                    <v-row class="pt-1">
                        <v-col cols="12" sm="12" md="3" lg="3">
                            <strong>PROTOTYPE</strong>
                        </v-col>
                        <v-col cols="12" sm="12" md="9" lg="9">
                            <strong>Prototype Review Meeting</strong>
                            <div class="text-caption mb-2">
                                We'll create a working model of your software, allowing you to visualize the user experience and suggest changes.
                            </div>
                        </v-col>
                    </v-row>
                </v-timeline-item>
                <v-timeline-item small>
                    <v-row class="pt-1">
                        <v-col cols="12" sm="12" md="3" lg="3">
                            <strong>DEVELOPMENT</strong>
                        </v-col>
                        <v-col cols="12" sm="12" md="9" lg="9">
                            <strong>Building Your Software</strong>
                            <div class="text-caption mb-2">
                                Our team will build and program your website/app, incorporating your brand and design elements.
                            </div>
                        </v-col>
                    </v-row>
                </v-timeline-item>
                <v-timeline-item small>
                    <v-row class="pt-1">
                        <v-col cols="12" sm="12" md="3" lg="3">
                            <strong>DEPLOYMENT</strong>
                        </v-col>
                        <v-col cols="12" sm="12" md="9" lg="9">
                            <strong>Taking Your Product Live</strong>
                            <div class="text-caption mb-2">
                                We'll deploy your software, ensuring that it is optimized for performance and user experience.
                            </div>
                        </v-col>
                    </v-row>
                </v-timeline-item>
            </v-timeline>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "TimeLine",
}
</script>

<style scoped>

</style>
