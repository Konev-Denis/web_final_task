var el = document.getElementById("1");
var div = document.createElement("div");
var text = document.createTextNode("Some text");
div.appendChild(text);
console.info('vvvv')
var date = document.getElementById("date_input");
Data = new Date();
Year = Data.getFullYear();
Month = Data.getMonth() + 1;
if (Month < 10){
    Month = '0' + Month;
}
Day = Data.getDate();
date.min = Year + '-' + Month + '-' + Day