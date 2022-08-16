const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      lastName: '',
      //confirmedName: ''
      //fullname: ''
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
    },
    resetInput() {
      this.name = '';
      this.lastName = '';
    },
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout( function() {
          that.counter = 0;
        }, 2000);
      }
    }
    /*name(value) { // watches the name property
      if (value === '') {
        this.fullname = '';
      } else {
        this.fullname = value + ' ' + this.lastName;
      }
    },
    lastName(value) {
      if (value === '') {
        this.fullname = '';
      } else {
        this.fullname = this.name + ' ' + value;
      }
    }*/
  },
  computed: {
    fullname() {
      console.log('running again');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  }
});

app.mount('#events');
