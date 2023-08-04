const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function() {
    return (['Antonia', 'Nuru'])
}

const returnLastTwoDrivers = function () {
    return (['Amari', 'Mo'])
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(n1) {
    return function(n) {
        return n1 * n;
    }
}

const fareDoubler = function(n) {
    return n*2
}

const fareTripler = function(n) {
    return n*3
}

function selectDifferentDrivers(drivers,fun){
    if (fun === returnFirstTwoDrivers){
    return (drivers, returnFirstTwoDrivers())
} else if (fun === returnLastTwoDrivers) {
    return (drivers, returnLastTwoDrivers())}
}