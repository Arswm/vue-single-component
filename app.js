
  const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'the final empire',
            author: 'arsawm',
            age: 23,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(event , data) {
            console.log(event , event.type);
            if (data) {
                console.log(data);
            }
        },
        handleMouseMove(e) {
            this.x=e.offsetX
            this.y=e.offsetY
        } 
    }
})
app.mount('#app')
