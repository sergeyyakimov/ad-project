import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "AIzaSyDdrUjm_eMavM5Hm9_HXtEv5RfwlJO_bvo",
    authDomain: "ads-project-a2578.firebaseapp.com",
    databaseURL: "https://ads-project-a2578.firebaseio.com",
    projectId: "ads-project-a2578",
    storageBucket: "ads-project-a2578.appspot.com",
    messagingSenderId: "551603183099",
    appId: "1:551603183099:web:370c1f60e8e54dfbeabf5e",
    measurementId: "G-J8V12JM2FF"
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            vuetify,
            render: h => h(App),
        }).$mount('#app');
    }
});
