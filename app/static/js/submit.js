function getDaysInMonth(month, year) {
    if(month == 2) {
        return year % 4 == 0 && (!(year % 100 == 0) || year % 400 == 0) ? 29 : 28;
    }
    else {
        return (new Array(31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31))[month - 1];
    }
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
        storeJSON('emission-dates', emissionDates);
        location.reload();
    });
    
    $("input[name='electricity-submit']").click(function() {
        var emissionHistory = getStored('emission-history');
        var emissionDates = getStored('emission-dates');
        var emissionID = Object.keys(emissionHistory).length;
        
        var month = parseInt($("option[name='electricity-month']:selected").attr("value"), 10);
        var year = $("input[name='electricity-year']").val();
        var kWhUse = $("input[name='electricity-amount']").val();
        var totalDays = getDaysInMonth(month, year);
        var zeroPadMonth = month.toString().length == 1 ? "0" + month : month;            
        for(var day = 1; day <= totalDays; day++) {
            var zeroPadDay = day.toString().length == 1 ? "0" + day : day;
            var incDate = year + "-" + zeroPadMonth + "-" + zeroPadDay;
            emissionHistory[emissionID] = {
                "date": incDate,
                "type": "electricity",
                "electricity": { "amount": kWhUse / totalDays }
            };
            if(emissionDates[incDate] !== undefined) {
                emissionDates[incDate].push(emissionID);
            }
            else {
                emissionDates[incDate] = [emissionID];
            }
            emissionID++;
        }
        storeJSON('emission-history', emissionHistory);
        storeJSON('emission-dates', emissionDates);
        location.reload();        
    });
});