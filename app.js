window.onload = () => {

    function buildclock() {

        const date = new Date();

        let hours = date.getHours(); //0-23
        let minutes = date.getMinutes(); //0-59
        let seconds = date.getSeconds(); //0-59

        // Convert to 12-hour format
        let period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.querySelector('#clock-hours').innerText = hours;
        document.querySelector('#clock-minutes').innerText = minutes;
        document.querySelector('#clock-seconds').innerText = seconds;
        document.querySelector('#clock-am').style.opacity = period === 'AM' ? 1 : 0.5;
        document.querySelector('#clock-pm').style.opacity = period === 'PM' ? 1 : 0.5;

        setTimeout(buildclock, 1000);
    }
    buildclock();
}
