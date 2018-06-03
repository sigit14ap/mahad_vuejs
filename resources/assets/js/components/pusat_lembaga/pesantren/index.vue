<template>
  <div>
    <vue-headful title="Pesantren"/>
  <v-card>
    <v-card-title>
      Pesantren
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="pesantren"
      :search="search"
      :pagination.sync="pagination"
      :total-items="totalPesantren"
      :loading="loading"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <!-- <td>{{ (rows) }}</td> -->
        <td>{{ props.item.nama_pondok_pesantren }}</td>
        <td class="justify-center">{{ props.item.nama_yayasan }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
  </div>
</template>
<script>
  export default {
    props: ['root_url'],
    data: () => ({
      dialog: false,
      totalPesantren: 0,
      search: '',
      loading: true,
      pagination: {},
      // rows: [],
      // page : [],
      // number : [],
      headers: [
        // { text: 'No.', value: 1, sortable : true},
        {text: 'Pesantren', align: 'left', sortable: true, value: 'nama_pondok_pesantren'},
        { text: 'Yayasan', value: 'nama_yayasan', sortable : true},
        { text: 'Actions', value: 'name',align: 'center', sortable: false }
      ],
      pesantren: [],
    }),

    watch: {
      pagination: {
        handler () {
          this.getDataFromApi()
            .then(data => {
              this.totalPesantren = data.total
            })
          // this.rows = this.pagination.rowsPerPage
          // this.page = this.pagination.page
          // this.number = this.rows+1
          //  console.log(this.rows);
        },
        deep: true
      }
    },
    mounted () {
      this.getDataFromApi()
        .then(data => {
          this.totalPesantren = data.total
        })
    },
    methods: {
      getDataFromApi () {
        this.loading = true
        return new Promise((resolve, reject) => {
          const { sortBy, descending, page, rowsPerPage } = this.pagination

          let items = this.getData()
          const total = items.length

          if (this.pagination.sortBy) {
            items = items.sort((a, b) => {
              const sortA = a[sortBy]
              const sortB = b[sortBy]

              if (descending) {
                if (sortA < sortB) return 1
                if (sortA > sortB) return -1
                return 0
              } else {
                if (sortA < sortB) return -1
                if (sortA > sortB) return 1
                return 0
              }
            })
          }

          if (rowsPerPage > 0) {
            items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
          }

          setTimeout(() => {
            this.loading = false
            resolve({
              items,
              total
            })
          }, 1000)
        })
      },
      getData () {
        let uri = this.root_url+'/get-pesantren-index';
        let hasil = [];
        Axios.get(uri).then((response) => {
            this.pesantren = response.data;
            hasil['value'] = false;
            hasil['nama_pondok_pesantren'] = response.data.nama_pondok_pesantren;
            hasil['nama_yayasan'] = response.data.nama_yayasan;
        });
        
        return hasil;
      }
    }
    
    // created: function() {
    //     let uri = this.root_url+'/get-pesantren-index';
    //     Axios.get(uri).then((response) => {
    //         this.pesantren = response.data;
    //     });
    // },
    
  }
</script>