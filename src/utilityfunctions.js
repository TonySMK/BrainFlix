export function reorder(arayinput) {
  // reorders the input array by the an array-object property value
  let newarry = arayinput.sort(function (a, b) {
    return b.timestamp - a.timestamp;
  });
  return newarry;
}

export function dateCoverstion(datenumber) {
  // this conversts Epoch Unix Timestamp (epoch) in to a specific format

  function paddingnumberfunc(number) {
    // adds 0s to the front of a number if number is 1 charactor long
    if (number.toString().length < 2) {
      let paddednumber = `0${number}`;
      return paddednumber;
    } else {
      return number;
    }
  }

  let date = new Date(datenumber);

  let daynumber = date.getDate();

  let monthnumber = date.getMonth();

  let year = date.getFullYear();

  let fulldate1 = `${paddingnumberfunc(monthnumber + 1)}/${paddingnumberfunc(
    daynumber
  )}/${year}`;
  return fulldate1;
}

export function timeElapsed(eposchtimestamp) {
  // the states the difference in time from the time of specificed action
  let basetime = Math.round(Date.now() / 1000);
  let referencetime = eposchtimestamp;

  let formatedtime = Math.round(referencetime) / 1000;

  let timeElapsedtime = basetime - formatedtime;
  let seconds = Math.round(timeElapsedtime);
  let minutes = Math.round(timeElapsedtime / 60);
  let hours = Math.round(minutes / 60);
  let days = Math.round(hours / 24);
  let weeks = Math.round(days / 7);
  let months = Math.round(days / 12);
  let years = Math.round(days / 365);

  if (timeElapsedtime < 60) {
    //for seconds range

    if (seconds < 0) {
      // this prevent negative time from displaying
      seconds = 0;
    }

    let time = `${seconds} seconds ago`;
    return time;
  } else if (seconds >= 60 && seconds < 3600) {
    // max = how many seconds there are in a minute *60
    let time = `${minutes} minutes ago`;
    return time;
  } else if (seconds >= 3600 && seconds < 86400) {
    // max = how many seconds there are in a hour *60
    let time = `${hours} hours ago`;
    return time;
  } else if (seconds >= 86400 && seconds < 604800) {
    // max = how many seconds there are in a day *24
    let time = `${days} days ago`;
    return time;
  } else if (seconds >= 604800 && seconds < 2419200) {
    // max = how many seconds there are in a week *7
    let time = `${weeks} weeks ago`;
    return time;
  } else if (seconds >= 2419200 && seconds < 31534272) {
    // max = how many seconds there in a month *52
    let time = `${months} months ago`;
    return time;
  } else if (seconds >= 31534272 && seconds < 126137088) {
    // max = 4years
    let time = `${years} years ago`;
    return time;
  } else {
    let time = "Too long ago";
    return time;
  }
}

export function refreshit() {
  // forces a page refresh
  window.location.reload();
}
