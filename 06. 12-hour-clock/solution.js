function convertTo12HourClock(time) {

  const hours = time.slice(0, 2);
  const minutes = time.slice(-2);

  if (hours === "00") {
    return `12:${minutes} AM`;
  }
  else if (hours.charAt(0) === "0") {
    let time = hours.substring(1);
    return `${time}:${minutes} AM`;
  }
  else if (hours === "12") {
    return `12:${minutes} PM`;
  }
  else if (hours > 12) {
    return `${hours - 12}:${minutes} PM`;
  }
  else {
    return `${hours}:${minutes} AM`;
  }
}

module.exports = { convertTo12HourClock };
