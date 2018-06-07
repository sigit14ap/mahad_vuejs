<template>
<div>
  <vue-headful title="Tambah Pesantren"/>
<v-card class="lg12">
    <v-card-title class="headline">
      Tambah Pesantren
    </v-card-title>
    <v-divider></v-divider>
  <form>
  <v-layout class="lg12">
    <v-flex class="lg6 ml-3 mt-3">
    <v-text-field
      v-model="nama_pesantren"
      :error-messages="nama_pesantrenErrors"
      label="Nama Pondok Pesantren"
      required
      @input="$v.nama_pesantren.$touch()"
      @blur="$v.nama_pesantren.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="nama_yayasan"
      :error-messages="nama_yayasanErrors"
      label="Nama Yayasan"
      required
      @input="$v.nama_yayasan.$touch()"
      @blur="$v.nama_yayasan.$touch()"
    ></v-text-field>

        <v-select
          :loading="loading"
          :items="items"
          :rules="[() => select.length > 0 || 'You must choose at least one']"
          :search-input.sync="search"
          v-model="select"
          label="Takhasus"
          autocomplete
          multiple
          cache-items
          chips
          required
        ></v-select>
  
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    </v-flex>

    <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-layout>
  </form>
</v-card>
</div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      nama_pesantren: { required },
      nama_yayasan: { required },
      email: { required, email },
      select: { required },
      checkbox: { required }
    },

    data: function(){
      return {
        nama_pesantren: '',
        nama_yayasan: '',
        email: '',
        select: null,
        items: [],
        search: null,
        takhasus:[],
        form: this.$form({
            'title': null, // or Vuex this.user.title eg.
            'body': null,
        })
      }
    },

    watch: {
      search (val) {
        val && this.takhasusSelections(val)
      }
    },

    computed: {
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nama_pesantrenErrors () {
        const errors = []
        if (!this.$v.nama_pesantren.$dirty) return errors
        !this.$v.nama_pesantren.required && errors.push('Nama Pondok Pesantren Dibutuhkan.')
        return errors
      },
      nama_yayasanErrors () {
        const errors = []
        if (!this.$v.nama_yayasan.$dirty) return errors
        !this.$v.nama_yayasan.required && errors.push('Nama Yayasan Dibutuhkan.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      takhasusSelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.takhasus.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      }
    }
  }
</script>