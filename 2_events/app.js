const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm(event) {
      alert("Submitted");
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
