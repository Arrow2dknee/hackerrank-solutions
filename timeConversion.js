function timeConversion(s) {
  // Write your code here
  if (!s || !s.length) {
    return;
  }

  const givenTimeArray = s.split(":");
  const hour = givenTimeArray[0];
  const minutes = givenTimeArray[1];
  const seconds = givenTimeArray[2].substr(0, 2);
  const hourOfDay = givenTimeArray[2].substr(2);

  const militaryTime = {
    "12AM": "00",
    "01AM": "01",
    "02AM": "02",
    "03AM": "03",
    "04AM": "04",
    "05AM": "05",
    "06AM": "06",
    "07AM": "07",
    "08AM": "08",
    "09AM": "09",
    "10AM": "10",
    "11AM": "11",
    "12PM": "12",
    "01PM": "13",
    "02PM": "14",
    "03PM": "15",
    "04PM": "16",
    "05PM": "17",
    "06PM": "18",
    "07PM": "19",
    "08PM": "20",
    "09PM": "21",
    "10PM": "22",
    "11PM": "23",
  };

  return `${militaryTime[`${hour}${hourOfDay}`]}:${minutes}:${seconds}`;
}

console.log(timeConversion("12:00:00AM"));
