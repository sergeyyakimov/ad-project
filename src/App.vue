<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <v-list-item
                v-for="link in links"
                :key="link.title"
                :to="link.url"
        >
          <v-list-item-icon>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-toolbar dark color="success">
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          class="hidden-md-and-up"
        >

        </v-app-bar-nav-icon>
        <v-toolbar-title>Ad application</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
                 v-for="link in links"
                 :key="link.title"
                 :to="link.url" text
          >
            <v-icon left>{{link.icon}}</v-icon>
            {{link.title}}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <router-vue></router-vue>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    links: [
      {
        title: 'Login',
        icon: 'mdi-lock',
        url: '/login'
      },
      {
        title: 'Registration',
        icon: 'mdi-face',
        url: '/registration'
      },
      {
        title: 'Orders',
        icon: 'mdi-bookmark',
        url: '/orders'
      },
      {
        title: 'New ad',
        icon: 'mdi-note-plus',
        url: '/new'
      },
      {
        title: 'My ads',
        icon: 'mdi-format-list-bulleted-square',
        url: '/list'
      },
    ]
  })
};
</script>
