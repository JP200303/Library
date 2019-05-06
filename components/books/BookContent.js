const BookContent = {
  name: 'book-content',
  props: {
    book: BookModel,
  },

  template: `
    <div class="card text-white bg-dark mb-3" style="width: 18rem;">
      <img :src='book.image' class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">
              {{ book.name }}
            </h5>
        </div>
            <div class="card-footer mx-auto" style="width: 200px;">
            <router-link :to="'/book/detail/' + book.id" class="btn btn-outline-light btn-lg">
               Detail
            </router-link>
             <br>
             <br>
             <button class="btn btn-outline-danger" @click="addFav">
               <i class="fas fa-heart"></i>
             </button>
             <button class="btn btn-outline-warning" @click="addRent">
             <i class="fas fa-box"></i>
             </button>
            </div>
        </div>
    </div>
  `,

  methods: {
    addFav() {
      firebase.firestore().collection('favorites').add({
        userId: firebase.auth().currentUser.uid,
        bookId: this.book.id
      }).then(response => { alert('Se agrego a favoritos') })
    },

    addRent() {
      firebase.firestore().collection('rents').add({
        userId: firebase.auth().currentUser.uid,
        bookId: this.book.id
      }).then(response => { alert('Se agrego a rentados') })
    }
  }
}