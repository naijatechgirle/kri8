let dayCount = document.getElementById('dayCount');
let hrCount = document.getElementById('hrCount');
let minCount = document.getElementById('minCount');
let secCount = document.getElementById('secCount');

let newYear = new Date('November 8 2022 00:00:00').getTime();
console.log(newYear);
let recent = new Date().getTime();
console.log(recent);

let countDown = () => {
    let yearGap = newYear - recent;
    let dayUpdate = Math.floor(yearGap / 1000 / 60 / 60 / 24);
    // console.log(dayUpdate);
    let hrUpdate = Math.floor(yearGap / 1000 / 60 / 60) % 24;
    let minUpdate = Math.floor(yearGap / 1000 / 60 ) % 60;
    let secUpdate = Math.floor(yearGap / 1000 ) % 60;
    dayCount.innerText = dayUpdate;
    hrCount.innerText = hrUpdate;
    minCount.innerText = minUpdate;
    secCount.innerText = secUpdate;
    
};
setInterval(countDown, 1000);
// countDown()