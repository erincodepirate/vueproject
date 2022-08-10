const app = Vue.createApp({
    data: function() {
        return {
            courseGoalA: 'Pet a raccoon',
            courseGoalB: 'Eat pizza',
            vueLink: 'https://vuejs.org'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});
app.mount('#user-goal');
