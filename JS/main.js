// select unordered list
//$('.student-list')

// add a <div> element with class "pagination"
const $pagination = $("body").add("div").addClass("pagination");
$("body").append($pagination);

// need variable containing total length of student list
// use a for loop to loop through the student list. for every 10 students, create a new
// button for the next page of students
