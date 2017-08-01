<template>
  <v-app light>

    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>format_list_numbered</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>View Recipes</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up "></v-toolbar-side-icon>
      <v-toolbar-title>SocialRecipes</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat>
          <v-icon left dark>format_list_numbered</v-icon>
          View Recipes
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main>
      <h4>SocialRecipes - Share your recipes!!</h4>
      <router-view></router-view>
    </main>
</v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
