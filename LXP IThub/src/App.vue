<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div class="wrapper">
  <div class="menu"></div>
  <div class="first">
  <h2>Добрый вечер, {{ name }}!</h2>
  <div class="box-Schedule">
    <h3>Расписание</h3>
    <div class="lesson-wrapper">
    <div class="first-lesson">
      <p class="lesson_Number">{{ lesson_Number }}</p>
      <p class="lesson_Name">{{ lesson_Name }}</p>
      <p class="auditorium_Number">{{ auditorium_Number }}</p>
    </div>
    <div class="second-lesson">
      <p class="lesson_Number">{{ lesson_Number }}</p>
      <p class="lesson_Name">{{ lesson_Name }}</p>
      <p class="auditorium_Number">{{ auditorium_Number }}</p>
    </div>
    <div class="third-lesson">
      <p class="lesson_Number">{{ lesson_Number }}</p>
      <p class="lesson_Name">{{ lesson_Name }}</p>
      <p class="auditorium_Number">{{ auditorium_Number }}</p>
    </div>
    <div class="four-lesson">
      <p class="lesson_Number">{{ lesson_Number }}</p>
      <p class="lesson_Name">{{ lesson_Name }}</p>
      <p class="auditorium_Number">{{ auditorium_Number }}</p>
    </div>
    <div class="five-lesson">
      <p class="lesson_Number">{{ lesson_Number }}</p>
      <p class="lesson_Name">{{ lesson_Name }}</p>
      <p class="auditorium_Number">{{ auditorium_Number }}</p>
    </div>
  </div>
  </div>
  </div>

  <div class="second">

  <div class="box_Comments">
    <h3>Комментарии</h3>
    <div class="Comment_wrapper">
    <div class="Comment">
      <a href="">{{ photos }}</a>
      <p class="lesson_Name">{{ lesson_Name }}</p>
    </div>
  </div>
  </div>
  <div class="box_Grade"></div>
  </div>
 </div>
</template>

<style scoped>
.menu {
  width: 63px;
  height: 100vh;
  background: rgb(153,0,255);
  background: linear-gradient(108deg, rgba(153,0,255,0.9809173669467787) 26%, rgba(243,121,253,1) 93%);
}

.wrapper {
display: flex;
}

.wrapper h2 {
  padding: 36px;
  font-size: 31px;
  font-weight: 200;
}

.lesson-wrapper {
  margin-top: 15px;
  gap: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box-Schedule {
  max-width: 100%;
  width: 379px;
  height: 611px;
  background: rgb(255, 255, 255);
  border-radius: 15px;
  margin-left: 18px;
  box-shadow: 0 0 28px rgb(0 0 0 / 15%);
}

.box-Schedule h3 {
  font-size: 32px;
  text-align: center;
  padding: 25px;
  font-weight: 300;
}
.second {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 38px;
}
.box_Comments {
  width: 795px;
  height: 258px;
  background: rgb(255, 255, 255);
  border-radius: 15px;
  margin-left: 18px;
  box-shadow: 0 0 20px rgb(0 0 0 / 15%);
}
.box_Comments h3 {
  font-size: 32px;
  text-align: center;
  font-weight: 300;
  padding: 8px;
}
.box_Grade {
  width: 795px;
  height: 409px;
  background: rgb(255, 255, 255);
  border-radius: 15px;
  margin-left: 18px;
  box-shadow: 0 0 20px rgb(0 0 0 / 15%);
}
</style>
