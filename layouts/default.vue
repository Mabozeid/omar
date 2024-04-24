<template>

    <div>
        <NavBar />
    </div>


   <div>
    <slot />
   </div>


  <Footer />

  
  </template>

  
<script>
export default {
    name: "app",
}
</script>

<style lang="scss" scoped>

</style>
