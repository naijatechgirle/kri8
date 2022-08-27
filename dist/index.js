let dayCount = document.getElementById('dayCount');
let hrCount = document.getElementById('hrCount');
let minCount = document.getElementById('minCount');
let secCount = document.getElementById('secCount');
let email = document.getElementById('email');


let countDown = () => {
    //get recent date
    let newYear = new Date('November 8 2022 00:00:00').getTime();
    //get current date
    let recent = new Date().getTime();
    // get the differnce in date
    let yearGap = newYear - recent;
    
    let dayUpdate = Math.floor(yearGap / 1000 / 60 / 60 / 24);
    let hrUpdate = Math.floor(yearGap / 1000 / 60 / 60) % 24;
    let minUpdate = Math.floor(yearGap / 1000 / 60 ) % 60;
    let secUpdate = Math.floor(yearGap / 1000 ) % 60;

    // insert into html
    dayCount.innerText = dayUpdate < 10 ? '0' + dayUpdate : dayUpdate;
    hrCount.innerText = hrUpdate < 10 ? '0' + hrUpdate : hrUpdate;
    minCount.innerText = minUpdate < 10 ? '0' + minUpdate : minUpdate;
    secCount.innerText = secUpdate < 10 ? '0' + secUpdate : secUpdate;

    
};
// set timer to every 1000s
setInterval(countDown, 1000);

// email validations
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
validateEmail()