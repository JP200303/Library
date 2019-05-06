const BookDetail = {
    template: `
      <div id="bookDetail">
        <nav-bar></nav-bar>
        <div class="container" v-if="book">
        <img :src='book.image' alt="..." style="width: 200px;">
          <h1>{{ book.title }}</h1>
          <span> {{ book.pages }}</span>
          <div>{{ book.publicationDate }}</div>
          <button @click="goBack()" class="btn btn-primary">
          Regresar
          </button>
        </div>
      </div>
    `,
  
    data: () => ({
      book: null
    }),
  
    components: {
      NavBar
    },
  
    beforeMount() {
      firebase.firestore().collection('book').doc(this.$route.params.id)
        .get().then(doc => {
          this.book = { id: doc.id, ...doc.data() }
        })
    },

    methods:{
     goBack(){
        this.$router.go(-1)
     }
    }
  }