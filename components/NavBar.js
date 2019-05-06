const NavBar = {
  name: 'nav-bar',

  template: `
    <nav class="navbar navbar-dark bg-dark mb-3">
      <span class="navbar-brand">
        {{ appTitle }}
      </span>
      <button class="navbar-toggler" type="button"
              data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">
              Books
            </router-link>
            <router-link class="nav-link" to="/rent">
              Tus Libros
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
               role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
              Me
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/profile">
                <i class="far fa-user-circle"></i> Profile
              </router-link>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item text-danger" @click="onLogout">
                <i class="fas fa-sign-out-alt"></i> Logout
              </a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    </nav>
  `,

  data: () => ({
    appTitle: 'Librareo'
  }),

  methods: {
    onLogout() {
      firebase.auth().signOut()
        .then(response => {
          this.$router.push('/login')
        })
    }
  }
}