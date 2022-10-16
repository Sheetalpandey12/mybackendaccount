const CurrentDate = new Date();

let PrintDate = function () {
    let d = CurrentDate.getDate();
    return d
}

let PrintMonth = function () {
    let m = CurrentDate.getMonth() + 1;
    return m
}

let getBatchInfo = function () {

    let BatchName = "Lithium",
        DayWeek = "W3D3",
        Topic = "the topic for today is Nodejs module system."

    let Final = BatchName + "," + DayWeek + "," + Topic

    return Final
}

module.exports.PrintDate = PrintDate
module.exports.PrintMonth = PrintMonth
module.exports.getBatchInfo = getBatchInfo
