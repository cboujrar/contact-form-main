$("document").ready(function(){
    console.log("reaaadyyyyy");
    $(".form").on("submit", function(e){
        e.preventDefault();

        $(".error_text").text("");
        let check = true;
        if ($("#first_name").val() == "") {
          check = false;
          $("#first_name").nextAll(".error_text").text("This field is required");
        }
        if ($("#last_name").val() == "") {
          check = false;
          $("#last_name").nextAll(".error_text").text("This field is required");
        }
        if ($("#email").val() == "") {
          check = false;
          $("#email").nextAll(".error_text").text("This field is required");
        } 
        if ($("#message").text().trim() == "") {
          check = false;
          $("#message").nextAll(".error_text").text("This field is required");
        } 
        if (!$("#general").is(":checked") && !$("#support").is(":checked")) {
            check = false;
            console.log("hhhhhh")
            $("#query").text("Please select a query type.");
          } 
          if(!$("#condition").is(":checked")){
            check = false;
            $("#c").text("To submit this form. please consent to being contacted");
          }
    })
})

