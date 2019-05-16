<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
          <div class="form-group">
            <h2>Create Constituent</h2>
            <label>First Name</label>
            <input class="form-control" v-model="constituent.firstName">
          </div>

          <div class="form-group">
            <label>Middle Name</label>
            <input class="form-control" v-model="constituent.middleName">
          </div>

          <div class="form-group">
            <label>Last Name</label>
            <input class="form-control" v-model="constituent.lastName">
          </div>

          <div class="form-group">
            <label>Gender</label>
              <select class="form-control" v-model="constituent.gender">
                <option>Male</option>
                <option>Female</option>
              </select>
          </div>
          <div class="form-group">
            <button class="btn btn-primary mb-2 form-control" @click="showmModalSaveConstituent()">Save</button>
          </div>
      </div>
      
      <div class="col-md-9">
        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Middle Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Gender</th>
              <th scope="col 2">Action</th>
            </tr>
          </thead>
          <tbody v-for="constituentInfo in constituentInfo" :key="constituentInfo.ID">
            <td>{{ constituentInfo.ID }}</td>
            <td>{{ constituentInfo.FirstName }}</td>
            <td>{{ constituentInfo.MiddleName }}</td>
            <td>{{ constituentInfo.LastName }}</td>
            <td>{{ constituentInfo.Gender }}</td>
            <td>
              <button class="btn btn-primary mb-2" data-toggle="modal" @click="showModalUpdateConsituent()">Update</button>
              <button class="btn btn-danger mb-2" :id="constituentInfo.ID" @click="showmModalDeleteConstituent(constituentInfo.ID)">Delete</button>
            </td>
          </tbody>
        </table>
      </div>
      
    </div>

    <modal name="modalUpdateConsituent" height="auto" width="50%" :scrollable="true" :adaptive="true" :clickToClose="false">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Update Constituent</h5>
          <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button> -->
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <label>First Name</label>
                <input class="form-control">
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-group">
                <label>Middle Name</label>
                <input class="form-control">
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-group">
                <label>Last Name</label>
                <input class="form-control">
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-group">
                <label>Suffix</label>
                <input class="form-control">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label>Gender</label>
                  <select class="form-control">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-group">
                <label>Birthday</label>
                <input class="form-control">
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-group">
                <label>Birthplace</label>
                <input class="form-control">
              </div>
            </div>            
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label>Civil Status</label>
                <input class="form-control">
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-group">
                <label>Citizenship</label>
                <input class="form-control">
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-group">
                <label>Religion</label>
                <input class="form-control">
              </div>
            </div>            
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Email</label>
                <input class="form-control">
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label>PhoneNumber</label>
                <input class="form-control">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Fathers Name</label>
                <input class="form-control">
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="form-group">
                <label>Mothers Name</label>
                <input class="form-control">
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>isDeceased</label>
            <input class="form-control">
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="hideModalUpdateConsituent">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
     
    return {
      globalURL: localStorage.getItem('URL'),
      constituentInfo: [],
      constituent: {
        firstName: '',
        middleName: '',
        lastName: '',
        gender: ''
      }
    }
  },
  created () {
    this.getConstituent()
  },
  methods: {
    showModalUpdateConsituent () {
      this.$modal.show('modalUpdateConsituent');
    },
    hideModalUpdateConsituent () {
      this.$modal.hide('modalUpdateConsituent');
    },
    showmModalDeleteConstituent (fooID) {
      alert(fooID)
      // console.log(foo)
    },
    showmModalSaveConstituent () {
      this.addConstituent()
    },
    getConstituent () {
      axios.get(this.globalURL + 'constituent', {
      }).then(response => {
        this.constituentInfo = response.data.recordset
          // console.log(response)
        if (response.statusText === 'OK') {
          console.log('Tanga')
        } else {
          console.log('BOBO')
        }
      }, (error) => { console.log(error) })
    },
    addConstituent () {
      axios.post(this.globalURL + 'constituent', {
        FirstName: this.constituentInfo.firstName,
        MiddleName: this.constituentInfo.middleName,
        LastName: this.constituentInfo.lastName,
        Suffix: 'n/a',
        MothersName: '',
        FathersName: '',
        Gender: this.constituentInfo.gender,
        CivilStatus: '',
        Birthday: '',
        Birthplace: '',
        PhoneNumber: 19,
        Citizenship: '',
        Religion: '',
        Email: 'n/a'
      }).then(response => {
        if (response.statusText === 'OK') {
          console.log('Yeah')
        } else {
          console.log('error')
        }
        // this.constituentInfo = response.data.recordset
        // console.log(response.data.recordset)
      }, (error) => { console.log(error) })
      // console.log(this.constituent.firstName + ' ' + this.constituent.middleName + ' ' + this.constituent.lastName + ' ' + this.constituent.gender)
    }
  }, 
}
</script>

