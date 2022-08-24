let dayCount = document.getElementById('dayCount').innerText;
let hrCount = document.getElementById('hrCount');
let minCount = document.getElementById('minCount');
let secCount = document.getElementById('secCount');
console.log(dayCount);

// let totCount = Number(dayCount) + 1
// console.log(totCount);

let countDown = () => {
    // get the current date
    let count = new Date();

    // get the current hour
    hrCount.innerText = count.getHours();
    // get current min
    minCount.innerText = count.getMinutes()
    // get current Sec
    secCount.innerText = count.getSeconds()
    // console.log(secCount)
    
}
if(countDown){
    dayCount.innerText = Number(dayCount) - 1
}
// setInterval(countDown, 1000)
countDown()