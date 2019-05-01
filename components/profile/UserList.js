const UserList = {
  name: 'user-list',

  props: {
    title: String,
    collection: String
  },

  template: `
    <div id="favList">
      <div class="container">
        <h3>{{ title }}</h3>
        <ul>
          <li v-for="fav in list" :v-key="fav.id">
            {{ fav.name }}
          </li>
        </ul>
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
  }
}
