Template.AddTask.events({
    'keypress #js-AddTask'(e) {
        if(e.keyCode == 13){
            let Task = $("#js-AddTask").val();
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
                 });
                }
                $("#js-AddTask").val(" ");
            }
        },

   
})




   

       