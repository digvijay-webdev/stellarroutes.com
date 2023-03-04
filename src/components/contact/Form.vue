<template>
    <div class="main mb-4">
        <v-container>
            <v-form>
                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field :rules="rules.nameRules" type="text" label="First Name" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field :rules="rules.nameRules" type="text" label="Last Name" required></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field :rules="rules.emailRules" type="text" label="Email Address" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field :rules="rules.phoneRules" type="text" label="Phone Number" persistent-hint hint="*Internation Format" required></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field :rules="rules.companyRules" type="text" label="Your Company" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field :rules="rules.websiteRules" type="text" label="Current Web Address" persistent-hint hint="https://example.com" required></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col sm="12" md="12" lg="12">
                        <v-textarea :rules="rules.textAreaRules" counter="2000" label="How can we assist you?" required></v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-select label="Where did you hear about us?" :items="referList"></v-select>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-select label="What is your budget?" :items="budgetList"></v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col sm="12" md="12" lg="12">
                        <v-checkbox v-model="consentAccepted" label="By filling in this form you are giving Kipperin Solutions permission to contact you."></v-checkbox>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col sm="12" md="2" lg="2">
                        <v-btn color="primary" :disabled="!consentAccepted" block>Submit</v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Form",
    data() {
        return {
            consentAccepted: false,
            referList: [
                "LinkedIn",
                "Instagram",
                "Facebook",
                "Google",
                "Offline Ad",
                "Other",
            ],
            budgetList: [
                "£300 - £800",
                "£800 - £1,300",
                "£1,300 - £2,000",
                "£2,000 - £5,000",
                "£5,000 - £10,000",
                "£10,000+"
            ],

            // validation rules
            rules: {
                nameRules: [
                    v => !!v || "Input required",
                    v => (v && v.length >= 2) || "Input must be more than 2 characters",
                    v => (v && v.length <= 34) || "Input must be less than 35 characters",
                    v => /^[a-zA-Z\s]+$/.test(v) || "Input must not contain any special characters or numbers"
                ],
                emailRules: [
                    v => !!v || "Input required",
                    v => /.+@.+\..+/.test(v) || "E-mail is invalid",
                ],
                phoneRules: [
                    v => !!v || "Input required",
                    v => /^\+(?:[0-9] ?){6,14}[0-9]$/.test(v) || "Phone number is invalid",
                ],
                companyRules: [
                    v => !!v || "Input required",
                    v => /^[A-Za-z0-9 ]+$/.test(v) || "Input must not container any special characters",
                    v => (v && v.length >= 2) || "Input must be more than 2 characters",
                    v => (v && v.length <= 34) || "Input must be less than 35 characters",
                ],
                websiteRules: [
                    v => !!v || "Input required",
                    v => /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(v) || "Invalid web address",
                ],
                textAreaRules: [
                    v => !!v || "Input required",
                    v => (v && v.length >= 30) || "Input must be more than 30 characters",
                    v => (v && v.length <= 2000) || "Input must be less than 2000 characters",
                ]
            }
        }
    }
}
</script>

<style scoped>

</style>
