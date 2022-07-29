const hrEL = document.getElementById("hour");
const mnEL = document.getElementById("minutes");
const scEL = document.getElementById("seconds");
const amPmEL = document.getElementById("ampm");

//let hr = new Date().getHours();

function khushisClock() {
    var d = new Date();
    let hr = d.getHours();
    let mn = d.getMinutes();
    let sc = d.getSeconds();

    if (hr > 12) {
        hr = hr - 12;
        amPmEL.innerText = "PM";
    }
    hrEL.innerText = hr;
    mnEL.innerText = mn;
    scEL.innerText = sc;

    setTimeout( () => {
        khushisClock();
    },
    1000
    );
}

khushisClock();
//we will keep all this code in function
//we will call that function after every 1 sec