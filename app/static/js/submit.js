$(document).ready(function() {
    $(".submission-form1").hide();
    var date = new Date();
    var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 )).toISOString().split("T")[0];
    $("input[name='travel-date']").val(dateString);
    $("input[name='emission-type']").change(function() {
        $(".submission-form1").hide();
        $(".submission-form1.submission-" + this.value).show();
    });    
});