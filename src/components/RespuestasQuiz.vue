<template>
  <section class="src-componentes-respuestas mt-3">
    <div class="container-fluid">
      <h2>Respuestas Quiz</h2>
      <hr />

      <div class="table-container mt-3">
        <div class="table-responsive">
          <table class="table table-striped table-bordered mt-3">
            <thead>
              <tr>
                <th v-for="(col, index) in headers" :key="index">{{ col }}</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(answer, index) in answers" :key="index">
                <td>
                  {{ answers[index].numero }}
                </td>
                <td>
                  {{ answers[index].respuesta }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-respuestas',
    props: [],
    data () {
      return {
        headers: ["Número de pregunta", "Respuesta"],
        answers : [
          {numero: 1, respuesta: ['b','d']}, 
          {numero: 2, respuesta: ['c']},
          {numero: 3, respuesta: ['b', 'e']}
        ]
      }
    },
}


</script>

<style scoped lang="css">
.table-container {
  height: 500px;
  overflow: scroll;
}
.row button {
  width: 100%;
}
</style>
