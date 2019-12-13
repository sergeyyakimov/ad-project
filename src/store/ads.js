export default {
    state: {
        ads: [
            {
                title: 'First item',
                description: 'I am a description of first item',
                promo: true,
                src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                id: '1'
            },
            {
                title: 'Second item',
                description: 'I am a description of second item',
                promo: true,
                src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                id: '2'
            },
            {
                title: 'Third item',
                description: 'I am a description of third item',
                promo: false,
                src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                id: '3'
            }
        ]
    },
    mutations: {
        createAd(state, payload) {
            state.ads.push(payload);
        }
    },
    actions: {
        createAd({commit}, payload) {
            payload.id = '' + Math.random();
            commit('createAd', payload);
        }
    },
    getters: {
        ads (state) {
            return state.ads;
        },
        promoAds (state) {
            return state.ads.filter(ad => ad.promo);
        },
        myAds (state) {
            return state.ads;
        },
        adById (state) {
            return adId => {
                return state.ads.find(ad => ad.id === adId);
            }
        }
    }
}