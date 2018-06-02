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
          <v-menu bottom left>
            <v-btn slot="activator" icon dark>
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile v-for="(menu, i) in menus" :key="i">
                <v-btn color="primary" dark>Accept
                  <v-icon dark right>check_circle</v-icon>
                </v-btn>
                <v-list-tile-title v-if="menu.title === 'Logout'" v-on:submit.prevent = "Logout">{{ menu.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
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
      menus: [
        {title: 'Logout' },
      ],
    }),
    props: ['title', 'user_name', 'items','logout'],
    methods: {
      Logout: function() {
        let uri = this.logout;
        Axios.post(uri, this.post)
      }
    },
  }
</script>
