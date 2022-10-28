const { createApp } = Vue;

createApp({
  data() {
    return {
      rndNumber: null,
      numbersArray: [],
      min: 1,
      max: 15,
      qty: 6,
    };
  },
  created() {
    this.getNumbers();
    // axios
    //   .get(
    //     `https://flynn.boolean.careers/exercises/api/array/integers?min=${this.min}&max=${this.max}&items=${this.qty}`
    //   )
    //   .then((resp) => {
    //     console.log(resp);
    //     this.numbersArray = resp.data.response;
    //   });
  },
  methods: {
    getNumbers() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/int")
        .then((resp) => {
          console.log(resp.data.response);
          // this.rndNumber = resp.data.response;
        });
    },
  },
}).mount("#app");
