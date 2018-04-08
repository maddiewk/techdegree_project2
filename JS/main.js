// add a <div> element with class "pagination"
  // need variable containing total length of student list
// use a for loop to loop through the student list. for every 10 students, create a new
// button for the next page of students

// set up variables
const eachStudent = $(".student-item");
const pageNum = 0;
const studentsPerPage = 10;

// create function to display list of 10 students

function showPage(pageNumber, studentList) {
  // hide all students on the page
    eachStudent.hide();
  // loop through all students in the student list argument
  eachStudent.each(function(index) {
    // if student should be on this page number
      // show the student
      if() {
      }
  });
};

showPage();
