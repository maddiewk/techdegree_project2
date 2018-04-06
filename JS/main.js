// select unordered list
//$('.student-list')

// add a <div> element with class "pagination"
  const $pagination = $(".page").add("<div>").addClass("pagination");
  $("body").append($pagination);
  // need variable containing total length of student list
// use a for loop to loop through the student list. for every 10 students, create a new
// button for the next page of students

// create function to display list of 10 students

function showPage(page, studentList) {
  // hide all students on the page
    $('.student-list').hide();
  // loop through all students in the student list argument
    $('.student-list').each(function(index){
      console.log(index + ": " + $(this).text() );
    });
    // if student should be on this page number
      // show the student


}
