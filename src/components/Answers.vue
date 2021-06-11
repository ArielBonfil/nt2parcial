<template>
  <section class="src-components-respuestas">
    <div class="jumbotron">
      <h1>Respuestas</h1>
      <table class="table">
        <thead>
          <th>Numero de pregunta</th>
          <th>Respuesta</th>
        </thead>
        <tbody>
          <tr></tr>
          <tr v-for="(p, index) in preguntas" :key="index">
            <td>{{ p.numero }}</td>
            <td>{{ p.respuestas.join(", ") }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'src-components-respuestas',
    data (){
        return {
        preguntas: [
            { numero: 1, respuestas: ["C"] },
            { numero: 2, respuestas: ["C"] },
            { numero: 3, respuestas: ["A", "B"] },
        ]
        }
    },
    mounted () {
    },
    methods: {
      setColor (nota){

        if(nota>=0 && nota<=3)
        {
          return "rojo"
        }
        else if(nota>3 && nota<=6)
        {
          return "amarillo"
        }
        else {
          return "verde"
        }
      }
    },
    computed: {
    }
}
</script>
<style scoped>
.rojo {
  color: red;
}
.amarillo {
  color: yellow;
}
.verde {
  color: green;
}
</style>
