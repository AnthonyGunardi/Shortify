<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-icon size="150" class="mt-10 pt-10" color="primary">
          mdi-shield-link-variant-outline
        </v-icon>
      </v-col>

      <v-col class="mb-4">
        <h1 class="mb-3 title">SHORTIFY</h1>

        <p class="subheading font-weight-regular">
          Shorten long URLs easily using Shortify to easily share them.
        </p>

        <p class="pt-0 mt-0 subheading text--disabled">
          The generated short URL has an expiration period of 2 days.
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-row justify="center">
          <v-col class="mb-0" xl="6" lg="6" xs="12">
            <v-layout>
              <v-flex xs12>
                <v-text-field
                  v-model="url"
                  label="Enter the URL to get shortened"
                  hint="For example: www.facebook.com"
                  outlined
                  rounded
                  persistent-hint
                >
                </v-text-field>
              </v-flex>
              <v-flex x1>
                <v-btn
                  class="ml-2 mt-1"
                  color="primary"
                  large
                  rounded
                  @click="shortenUrl"
                  :loading="buttonLoader"
                >
                  Generate
                </v-btn>
              </v-flex>

              <v-flex x1 class="resetBtn">
                <v-btn
                  class="ml-1 mt-1"
                  color="secondary"
                  large
                  rounded
                  @click="reset"
                >
                  Reset
                </v-btn>
              </v-flex>
            </v-layout>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col xl="6" lg="6" xs="12">
            <v-layout>
              <v-flex xs12>
                <v-text-field
                  ref="textToCopy"
                  v-model="shortenedUrl"
                  label="Shortened URL"
                  outlined
                  readonly
                  persistent-hint
                  append-icon="mdi-content-copy"
                  @click:append="copy"
                >
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-snackbar top right v-model="notification" :timeout="2000">
      {{ notificationText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="primary"
          text
          v-bind="attrs"
          @click="notification = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  data: () => ({
    url: "",
    shortenedUrl: "",
    buttonLoader: false,
    notificationText: "",
    notification: false,
  }),

  computed: {},

  methods: {
    showNotification(message) {
      this.notification = true;
      this.notificationText = message;
    },
    copy() {
      let textToCopy = this.$refs.textToCopy.$el.querySelector("input");
      textToCopy.select();
      document.execCommand("copy");
      this.showNotification("Copied!");
    },
    reset() {
      this.url = "";
      this.shortenedUrl = "";
    },
    shortenUrl() {
      this.buttonLoader = true;
      axios
        .post(`http://localhost:8081`, { url: this.url })
        .then((response) => {
          let shortUrl = response?.data?.data?.shortened_url ?? null;
          this.shortenedUrl = shortUrl
            ? `http://localhost:8081/${shortUrl}`
            : null;
        })
        .catch((error) => {
          console.error(error);
          let errorMessage = error?.response?.data?.message ?? "Network error";
          this.showNotification(errorMessage);
        });
      this.buttonLoader = false;
    },
  },
};
</script>
<style scoped>
.title {
  color: #0097A7;
  font-size: 40px !important;
  font-weight: 700;
}

@media only screen and (max-width: 600px) {
  .resetBtn {display:none}
}
</style>
