// add a <div> element with class "pagination"
  // need variable containing total length of student list
// use a for loop to loop through the student list. for every 10 students, create a new
// button for the next page of students

// set up variables
const eachStudent = $(".student-item");
const allStudents = $(".student-list");
const pageNumber = 0;
const studentsPerPage = 10;
var totalPages = Math.ceil(allStudents / 10);

// create function to display list of 10 students

function showPage(pageNumber) {
  // hide all students on the page
    eachStudent.hide();
  // loop through all students in the student list argument
  eachStudent.each(function(index) {
    // if student should be on this page number
      // show the student
      if (index >= studentsPerPage * (pageNumber - 1) && index < studentsPerPage * pageNumber) {
        $(this).show();
      }
  });
}
showPage(6);

function appendPageLinks() {
  // determine how many pages for this student list
    // create a page link section
    // “for” every page
        // add a page link to the page link section
    // remove the old page link section from the site
    // append our new page link section to the site
    // define what happens when you click a link
        // Use the showPage function to display the page for the link clicked
        // mark that link as “active”


}
