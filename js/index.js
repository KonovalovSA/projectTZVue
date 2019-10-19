
// Устанавливаем дату
let data = new Date();
let YY = data.getFullYear();
let MM = data.getMonth() + 1;
let HH = data.getHours();
let mm = data.getMinutes();
let weekDay = data.getDay();
if (MM < 10) MM = '0' + MM;;
let DD = data.getDate();
if (DD < 10) DD = '0' + DD;
dataNow = YY + "-" + MM + "-" + DD;
// Конструктор объектов валют
function objCurs (Value, Name) {
    this.name = Name;
    this.curs = Value;
}

//Минимальное и максимальное значение валют
var minName = '';
var maxName = '';
var minValite = 0;
var maxValite = 0;

// Массивы валют
var arrValutsNow = [];
var arrValutsName = [];
var arrValutsValue = [];

// После проверки на актуальность localStorage запускаем программу которая отображает нашу страничку
var program = function () {
    // Используем либо значеие Value если текущая дата равна дате с json или сегодня ВС или ПН,
    // либо Previous если даты не равны
    let arrValutsLength = parseInt(localStorage.arrValutsLength);
    if (dataNow == localStorage.Date || weekDay == 0 || weekDay == 1) {
        for (var i = 0; i < arrValutsLength; i++) {
            let name = localStorage.getItem([i] + '.Name');
            let curs = localStorage.getItem([i] + '.Value');
            let x = new objCurs(curs, name);
            arrValutsNow.push(x);
        }
    } else {
        for (var i = 0; i < arrValutsLength; i++) {
            let name = localStorage.getItem([i] + '.Name');
            let curs = localStorage.getItem([i] + '.Previous');
            let x = new objCurs(curs, name);
            arrValutsNow.push(x);
        }
    }

    // Заполняем массивы с названием и курсом валют
    for (var i = 0; i < arrValutsNow.length; i++) {
        arrValutsName.push(arrValutsNow[i].name);
        arrValutsValue.push(arrValutsNow[i].curs);
    }

    // Диаграма валют 
        var densityCanvas = document.getElementById("densityChart");
        
        Chart.defaults.global.defaultFontFamily = "Lato";
        Chart.defaults.global.defaultFontSize = 8
        var densityData = {
        label: 'Стоимость в Рублях',
        data: arrValutsValue,
        backgroundColor: [
            'rgba(0, 99, 132, 0.6)',
            'rgba(30, 99, 132, 0.6)',
            'rgba(60, 99, 132, 0.6)',
            'rgba(90, 99, 132, 0.6)',
            'rgba(120, 99, 132, 0.6)',
            'rgba(150, 99, 132, 0.6)',
            'rgba(180, 99, 132, 0.6)',
            'rgba(210, 99, 132, 0.6)',
            'rgba(240, 99, 132, 0.6)',
            'rgba(210, 99, 132, 0.6)',
            'rgba(180, 99, 132, 0.6)',
            'rgba(150, 99, 132, 0.6)',
            'rgba(120, 99, 132, 0.6)',
            'rgba(90, 99, 132, 0.6)',
            'rgba(60, 99, 132, 0.6)',
            'rgba(30, 99, 132, 0.6)',
            'rgba(0, 99, 132, 0.6)',
            'rgba(30, 99, 132, 0.6)',
            'rgba(60, 99, 132, 0.6)',
            'rgba(90, 99, 132, 0.6)',
            'rgba(120, 99, 132, 0.6)',
            'rgba(150, 99, 132, 0.6)',
            'rgba(180, 99, 132, 0.6)',
            'rgba(210, 99, 132, 0.6)',
            'rgba(240, 99, 132, 0.6)',
            'rgba(210, 99, 132, 0.6)',
            'rgba(180, 99, 132, 0.6)',
            'rgba(150, 99, 132, 0.6)',
            'rgba(120, 99, 132, 0.6)',
            'rgba(90, 99, 132, 0.6)',
            'rgba(60, 99, 132, 0.6)',
            'rgba(30, 99, 132, 0.6)',
            'rgba(0, 99, 132, 0.6)',
            'rgba(30, 99, 132, 0.6)',
            'rgba(60, 99, 132, 0.6)',
            'rgba(90, 99, 132, 0.6)'
          ],
          borderColor: [
            'rgba(0, 99, 132, 1)',
            'rgba(30, 99, 132, 1)',
            'rgba(60, 99, 132, 1)',
            'rgba(90, 99, 132, 1)',
            'rgba(120, 99, 132, 1)',
            'rgba(150, 99, 132, 1)',
            'rgba(180, 99, 132, 1)',
            'rgba(210, 99, 132, 1)',
            'rgba(240, 99, 132, 1)',
            'rgba(210, 99, 132, 1)',
            'rgba(180, 99, 132, 1)',
            'rgba(150, 99, 132, 1)',
            'rgba(120, 99, 132, 1)',
            'rgba(90, 99, 132, 1)',
            'rgba(60, 99, 132, 1)',
            'rgba(30, 99, 132, 1)',
            'rgba(0, 99, 132, 1)',
            'rgba(30, 99, 132, 1)',
            'rgba(60, 99, 132, 1)',
            'rgba(90, 99, 132, 1)',
            'rgba(120, 99, 132, 1)',
            'rgba(150, 99, 132, 1)',
            'rgba(180, 99, 132, 1)',
            'rgba(210, 99, 132, 1)',
            'rgba(240, 99, 132, 1)',
            'rgba(210, 99, 132, 1)',
            'rgba(180, 99, 132, 1)',
            'rgba(150, 99, 132, 1)',
            'rgba(120, 99, 132, 1)',
            'rgba(90, 99, 132, 1)',
            'rgba(60, 99, 132, 1)',
            'rgba(30, 99, 132, 1)',
            'rgba(0, 99, 132, 1)',
            'rgba(30, 99, 132, 1)',
            'rgba(60, 99, 132, 1)',
            'rgba(90, 99, 132, 1)'
          ],
          borderWidth: 2,
          hoverBorderWidth: 0
        }
        var barChart = new Chart(densityCanvas, {
        type: 'bar',
        data: {
            labels: arrValutsName,
            datasets: [densityData]
        }
        });
    
    // Сортируем диаграму по возрастанию
    new Vue ({
        el: '#sort',
        data: {arrValutsNow},
        methods: {
            diagram () {
                // Сортируем массив валют
                arrValutsNow.sort((prev, next) => {
                    if ( prev.curs < next.curs ) return -1;
                    if ( prev.curs < next.curs ) return 1;
                });
                arrValutsName = [];
                arrValutsValue = [];
                for (var i = 0; i < arrValutsNow.length; i++) {
                    arrValutsName.push(arrValutsNow[i].name);
                    arrValutsValue.push(arrValutsNow[i].curs);
                }
                // Обновляем диаграму
                barChart.data.datasets[0].data = arrValutsValue;
                barChart.data.labels = arrValutsName;
                barChart.update();
            }
        }
    })

    // Находим самую дешёвую и дорогую валюту
    minValite = getMinValue(arrValutsNow);
    maxValite = getMaxValue(arrValutsNow);
    
    // получение максимального элемента массива
    function getMaxValue(arrValutsNow){
        var max = arrValutsNow[0].curs; // берем первый элемент массива
        for (var i = 0; i < arrValutsNow.length; i++) { // переберем весь массив
            if (max < arrValutsNow[i].curs) {
                max = arrValutsNow[i].curs;
                maxName = arrValutsNow[i].name;
            }
        }
        maxVal = 'Самая дорогая валюта: ' + maxName + ' = ' + max + ' Рублей';
        // возвращаем максимальное значение
        return maxVal;
    }
    
    // получение минимального элемента массива
    function getMinValue(arrValutsNow){
        var min = arrValutsNow[0].curs;
        for (var i = 0; i < arrValutsNow.length; i++) {
            if (min > arrValutsNow[i].curs) {
                min = arrValutsNow[i].curs;
                minName = arrValutsNow[i].name;
            }
        }
        minVal = 'Самая дешёвая валюта: ' + minName + ' = ' + min + ' Рублей';
        return minVal;
    }

    // Выводим самую дешёвую и дорогую валюту
    new Vue({
        el: '#v-for-object',
        data: {
          object: {
            minValue: minValite,
            maxValue: maxValite
          }
        }
      })
}

