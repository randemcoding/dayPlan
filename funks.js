let currentHour = 0
 function displayDate(){
    
    const date = new Date()
    let hours = date.getHours();
    let dayNight = ''
    currentHour = hours
    console.log(hours)
    const mins = date.getMinutes();
    const secs = date.getSeconds();
    const upDate = date.toString().split(' ')
    let finalDate = upDate[0] + ', ' + upDate[1] + ' ' + upDate[2] + ', ' + upDate[3]
    const inputDate = document.getElementById('input-date')
    let secs2 = '';
    let mins2 = '';
    
    inputDate.innerText = finalDate
   // displayDate()
    if (hours === 0){
        hours = 12
        dayNight = 'am'
    } else if (hours > 12){
        hours -= 12
        dayNight = 'pm'
    } else {
        dayNight = 'am'
    }
    if (mins < 10){
        mins2 = `0${mins}`
    } else {
        mins2 = mins
    }
    if (secs < 10){
        secs2 = `0${secs}`
    } else {
        secs2 = secs
    }
    const finalTime = `${hours}:${mins2}:${secs2} ${dayNight}`
    inputDate.innerText += ' - ' + finalTime
    //console.log(dayNight)
    return currentHour
}
   export let startClock = setInterval(displayDate,1000)
   console.log(startClock)
   

