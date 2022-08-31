let dayCount = document.getElementById('dayCount');
let hrCount = document.getElementById('hrCount');
let minCount = document.getElementById('minCount');
let secCount = document.getElementById('secCount');
let email = document.getElementById('email');
let main = document.getElementById('main');
let showAlertDiv = document.getElementById('showDiv');
let alertContent = document.getElementById('alertContent');




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


let checkEmail = () => {
    //email regex
    let emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    //loads html page fxn
    let autoRefresh =()=>{
        window.location.reload();
    }

    if(email.value.match(emailCheck)){
        main.style.display = 'none';
        let fadeDiv=()=> {
            showAlertDiv.style.display = 'block';
        }
        setTimeout(fadeDiv, 1000);
        //delay after alertDiv
        setTimeout(autoRefresh, 2000); 
    } else {
        let alertDiv =()=>{
            main.style.display = 'none';
            showAlertDiv.style.display = 'block';
            alertContent.innerText = 'Wrong email format 😐😐';
            alertContent.style.padding = '10px 20px';
        }
        setTimeout(alertDiv, 1000);
        //delay after alertDiv
        setTimeout(autoRefresh, 2000); 
    }
}
//added event listener
btn.addEventListener('click', checkEmail);