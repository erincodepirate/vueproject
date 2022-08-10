const app = Vue.createApp({
    data: function() {
        return {
            courseGoal: 'Pet a raccoon',
            vueLink: 'https://vuejs.org'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'eat pizza';
            } else {
                return 'drink tea';
            }
        }
    }
});
app.mount('#user-goal');
