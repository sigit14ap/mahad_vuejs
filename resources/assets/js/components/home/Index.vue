<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
    <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar tag="div">
              <v-list-tile-avatar>
                <img src="http://68.media.tumblr.com/avatar_119356c63011_128.png" />
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ user_name }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
    </v-toolbar>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
            <li v-for="item in items" :key="item.title">
              <router-link :to="item.path" class="list__tile" exact>
                <v-list-tile-action>
                  <v-icon>{{item.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{item.text}}</v-list-tile-title>
                </v-list-tile-content>
              </router-link>
            </li>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Google Contacts</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        prepend-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img
            src="https://vuetifyjs.com/static/doc-images/logo.svg"
            alt="Vuetify"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <main>
        <v-content>
          <v-container fluid>
            <slot></slot>
          </v-container>
        </v-content>
    </main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
    }),
    props: ['title', 'user_name', 'items'],
  }
</script>
