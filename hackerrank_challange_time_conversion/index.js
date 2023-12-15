const s = "06:15:30AM";

const timeConversion = (s) => {
  const timeComponents = s.match(/(\d+):(\d+):(\d+)([APMapm]{2})/);
  if (!timeComponents) {
    // Invalid time format
    return "Invalid time format";
  }
  let hour = parseInt(timeComponents[1]);
  const minute = timeComponents[2];
  const second = timeComponents[3];
  const period = timeComponents[4].toUpperCase();

  if (period === "PM" && hour !== 12) {
    hour = hour + 12;
  } else if (period === "AM" && hour === 12) {
    hour = 0;
  }

  //formatting to military time
  const militaryTime = `${hour
    .toString()
    .padStart(2, "0")}:${minute}:${second}`;

  return militaryTime;
};

console.log(timeConversion(s));
