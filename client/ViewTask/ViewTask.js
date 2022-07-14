Session.set("dateOrder=",1);
Template.ViewTask.helpers({
    allTask(){ //Return a sorted list
        return Tododb.find({"TrashBin": false},
        
        {
            sort:{
            "dueDate":Session.get("dateOrder")
        }
    });
           
    
    },
    sortOrder(){
 if(Session.equals("dateorder",1)){
    return true;
 }
 return false;

    }
    
});
Template.ViewTask.events({
    'click .MyCheck'(){
        let myId = this._id;
        let Ticked= Tododb.findOne({_id: myId}).Done1;
       Ticked = !Ticked;
        Tododb.update({_id: myId}, {$set:{
            "Done1": Ticked

        }
   
    });
    },
    'click .js-delete'() {
        let myId = this._id;
        console.log(this);
       Tododb.update({_id: myId}, {
       $set: {
             "TrashBin": true
             }

      });
    },
   'click .js-sortDate'(){
   if(Session.equals("dateOrder",0)) {
            Session.set("dateOrder",-1);
   }
   else{
    Session.set("dateOrder",1);

   }
   },



    
   


    
//     'click .MyCheck'(){
//         console.log("You click check");
// $("#MyCheck").addClass("check-color");
//     },

    'click .MyCheck'(){
        console.log("You click check", this._id);
        // read current done1 value
        Tododb.update({"_id":this._id}, {
            $set:{
                // Done1: true,
                Done1:!this.Done1
                 
            }
        });
    // if($(".MyCheck").hasClass("check-color")) {
    //     $(".MyCheck").addClass("check-color2");
        // $(".MyCheck").removeClass("check-color");

    }
  

});