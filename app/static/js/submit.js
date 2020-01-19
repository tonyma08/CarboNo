var getStored = function(name) {
    if(localStorage.getItem(name) !== null) {
        return JSON.parse(localStorage.getItem(name));
    }
    else {
        return {};
    }
};

var storeJSON = function(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
};

/**
 * @param {int} The month number, 0 based
 * @param {int} The year, not zero based, required to account for leap years
 * @return {Date[]} List with date objects for each day of the month
 */
function getDaysInMonth(month, year) {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

$(document).ready(function() {
    $(".submission-form1").hide();
    var date = new Date();
    var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 )).toISOString().split("T")[0];
    $("input[name='travel-date']").val(dateString);
    $("input[name='emission-type']").change(function() {
        $(".submission-form1").hide();
        $(".submission-form1.submission-" + this.value).show();
    });
    
    $("input[name='travel-submit']").click(function() {
        var emissionHistory = getStored('emission-history');
        var emissionDates = getStored('emission-dates');
        var emissionID = Object.keys(emissionHistory).length;
        
        emissionHistory[emissionID] = {
            "date": $("input[name='travel-date']").val(),
            "type": "travel",
            "travel": {
                "mode": $("input[name='travel-type']:checked").val(),
                "distance": $("input[name='travel-distance']").val()
            }
        };
        
        if(emissionDates[$("input[name='travel-date']").val()] !== undefined) {
            emissionDates[$("input[name='travel-date']").val()].push(emissionID);
        }
        else {
            emissionDates[$("input[name='travel-date']").val()] = [emissionID];
        }
        storeJSON('emission-history', emissionHistory);
        storeJSOn('emission-dates', emissionDates);
    });
});