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

    if (hourDegrees == 360 || minDegrees == 360 || secDegrees == 360) {
        hourHand.style.transition = `none`
        minHand.style.transition = `none`
        secondHand.style.transition = `none`
    }

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    secondHand.style.transform = `rotate(${secDegrees}deg)`;

    if (hourHand.style.transition == `none` || minHand.style.transition == `none` || secondHand.style.transition == `none`){
        hourHand.style.transition= `all 0.5s`
        minHand.style.transition = `all 0.5s`
        secondHand.style.transition = `all 0.5s`

    
    }


}
setInterval(setDate, 1000);