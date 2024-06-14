<template> <div id="comments-container" class="box_Comments">
    <h3>Комментарии</h3>
    <div class="Comment_wrapper">
        <a href=""><div class="Comment" v-for="comment in comments" :key="comment.id">
      <img src="D:\Илья\Desktop\project.vue.js\LXP IThub\src\components\icons\student.png" alt=""> <p class="lesson_name"> {{ comment.lesson_name }}</p>
      
    </div></a> </div> </div></template>

<script>
export default {
  name: 'App',
  data() {
    return {
        comments:[
        { lesson_name: "CУБД" }
        ]
    }
  }
}


</script>
<style>
#comments-container {
    
font-size: 22px;
font-weight: 400;
}
img { 
    margin-left: 20px;
    width: 43px;
    height: 43px;
    border-radius: 80%;
}


.box_Comments {
  width: 795px;
  height: 258px;
  background: rgb(255, 255, 255);
  border-radius: 15px;
  margin-left: 30px;
  box-shadow: 0 0 20px rgb(0 0 0 / 15%);
}
.box_Comments h3 {
  font-size: 32px;
  text-align: center;
  font-weight: 300;
  padding: 8px;
}.Comment_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.Comment {
    text-align: start;
    display: flex;
    width: 751px;
    height: 83px;
    border-radius: 15px;
    border: 1px solid #ab00ea;
    align-items: center;
    gap: 280px;
}
.lesson_name {
    
}
 </style>