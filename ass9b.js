/**
 * Created by USER on 17/05/2017.
 */
// populate table row data in model window
$(document).ready(function () {
    $("table tbody tr  td button").click(function () {
        $("#myModal").modal("show");
        $("#fname").val($(this).closest('tr').children()[0].textContent);
        $("#lname").val($(this).closest('tr').children()[1].textContent);
        $("#email").val($(this).closest('tr').children()[2].textContent);
    });
});