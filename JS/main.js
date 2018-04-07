// select unordered list
//$('.student-list')

// add a <div> element with class "pagination"
  // need variable containing total length of student list
// use a for loop to loop through the student list. for every 10 students, create a new
// button for the next page of students

// create function to display list of 10 students

function showPage(pageNumber, studentList) {
  // const allStudents = $(".student-list").children();
  // hide all students on the page
    $(".student-list").hide();
  // loop through all students in the student list argument
  $(".student-item").each(function( index, element ) {
    // console.log(index + ": " + $(this).text());
    // if student should be on this page number
      // show the student
      if( index < 10 ) {
        $(this).show();
      }
  });
};

showPage();
