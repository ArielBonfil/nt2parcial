<template>
  <section class="src-components-form-user-form">
    <div class="jumbotron">
      <h1>Formulario de notas</h1>
      <br />

      <vue-form :state="formState" @submit.prevent="submitForm()">
        <validate tag="div">
          <label for="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.name"
            required
            :minlength="nameLengthMin"
            :maxlength="nameLengthMax"
          />
          <field-messages name="name" show="$dirty">
            <div slot="required" class="alert alert-danger">
              Campo requerido
            </div>

            <div slot="minlength" class="alert alert-danger">
              Minimos caracteres no alcanzados, cantidad:
              {{ nameLengthMin }} caracteres
            </div>
            <div
              v-if="formData.name.length == nameLengthMax"
              class="alert alert-warning"
            >
              Maximos caracteres alcanzados, cantidad:
              {{ nameLengthMax }} caracteres
            </div>
          </field-messages>
        </validate>
        <br />
        <validate tag="div">
          <label for="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.apellido"
            required
            :minlength="apellidoLengthMin"
            :maxlength="apellidoLengthMax"
          />
          <field-messages name="apellido" show="$dirty">
            <div slot="required" class="alert alert-danger">
              Campo requerido
            </div>

            <div slot="minlength" class="alert alert-danger">
              Minimos caracteres no alcanzados, cantidad:
              {{ nameLengthMin }} caracteres
            </div>
            <div
              v-if="formData.apellido.length == apellidoLengthMax"
              class="alert alert-warning"
            >
              Maximos caracteres alcanzados, cantidad:
              {{ apellidoLengthMax }} caracteres
            </div>
          </field-messages>
        </validate>

        <validate tag="div">
          <label for="age">Nota</label>
          <input
            type="number"
            id="nota"
            name="nota"
            class="form-control"
            autocomplete="off"
            v-model.number="formData.nota"
            required
            :min="notaMin"
            :max="notaMax"
          />

          <field-messages name="nota" show="$dirty">
            <div slot="required" class="alert alert-danger">
              Campo requerido
            </div>
            <div slot="min" class="alert alert-danger">
              nota minima: {{ notaMin }}
            </div>
            <div slot="max" class="alert alert-danger">
              Nota maxima: {{ notaMax }}
            </div>
          </field-messages>
        </validate>
        <br />

        <br />

        <button
          class="btn btn-success my-3"
          :disabled="formState.$invalid"
          type="submit"
        >
          Insertar
        </button>
      </vue-form>
    </div>

    <TableNotas
      v-bind:alumnosToShow="this.submittedAlumnos"
      v-bind:promedio="this.promedio"
      v-bind:options="{ hasNota: true }"
    />
  </section>
</template>

<script lang="js">
   import TableNotas from './TableNotas';
  export default  {
    name: 'src-components-form-user-form',
  components: {
 TableNotas
  },
  props: [],
  data () {
    return {
      submittedAlumnos : [],
      promedio: 0,
      formData : this.getInicialData(),
      formState : {},
      nameLengthMin : 3,
      nameLengthMax : 15,
      apellidoLengthMin : 3,
      apellidoLengthMax : 15,
      notaMin : 0,
      notaMax : 10
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    getInicialData() {
      return {
        name: '',
        apellido: '',
        nota: '',
      }
    },
    submitForm() {
      let newAlumno = {
        name: this.formData.name + " " + this.formData.apellido,
        nota: this.formData.nota,
      };

      this.submittedAlumnos.push(newAlumno);
      this.promedio = (this.promedio + newAlumno.nota ) / this.submittedAlumnos.length;
      this.formData = this.getInicialData()
      this.formState._reset()
    }
  }
}
</script>

<style scoped lang="css"></style>
