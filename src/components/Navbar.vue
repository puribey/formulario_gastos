<template>
  <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/gastos">
                <a class="nav-link" href="#">Formulario gastos</a>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/respuestas">
                <a class="nav-link" href="#">Respuestas Quiz</a>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-navbar',
    props: [],
    data () {
      return {

      }
    },
}


</script>

<style scoped lang="css">
</style>
