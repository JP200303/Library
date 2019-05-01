const ProfileView = {
  beforeRouteEnter(to, from, next) {
    let current = firebase.auth().currentUser
    return current ? next() : next('/login')
  },

  template: `
    <div id="booksView">
      <nav-bar></nav-bar>
      <info-user></info-user>
      <user-list title="Favorites" collection="favorites"></user-list>
      <user-list title="Rentados" collection="rents"></user-list>
    </div>
  `,

  components: {
    NavBar,
    InfoUser,
    UserList,
  }
}