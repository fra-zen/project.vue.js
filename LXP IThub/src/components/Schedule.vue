<template>
    <div id="app">
      <h3>{{ title }}</h3>
      <a href=""><div id="pairs-container">
        <div v-for="(pair, index) in sortedPairs" :key="pair.id">
        <div v-if="pair.name || pair.time" class="pair">
            
            <div class="card_wrapper"><p class="card_number"> {{ getPairNumber(pair.id) }}</p> <p class="card_name">{{ pair.name }}</p></div> <div class="card_wrapper_two"> <p class="card_auditorium_Number">Ауд. {{pair.auditorium_Number}}</p> <p class="card_time">{{ pair.time }}</p>  </div>
          </div>
        </div>
        <div v-if="pairs.length === 0">
          Нет данных для отображения.
        </div>
      </div></a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    data() {
      return {
        title: 'Расписание',
        pairs: [
        { name: "Философия", time: "10:00 - 11:30", auditorium_Number: "8-651б", id: 2 },
  { name: "Основы JavaScript", time: "12:00 - 13:30", auditorium_Number: "1-358", id: 1 },
  { name: "Основы JavaScript", time: "14:00 - 15:30", auditorium_Number: "1-358", id: 3 },
  { name: "СУБД", time: "16:00 - 17:30", auditorium_Number: "8-232", id: 4 },

        ]
      }
    },
    computed: {
    sortedPairs() {
      return this.pairs.sort((a, b) => a.id - b.id);
    }
  },
    methods: {
    getPairNumber(id) {
      switch (id) {
        case 1:
          return '1 пара';
        case 2:
          return '2 пара';
        case 3:
          return '3 пара';
        case 4:
          return '4 пара';
        case 5:
          return '5 пара';   
        default:
          return id;
      }
    }
  }
  }
  </script>
  
  <style>
  a {
    text-decoration: none;
    color: black;
  }
  #pairs-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    padding: 10px;
    transition: all .1s linear;
    flex-direction: column;
    margin-top: 15px;
    gap: 14px;
    
  }
.card_wrapper {
    display: flex;
    
}
.card_wrapper_two{
    font-size: 14px;
    line-height: 145%;
    padding-top: 14px;
    margin-right: 10px;
    text-align: center;
}
  .pair {
    display: flex;
    justify-content: space-between;
     /* Отображаем блок по умолчанию */
    width: 360px;
  height: 70px;
  border-radius: 15px;
  border: 1px solid #ab00ea;
  }
  
  .pair[data-hidden="true"] {
    display: none; /* Скрываем, если data-hidden="true" */
  }
  h3 {
  font-size: 32px;
  text-align: center;
  padding: 25px;
  font-weight: 300;
}
.card_number{
    margin-left: 10px;
    font-size: 17px;
    font-weight: 500;
    transform: rotate(-90deg);
}
.card_time {
    font-weight: 300;
}
.card_name{
    padding-top: 24px;
}
  </style>