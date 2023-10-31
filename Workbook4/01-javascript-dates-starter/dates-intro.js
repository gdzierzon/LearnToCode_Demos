let dateFromString = new Date("2023-06-01"); // June 1 2023 00:00:00 UTC (uses UTC - so 6 or 7 hours ahead)
let dateFromString2 = new Date("2023-06-01T08:30:00Z"); // June 1 1 2023 08:30:00 AM UTC
let dateFromIntegers = new Date(2023,6,1); // May 1 2023 00:00:00 MST or MDT (uses local time zone)
let dateFromIntegers2 = new Date(2023,6,1,8,30,0); // May 1 2023 08:30:00 MST or MDT

console.log("Date Parts - Local Time");
console.log("------------------------");
console.log(dateFromString);
console.log("getMonth(): " + dateFromString.getMonth()); // displays month number (0-11) (Jan-Dec)
console.log("getDate(): " + dateFromString.getDate()); // displays the day of month number (1-31)
console.log("getFullYear(): " + dateFromString.getFullYear()); // displays the full 4 number year
console.log("getDay(): " + dateFromString.getDay()); // displays the day of the week number (0-6) (Sun-Sat)
console.log("getHours(): " + dateFromString.getHours()); // displays the number of hours (0-23)
console.log("getMinutes(): " + dateFromString.getMinutes()); // displays the number of minutes (0-59)
console.log("getSeconds(): " + dateFromString.getSeconds()); // displays the number of seconds (0-59)

console.log("");
console.log("Date Parts - UTC Time");
console.log("------------------------");
console.log(dateFromString);
console.log("getUTCMonth(): " + dateFromString.getUTCMonth()); // displays month number (0-11) (Jan-Dec)
console.log("getUTCDate(): " + dateFromString.getUTCDate()); // displays the day of month number (1-31)
console.log("getUTCFullYear(): " + dateFromString.getUTCFullYear()); // displays the full 4 number year
console.log("getUTCDay(): " + dateFromString.getUTCDay()); // displays the day of the week number (0-6) (Sun-Sat)
console.log("getUTCHours(): " + dateFromString.getUTCHours()); // displays the number of hours (0-23)
console.log("getUTCMinutes(): " + dateFromString.getUTCMinutes()); // displays the number of minutes (0-59)
console.log("getUTCSeconds(): " + dateFromString.getUTCSeconds()); // displays the number of seconds (0-59)


console.log("");
console.log("Parsing a date");
console.log("------------------------");
// Parsing a date
// Dates are stored as integers
let date = Date.parse("2023-06-01"); // returns the number of milliseconds from Jan 1 1970 to the specified date
console.log(date);

let startDate = new Date("2022-01-15");
let endDate = new Date("2022-03-15");

console.log(startDate.getTime());
console.log(endDate.getTime());

let dateDifference = endDate.getTime() - startDate.getTime();
console.log(dateDifference);

let millisecondsPerDay = 1000 * 60 * 60 * 24
let daysBetween = dateDifference / millisecondsPerDay;

console.log(daysBetween);