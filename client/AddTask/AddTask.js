import date from 'date-and-time';
Template.AddTask.events({
    'keypress #js-AddTask'(e) {
        if(e.keyCode == 13){
            let Task = $("#js-AddTask").val();
            let dueDate=$("#dueDate").val();
           if(!dueDate){
              dueDate=  new Date();
              dueDate=date.addDays(dueDate,1)
              $("#dueDate").val(date.format(dueDate, 'YYYY/MM/DD'))
           }
           else{
             dueDate=date.parse(dueDate, 'YYYY-MM-DD');
           }
           
           // console.log("Days remaining:", Math.round(date.subtract(new Date(),dueDate).toDays()));
            if (Task == ""){
                console.log("It cannot be empty!");
                $("#js-AddTask").addClass("errorBox");
                alert("Cannot be empty");
            }
            else {
                        console.log("You entered: ",Task);
                       $("#js-addItem").removeClass("errorBox");  
                       Tododb.insert({
                        "Task": Task,
                        "Done1":false,
                        "TrashBin":false,
                        "dueDate":dueDate,
                        "private": $(".fa-xmark").hasClass("d-none")
                 });
                }
                $("#js-AddTask").val(" ");
            }
        },

        'click #js-AddTask1'(e) {
           console.log("Addd")
               let Task = $("#js-AddTask").val();
               let dueDate=$("#dueDate").val();
               if(!dueDate){
                  dueDate=  new Date();
                  dueDate=date.addDays(dueDate,1)
                  $("#dueDate").val(date.format(dueDate, 'YYYY/MM/DD'))
               }
               else{
                 dueDate=date.parse(dueDate, 'YYYY-MM-DD');
               }
               
               console.log("Days remaining:", Math.round(date.subtract(dueDate, new Date()).toDays()));
                if (Task == ""){
                    console.log("It cannot be empty!");
                    $("#js-AddTask").addClass("errorBox");
                    alert("Cannot be empty");
                }
                else {
                            console.log("You entered: ",Task);
                           $("#js-addItem").removeClass("errorBox");  
                           Tododb.insert({
                            "Task": Task,
                            "Done1":false,
                            "TrashBin":false,
                            "dueDate":dueDate,
                            "private": $(".fa-xmark").hasClass("d-none")
                     });
                    }
                    $("#js-AddTask").val(" ");
                
            },
        
        
      
   'click .privateTask'() {
       console.log("private icon");
        if($(".fa-xmark").hasClass("d-none")) {
        $(".fa-check").addClass("d-none")
        $(".fa-xmark").removeClass("d-none")
            console.log("show x");
        }
        else {
            $(".fa-check").removeClass("d-none")
            $(".fa-xmark").addClass("d-none")
            console.log("show check");
        }
        

                        }



})


   

       