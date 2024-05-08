<script>
export default {}
</script>


<template>
  <div class="wrapper">
  <div class="menu">
    <a href=""><img src="D:\Илья\Desktop\project.vue.js\LXP IThub\src\components\icons\options.png" alt="options.png"></a> 
    <a href=""><img src="D:\Илья\Desktop\project.vue.js\LXP IThub\src\components\icons\portfolio.png" alt="portfolio.png"></a>
    <a href=""><img src="D:\Илья\Desktop\project.vue.js\LXP IThub\src\components\icons\diary.png" alt="dairy.png"></a>
    <a href=""><img src="D:\Илья\Desktop\project.vue.js\LXP IThub\src\components\icons\study.png" alt="study.png"></a>
  </div>
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
  <div class="box_Grade">
    <div class="Grade_wrapper">
      <h3>Успеваемость</h3> <a href="#/reg">След. стр</a>
    <p>{{ lesson_Name }}</p>
    <p>{{ estimation }}</p>
  </div>

  </div>
  </div>
 </div>
</template>

<style scoped>

.first-lesson {
  width: 340px;
  height: 70px;
  border-radius: 15px;
  border: 1px solid #ab00ea;
}

.second-lesson {
  width: 340px;
  height: 70px;
  border-radius: 15px;
  border: 1px solid #ab00ea;
}

.third-lesson {
  width: 340px;
  height: 70px;
  border-radius: 15px;
  border: 1px solid #ab00ea;
}

.four-lesson {
  width: 340px;
  height: 70px;
  border-radius: 15px;
  border: 1px solid #ab00ea;
}

.five-lesson {
  width: 340px;
  height: 70px;
  border-radius: 15px;
  border: 1px solid #ab00ea;
}

.Comment_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.Comment {
  width: 751px;
  height: 83px;
  border-radius: 15px;
  border: 1px solid #ab00ea;
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

.Grade_wrapper h3 {
  font-size: 32px;
  text-align: center;
  padding: 20px;
  font-weight: 300;
}
</style>
