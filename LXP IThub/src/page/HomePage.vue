<script>
export default {
  name: 'App',
  data() {
    return {
      name: "Иван"
    }
  }
}


</script>


<template>
  <div class="wrapper">

    <my-component />
    
  <div class="first">
  <h2>Добрый вечер, {{ name }}!</h2>
  <div class="box-Schedule">
    <my-component_two />

  </div>
  </div>

  <div class="second">
    <my-component_three />

  <div class="box_Grade">
    <div class="Grade_wrapper">
      <h3>Успеваемость</h3> 
      
    <p>{{ lesson_Name }}</p>
    <p>{{ estimation }}</p>
    <p>egergrth</p>
  </div>

  </div>
  </div>
 </div>
</template>

<style scoped>







.wrapper h2 {
  padding: 36px;
  font-size: 31px;
  font-weight: 200;
}



.box-Schedule {
  max-width: 100%;
  width: 400px;
  height: 611px;
  background: rgb(255, 255, 255);
  border-radius: 15px;
  margin-left: 18px;
  box-shadow: 0 0 28px rgb(0 0 0 / 15%);
}


.second {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 38px;
}

.box_Grade {
  width: 795px;
  height: 409px;
  background: rgb(255, 255, 255);
  border-radius: 15px;
  margin-left: 30px;
  box-shadow: 0 0 20px rgb(0 0 0 / 15%);
}

.Grade_wrapper {
  text-align: center;
  padding: 20px;
  font-weight: 300;
}
.Grade_wrapper h3 {
  font-size: 32px;
  text-align: center;
  padding: 20px;
  font-weight: 300;
}
</style>
