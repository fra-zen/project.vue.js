<script>
export default {}
</script>

<template>
    <div class="wrapper">
    <div class="menu">
    <a href=""><img src="D:\Илья\Desktop\project.vue.js\LXP IThub\src\components\icons\options.png" alt="options.png"></a> 
    <a href=""><img src="D:\Илья\Desktop\project.vue.js\LXP IThub\src\components\icons\portfolio.png" alt="portfolio.png"></a>
    <a href=""><img src="D:\Илья\Desktop\project.vue.js\LXP IThub\src\components\icons\diary.png" alt="dairy.png"></a>
    <a href=""><img src="D:\Илья\Desktop\project.vue.js\LXP IThub\src\components\icons\study.png" alt="study.png"></a></div>
    
        <H2>Портфолио</H2>
    
<div class="box_portfolio">
    <img class="img_student" src="D:\Илья\Desktop\project.vue.js\LXP IThub\src\components\icons\student.png" alt="">
    <p>{{ Student_Name }}</p>
</div>


    </div>
    
</template>

<style scoped>

.box_portfolio { 
width: 90%;
height: 80%;
background-color: rgb(205, 255, 255);
} 
.img_student {
    width: 150px;
    height: 140px;
    border-radius: 50%;
}



</style>