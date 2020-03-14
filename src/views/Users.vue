<template>
  <div>
    <div class="users-wrapper">
      <div v-if="loading && loadingImg">loading...</div>
      <div v-else class="users">
        <h1>Users</h1>
        <div v-for="(user, index) in users" :key="`user-${index}`" style="margin-top: 50px; margin-bottom: 50px;">
          <user :user="user" :img="`${photos[index+1].url}`"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from '../components/User'
import axios from 'axios'
const BASE_URL = 'https://jsonplaceholder.typicode.com'
export default {
  name: 'Home',
  components: {
    User
  },
  data () {
    return {
      users: [],
      photos: [],
      loading: false,
      loadingImg: false
    }
  },
  mounted () {
    this.loadUsers()
    this.loadPhotos()
  },
  methods: {
    loadUsers () {
      this.loading = true
      axios({
        url: `${BASE_URL}/users`,
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => this.users = response.data)
        .catch(error => console.log(error))
        .then(() => this.loading = false)
    },

    loadPhotos () {
      this.loadingImg = true
      axios({
        url: `${BASE_URL}/photos`,
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => {
          this.photos = response.data.filter(img => img.id <= 11)
        })
        .catch(error => console.log(error))
        .then(() => this.loadingImg = false)
    }
  }
}
</script>
<style lang="scss" scoped>
  $accent-color: #ff9800;
  .users-wrapper {
    position: relative;
    max-width: 600px;
    min-height: 400px;
    margin: 0 auto;
    --accent-color: #ff9800;
  }
  .users {
    padding: 16px;
    margin-top: 60px;
    background-color: rgb(229, 233, 226);
    border-radius: 5px;
    position: relative;
  }
</style>