  // set up variables for showPage function
const eachStudent = $(".student-item");
const allStudents = eachStudent.length;
var pageNumber = 0;
const studentsPerPage = 10;

  // create showPage function to display 10 students
function showPage(pageNumber) {
  // first hide all students on the page
    eachStudent.hide();
  // loop through all student items using the each() method and only display 10 at a time
  eachStudent.each(function(index) {
      if (index >= studentsPerPage * (pageNumber - 1) && index < studentsPerPage * pageNumber) {
        $(this).show();
      }
  });
}

  /* create appendPageLinks function to create page links, then  append those page links dynamically
  to the page */
function appendPageLinks() {
  // determine how many pages for this student list
  var totalPages = Math.ceil(allStudents / 10);
  // create a new page link section at the bottom of page
    $(".page").append("<div class='pagination'><ul></ul></div>");
    for ( pageNumber; pageNumber < totalPages; pageNumber += 1 ) {
      if(pageNumber == 0) {
        $(".pagination").append("<li><a class='active' href='#'>" + (pageNumber + 1) + "</a></li>");
      } else {
        $(".pagination").append("<li><a href='#'>" + (pageNumber + 1) + "</a></li>");
      }
    }
  // display first page of 10 students
      showPage(1);
  // when different links are clicked, the click function displays the current link button as "active"
    $(".pagination a").click(function() {
      $(".pagination a").removeClass("active");
      $(this).addClass("active");
      showPage(parseInt($(this).text()));
    });
}
appendPageLinks();
