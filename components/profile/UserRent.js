const UserRent = {
    name: 'user-rent',
  
    props: {
      title: String,
      collection: String
    },
  
    template: `
      <div id="rentList" class="card-deck">
        <div class="card text-white bg-dark mb-3" v-for="rent in list" :v-key="rent.id" >
          <img :src='rent.image' class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">
              {{ rent.name }}
            </h5>
          </div>
          <div class="card-footer mx-auto" style="width: 200px;">
            <router-link :to="'/book/detail/' + rent.id" class="btn btn-primary">
            Detail
            </router-link>
            <br>
            <br>
            <button class="btn btn-outline-danger" @click="removeRent(rent.id)">
              <i class="fas fa-trash"></i>
            </button>
            <button class="btn btn-outline-warning" @click="addFav(rent.id)">
            <i class="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    `,
  
    data: () => ({
      list: []
    }),
  
    mounted() {
      firebase.firestore().collection(this.collection)
        .where('userId', '==', firebase.auth().currentUser.uid)
        .get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
            firebase.firestore().collection('book').doc(doc.data().bookId)
              .get().then(doc => {
                this.list.push({ id: doc.id, ...doc.data() })
              })
          })
  
          console.log(this.list)
        })
    },

    methods: {
    removeRent(id) {
      firebase.firestore().collection('rents').doc(id).delete()
        .then(response => { alert('borrado') })
    },
    
    addFav(idfav) {
      firebase.firestore().collection('favorites').add({
        userId: firebase.auth().currentUser.uid,
        bookId: idfav
      }).then(response => { alert('Se agrego a favoritos') })
    }
  }
}