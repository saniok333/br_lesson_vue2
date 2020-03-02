<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list>
        <v-list-item v-for="link of links" :key="link.title" :to="link.url">
          <v-list-item-icon>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="onLogout" v-if="isUserLoggedIn">
          <v-list-item-icon>
            <v-icon>mdi-account-arrow-right</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="'Log Out'"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="teal darken-4" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">
          <v-icon left>mdi-guitar-electric</v-icon>MUSIC GEAR
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-for="link in links" :key="link.title" :to="link.url">
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
        <v-btn text @click="onLogout" v-if="isUserLoggedIn">
          <v-icon left>mdi-account-arrow-right</v-icon>Log out
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <template v-if="error">
      <v-snackbar
        color="error"
        :multi-line="true"
        :timeout="5000"
        @input="closeError"
        :value="true"
      >
        {{error}}
        <v-btn dark text @click="closeError">Close</v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
    links() {
      if (this.isUserLoggedIn) {
        return [
          { title: "Create ad", icon: "mdi-pen-plus", url: "/new" },
          { title: "My ads", icon: "mdi-format-list-numbered", url: "/list" },
          {
            title: "Orders",
            icon: "mdi-clipboard-check-multiple",
            url: "/orders"
          }
        ];
      }
      return [
        { title: "Log In", icon: "mdi-account-arrow-left", url: "/login" },
        { title: "Sign Up", icon: "mdi-account-plus", url: "/registration" }
      ];
    }
  },
  methods: {
    closeError() {
      this.$store.dispatch("clearError");
    },
    onLogout() {
      this.$store.dispatch("logoutUser");
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
</style>


