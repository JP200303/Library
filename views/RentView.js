const RentView = {
    beforeRouteEnter(to, from, next) {
      let current = firebase.auth().currentUser
      return current ? next() : next('/login')
    },
  
    template: `
      <div id="booksView">
        <nav-bar></nav-bar>
        <info-user></info-user>
        <user-rent title="Rentados" collection="rents"></user-rent>
      </div>
    `,
  
    components: {
      NavBar,
      UserRent,
    }
}