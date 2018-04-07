// select unordered list
//$('.student-list')

// add a <div> element with class "pagination"
  // need variable containing total length of student list
// use a for loop to loop through the student list. for every 10 students, create a new
// button for the next page of students

// create function to display list of 10 students

function showPage(pageNumber, studentList) {
  // const pageNumber;
  // const studentList;
  const totalStudents = $(".student-list");
  const eachStudent = $(".student-item");

  // hide all students on the page
    totalStudents.hide();
  // loop through all students in the student list argument
  totalStudents.each(function(index, eachStudent){
    console.log(index + "!");

  })

  };
    // if student should be on this page number
      // show the student
showPage();
