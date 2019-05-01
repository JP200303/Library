const InfoUser = {
  name: 'info-user',

  template: `
    <div id="infoUser">
      <div class="container">
        <div class="row">
          <div class="col-sm-2">
            <img :src="user.photoURL" width="100px"/>
          </div>
          <div class="col-sm-10">
            <h1>{{ user.displayName }}</h1>
            <hr>
            <span>{{ user.email }}</span>
          </div>
        </div>
      </div>
    </div>
  `,

  data: () => ({
    user: {}
  }),

  mounted() {
    this.user = firebase.auth().currentUser
  }
}
