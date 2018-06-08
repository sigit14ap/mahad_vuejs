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
          :rules="[() => a1 || 'Pilih salah satu.']"
          :items="takhasus"
          v-model="a1"
          item-text="nama_takhasus"
          item-value="id"
          label="Takhasus"
          autocomplete
          required
        ></v-select>

    <v-text-field
      v-model.number="tahun_berdiri"
      type="number"
      :error-messages="tahun_berdiriErrors"
      label="Tahun Berdiri"
      required
      @input="$v.tahun_berdiri.$touch()"
      @blur="$v.tahun_berdiri.$touch()"
    ></v-text-field>

    <v-text-field
      v-model.number="jumlah_santri_lk"
      type="number"
      :error-messages="jumlah_santri_lkErrors"
      label="Jumlah Santri Laki-Laki"
      required
      @input="$v.jumlah_santri_lk.$touch()"
      @blur="$v.jumlah_santri_lk.$touch()"
    ></v-text-field>

    <v-text-field
      v-model.number="jumlah_santri_pr"
      type="number"
      :error-messages="jumlah_santri_prErrors"
      label="Jumlah Santri Perempuan"
      required
      @input="$v.jumlah_santri_pr.$touch()"
      @blur="$v.jumlah_santri_pr.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="nama_pengasuh"
      :error-messages="nama_pengasuhErrors"
      label="Nama Pengasuh"
      required
      @input="$v.nama_pengasuh.$touch()"
      @blur="$v.nama_pengasuh.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="nama_ketuayayasan"
      :error-messages="nama_ketuayayasanErrors"
      label="Nama Ketua Yayasan"
      required
      @input="$v.nama_ketuayayasan.$touch()"
      @blur="$v.nama_ketuayayasan.$touch()"
    ></v-text-field>
    
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
      tahun_berdiri: { required },
      jumlah_santri_lk: { required },
      jumlah_santri_pr: { required },
      nama_pengasuh: { required },
      nama_ketuayayasan: { required },

    },
    props: ['root_url'],
    data: function(){
      return {
        nama_pesantren: '',
        nama_yayasan: '',
        email: '',
        tahun_berdiri: '',
        jumlah_santri_lk: '',
        jumlah_santri_pr: '',
        nama_pengasuh: '',
        nama_ketuayayasan: '',
        items: [],
        a1: null,
        takhasus:[],
        form: this.$form({
            'title': null, // or Vuex this.user.title eg.
            'body': null,
        })
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
      tahun_berdiriErrors () {
        const errors = []
        if (!this.$v.tahun_berdiri.$dirty) return errors
        !this.$v.tahun_berdiri.required && errors.push('Tahun Berdiri Dibutuhkan.')
        return errors
      },
      jumlah_santri_lkErrors () {
        const errors = []
        if (!this.$v.jumlah_santri_lk.$dirty) return errors
        !this.$v.jumlah_santri_lk.required && errors.push('Jumlah Santri Laki-Laki Dibutuhkan.')
        return errors
      },
      jumlah_santri_prErrors () {
        const errors = []
        if (!this.$v.jumlah_santri_pr.$dirty) return errors
        !this.$v.jumlah_santri_pr.required && errors.push('Jumlah Santri Perempuan Dibutuhkan.')
        return errors
      },
      nama_pengasuhErrors () {
        const errors = []
        if (!this.$v.nama_pengasuh.$dirty) return errors
        !this.$v.nama_pengasuh.required && errors.push('Nama Pengasuh Dibutuhkan.')
        return errors
      },
      nama_ketuayayasanErrors () {
        const errors = []
        if (!this.$v.nama_ketuayayasan.$dirty) return errors
        !this.$v.nama_ketuayayasan.required && errors.push('Nama Ketua Yayasan Dibutuhkan.')
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
    mounted () {
      this.getDataFromApi()
    },
    methods: {
      submit () {
        this.$v.$touch()
      },
      getDataFromApi() {
        let uri = this.root_url+'/get-takhasus';
        Axios.get(uri).then((response) => {
          this.takhasus = response.data;
        });
      }
    }
  }
</script>