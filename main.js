setDate = () =>{
    const now = new Date();

    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourDegrees = 90 + ((hour % 12) * 30);
    const minDegrees =  90 +(minute * 6);
    const secDegrees =  90 + (second * 6);

    const hourHand = document.querySelector('.hour-hand');
    const minHand = document.querySelector('.min-hand')
    const secondHand = document.querySelector('.second-hand');

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    secondHand.style.transform = `rotate(${secDegrees}deg)`;
}
setInterval(setDate, 1000);