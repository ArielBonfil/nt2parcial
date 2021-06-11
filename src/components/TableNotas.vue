<template>
  <section class="src-components-table-notas">
    <div class="jumbotron">
      <table class="table">
        <thead>
          <th>Nombre</th>
          <th>Nota</th>
        </thead>
        <tbody>
          <tr v-for="(alumno, index) in alumnosToShow" :key="index">
            <td>{{ alumno.name }}</td>
            <td :class="setColor(alumno.nota)">{{ alumno.nota }}</td>
          </tr>
          <tr>
            <td>Promedio</td>
            <td :class="setColor(promedio)">{{ promedio }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'src-components-table-notas',
    props: ['alumnosToShow', 'promedio', 'options'],
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
