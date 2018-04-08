// set up variables
const eachStudent = $(".student-item");
const allStudents = eachStudent.length;
var pageNumber = 0;
const studentsPerPage = 10;


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

function appendPageLinks(studentList) {
  // determine how many pages for this student list
  var totalPages = Math.ceil(allStudents / 10);
    // create a page link section
    $(".page").append("<div class='pagination'><ul></ul></div>");
    // “for” every page
    for ( pageNumber; pageNumber < totalPages; pageNumber += 1 ) {
      if(pageNumber == 0) {
        $(".pagination").append("<li><a class='active' href='#'>" + (pageNumber + 1) + "</a></li>");
      } else {
        $(".pagination").append("<li><a href='#'>" + (pageNumber + 1) + "</a></li>");
      }
    }
      showPage(1);
    $(".pagination a").click(function() {
      $(".pagination a").removeClass("active");
      $(this).addClass("active");
      showPage(parseInt($(this).text()));
    });

    // define what happens when you click a link
        // Use the showPage function to display the page for the link clicked
        // mark that link as “active”
}
appendPageLinks();
