
export function reorder(arayinput) {
    // this function reorders the input array by the an array-object property value
    let newarry = arayinput.sort(function(a, b){return b.timestamp-a.timestamp})
    return newarry
}

export function dateCoverstion(datenumber){
    // this function conversts Epoch Unix Timestamp (epoch) in to a specific format
    let date = (new Date(datenumber));
    // console.log(datenumber)
    let dayofweek = date.getDay()-1

    let daynumber = date.getDate()

    let monthnumber = date.getMonth()

    let year = date.getFullYear()

    let array = [dayofweek, daynumber, monthnumber, year]

    let daysname = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    let monthname = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]


    let fulldate1 = `${paddingnumberfunc(monthnumber+1)}/${paddingnumberfunc(daynumber)}/${year}`
    return fulldate1
}

export function timeElapsed (eposchtimestamp){
    let basetime = Math.round(Date.now()/1000)
    let referencetime = eposchtimestamp

    let formatedtime = Math.round(referencetime)/1000

    let timeElapsedtime = basetime - formatedtime
    // console.log(timeElapsedtime)
    let seconds = Math.round(timeElapsedtime)
    let minutes = Math.round(timeElapsedtime/60)
    let hours = Math.round(minutes/60)
    let days = Math.round(hours/24)
    let weeks = Math.round(days/7)
    let months = Math.round(days/12)
    let years = Math.round(days/365)
    
    if (timeElapsedtime<60){ //for seconds range
        // console.log(`${seconds} seconds ago`)
        // console.log(seconds)
        // seconds ago...

        if(seconds<0){
            // this prevent negative time from displaying
            seconds = 0
            // console.log(seconds)
            // in addition, we can NOT have a return word here, 
            // as the placement of the return word here will cause the if to exit and 
            // capture the value of the seconds as the entire return at this instance
            // return
        }

        let time = `${seconds} seconds ago`
        return time
        
    
    } else if(seconds>=60 && seconds<3600) { // max = how many seconds there are in a minute *60
        // console.log(`${minutes} minutes ago`)
        // minutes ago...
        let time = `${minutes} minutes ago`
        return time
    
    } else if(seconds>=3600 && seconds<86400){ // max = how many seconds there are in a hour *60
        // console.log(`${hours} hours ago`)
        //hours ago...
        let time = `${hours} hours ago`
        return time
    
    } else if(seconds>=86400 && seconds<604800){ // max = how many seconds there are in a day *24
        // console.log(`${days} days ago`)
        //days ago...
        let time = `${days} days ago`
        return time

    } else if(seconds>=604800 && seconds<2419200){ // max = how many seconds there are in a week *7
        // console.log(`${weeks} weeks ago`)
        //days ago...
        let time = `${weeks} weeks ago`
        return time

    } else if(seconds>=2419200 && seconds<31534272){ // max = how many seconds there in a month *52
        // console.log(`${months} months ago`)
        //days ago...
        let time = `${months} months ago`
        return time
    } else if(seconds>=31534272 && seconds<126137088){ // max = 4years
        // console.log(`${years} years ago`)
        //days ago...
        let time = `${years} years ago`
        return time
    } else {
        // console.log("Too long ago")
        let time = "Too long ago"
        return time
    }
}

export function paddingnumberfunc(number){
    // this function adds padding to numbers that only have one charactor length
    if (number.toString().length < 2){
        let paddednumber = `0${number}`
        return paddednumber
    }else {
        return number
    }
}