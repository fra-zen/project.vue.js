
<template>
    
    <div class="menu">
      <a href=""><img src="./components/icons/options.png" alt="options.png"></a> 
      <a href="#/reg"><img src="./components/icons/portfolio.png" alt="portfolio.png"></a>
      <a href=""><img src="./components/icons/diary.png" alt="dairy.png"></a>
      <a href=""><img src="./components/icons/study.png" alt="study.png"></a>
    </div>
    
</template>


<script>
export default {}
</script>


<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 110px;
  width: 63px;
  height: 100vh;
  background: rgb(153, 0, 255);
  background: linear-gradient(
    108deg,
    rgba(153, 0, 255, 0.9809173669467787) 26%,
    rgba(243, 121, 253, 1) 93%
  );
}</style>