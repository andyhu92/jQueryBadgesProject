$(function() {

  // your code will go here
  $.ajax({
    url: "https://www.codeschool.com/users/rush2345.json",
    dataType: "jsonp",
    success: function(response){
      var courses = response.courses.completed;
      courses.forEach(function(course) {
         var div = "<div class='course'>" + 
         "<h3>" + course.title + "</h3>" +
         "<img src='" + course.badge + "'/>" + 
         "<a class='btn btn-primary' target='_blank' href='" + course.url + "'>See Course</a>" + 
         "</div>";
         
         $("#badges").append(div);
      });

    }
  })

});
