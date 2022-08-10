const app = Vue.createApp({
    data: function() {
        return {
            courseGoal: 'Pet a raccoon',
            vueLink: 'https://vuejs.org'
        };
    }
});
app.mount('#user-goal');
