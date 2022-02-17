let date = new Date();

let translateDays = () => {
    let weekdays = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];
        return weekdays[date.getDay()];
}

let translateMonths = () => {
    let month = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'Oktober', 'November', 'December'];
      return month[date.getMonth()];
}

let displayCurrentDate = () => {
let currentDate = date.getDate();
let currentYear = date.getFullYear();
let displayDay = translateDays();
let displayMonth = translateMonths();

let displayDateHTML = `
Idag är det ${displayDay} ${currentDate} ${displayMonth} ${currentYear}
`

document.getElementById('displayDate').innerHTML = displayDateHTML;
}

displayCurrentDate();


