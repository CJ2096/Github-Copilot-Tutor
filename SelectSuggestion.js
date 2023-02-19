function calculateDaysBetweenDates(begin, end) {
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var timeDiff = endDate.getTime() - beginDate.getTime();
    var daysDiff = timeDiff / (1000 * 3600 * 24);
    return daysDiff;
}