// Проверяем нужно ли перезаписать наш JSON (он обновляется каждый день в 11:30)
if (dataNow !== localStorage.dataNow) {
    localStorage.setItem('dataNow', dataNow);
    if (HH > 11 || HH == 11 && mm >= 30) {
        $.ajax ({
            url: "https://www.cbr-xml-daily.ru/daily_json.js",
            type: "GET",
            dataType: "JSON",
            success: function (data) {
                localStorage.setItem('Date', data.Date.split('T')[0]);
                var Valuts = data.Valute;
                var arrValuts = [];
                // Записываем массив валют
                for (var x in Valuts) {
                    arrValuts.push(Valuts[x]);
                }
                localStorage.setItem('arrValutsLength', parseInt(arrValuts.length));
                // Записываем в localStorage имя, сегодняшие и завтрашние значения
                for (var i = 0; i < arrValuts.length; i++) {
                    localStorage.setItem([i] + '.Name', arrValuts[i].Name);
                    localStorage.setItem([i] + '.Previous', arrValuts[i].Previous);
                    localStorage.setItem([i] + '.Value', arrValuts[i].Value);
                }
                program();
                }
        });
        // Проверяем если в localStorage Date
    } else if (!localStorage.getItem('Date')) {
        $.ajax ({
            url: "https://www.cbr-xml-daily.ru/daily_json.js",
            type: "GET",
            dataType: "JSON",
            success: function (data) {
                localStorage.setItem('Date', data.Date.split('T')[0]);
                var Valuts = data.Valute;
                var arrValuts = [];
                // Записываем массив валют
                for (var x in Valuts) {
                    arrValuts.push(Valuts[x]);
                }
                localStorage.setItem('arrValutsLength', parseInt(arrValuts.length));
                // Записываем в localStorage имя, сегодняшие и завтрашние значения
                for (var i = 0; i < arrValuts.length; i++) {
                    localStorage.setItem([i] + '.Name', arrValuts[i].Name);
                    localStorage.setItem([i] + '.Previous', arrValuts[i].Previous);
                    localStorage.setItem([i] + '.Value', arrValuts[i].Value);
                }
                program();
                }
        });
    }
} else {
    program();
}
