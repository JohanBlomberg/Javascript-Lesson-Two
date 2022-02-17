
function displayCurrentDate () {
let weekdays = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];
let month = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'Oktober', 'November', 'December']

let date = new Date();
let currentDay = weekdays[date.getDay()];
let currentDate = date.getDate();
let currentMonth = month[date.getMonth()];
let currentYear = date.getFullYear();

let displayDateHTML = `
Idag är det ${currentDay} ${currentDate} ${currentMonth} ${currentYear}
`

document.getElementById('displayDate').innerHTML = displayDateHTML;
}

displayCurrentDate();


