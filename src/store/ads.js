export default {
    state: {
        ads: [{
                title: "First ad",
                description: "Hello i am description",
                promo: false,
                imageSrc: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
                id: "123"
            },
            {
                title: "Second ad",
                description: "Hello i am description",
                promo: true,
                imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
                id: "1234"
            },
            {
                title: "Third ad",
                description: "Hello i am description",
                promo: true,
                imageSrc: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
                id: "12345"
            }
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        ads(state) {
            return state.ads;
        },
        promoAds(state) {
            return state.ads.filter(ad => {
                // return ad.promo === true;
                return ad.promo;
            })
        },
        myAds(state) {
            return state.ads;
        }
    }
}