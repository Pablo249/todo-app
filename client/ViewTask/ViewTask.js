Template.ViewTask.helpers({
    allTask(){ //Return a sorted list
        return Tododb.find({}, {
            sort:{
               Task:1
            }
    });
    }
    
});
Template.ViewTask.events({
    'click .js-checkOff'(){
        let myId = this._id;
        let Ticked= Tododb.findOne({_id: myId}).Task;
       Ticked = !Ticked;
        listdb.update({_id: myId}, {$set:{
            "Task": Ticked
        }});
    },
    'click .js-delete'(){
        let myId = this._id;
       Tododb.remove({_id: myId});
    },
    'click #MyCheck'(){
        console.log("You click check");
$("#MyCheck").addClass("check-color");
    }
  
  


     

   
});