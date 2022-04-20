/* Your Code Here */

// Loads array elements into corresponding object properties. Additionally, initialize empty arrays on the properties
// timeInEvents and timeOutEvents

function createEmployeeRecord(recArray) {
    return {
        firstName: recArray[0],
        familyName: recArray[1],
        title: recArray[2],
        payPerHour: recArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

// Converts each nested array into an employee record using createEmployeeRecord and accumulates it to a new array

function createEmployeeRecords(recordsArray) {
    return recordsArray.map(rec => createEmployeeRecord(rec))
}

// Add an object with keys:
// type: set to "TimeIn"
// hour: derived from argument
// date: derived from argument

function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ")
    const inEvent = {
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    }
    this.timeInEvents.push(inEvent)
    return this 

}

// Add an Object with keys:
// type: "TimeOut"
// hour: derived from the argument
// date: derived from the argument

function createTimeOutEvent(dateStamp) {
    const[date, hour] = dateStamp.split(" ")
    const outEvent = {
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    }
    this.timeOutEvents.push(outEvent)
    return this 
}

// Given a date, find the number of hours elapsed between that date's timeInEvent
// and timeOutEvent

function hoursWorkedOnDate(targetDate) {
    const hoursIn = this.timeInEvents.find(inEvent => inEvent.date === targetDate)
    const hoursOut = this.timeOutEvents.find(outEvent => outEvent.date === targetDate)
    return (hoursOut.hour - hoursIn.hour) / 100
}

// using hoursWorkedOnDate, multiply the hours by the record's payRate to 
// determine amount owed. Amount should be returned as a number

function wagesEarnedOnDate(targetDate) {
    const hours = hoursWorkedOnDate.call(this, targetDate)
    return this.payPerHour * hours
}

// Test the firstName field for a match with the firstName argument

function findEmployeeByFirstName(employees, firstNameString) {
    return employees.find(emp => emp.firstName === firstNameString)
}

// Using `allWagesFor` for each of the employees, accumulate the value of
// all dates worked by the employee in the record used as context. Amount
// should be returned as a number.

function calculatePayroll(recordsArray) {
    const record = recordsArray.map(employee => allWagesFor.call(employee))
    return record.reduce((currentValue, total) => currentValue + total)
    
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

