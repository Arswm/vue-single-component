const app = Vue.createApp({
    data() {
      return {
        showBooks: true,
        title: 'the final empire',
        author: 'arsawm',
        age: 23
      }
    },
    methods: { // <--- fix the typo here
      toggleShowBooks() {
        this.showBooks = !this.showBooks;
      }
    }
  })
  app.mount('#app')