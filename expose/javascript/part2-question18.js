let currDate = function () {
    let d = new Date();
    console.log(d.toLocaleTimeString());
}

setInterval(currDate, 1000);