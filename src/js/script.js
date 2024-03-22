let dateStartInput = document.getElementById("dateStart");
let dateEndInput = document.getElementById("dateEnd");

let startDateFilled = false;
let endDateFilled = false;

dateStartInput.addEventListener("blur", function () {
  startDateFilled = dateStartInput.value !== "";
  handleDateValidation();
});

dateEndInput.addEventListener("blur", function () {
  endDateFilled = dateEndInput.value !== "";
  handleDateValidation();
});

function handleDateValidation() {
  if (startDateFilled && endDateFilled) {
    let startDate = dateStartInput.value;
    let endDate = dateEndInput.value;

    let dateRegex = /^\d{2}-\d{2}-\d{4}$/;

    if (!dateRegex.test(startDate) || !dateRegex.test(endDate)) {
      alert("Некорректный формат даты. Введите дату в формате дд-мм-гггг.");
      return;
    }
    var requestData = {
      start: startDate,
      end: endDate,
    };

    fetch("your-server-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Ошибка запроса на сервер.");
      })
      .then(function (data) {
        console.log("Ответ от сервера:", data);
      })
      .catch(function (error) {
        console.log("Ошибка:", error.message);
      });
  }
}
let jsonData = JSON.parse(jsonData);

let dataArray = Array.from(jsonData);

console.log(dataArray);
