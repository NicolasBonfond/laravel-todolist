// HomeComponent.vue

<template>
  <div class="row justify-content-center">
      <div class="col-md-8">
          <div class="card card-default">
              <div class="card-header">TodouxList</div>

              <div class="card-body">
                  Welcome to the TodouxList ! 
                  Please login or register now to acces to the service
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>