Template.TrashBin.helpers({
    Trash(){
        return Tododb.find({"TrashBin":true});

    }

})
Template.TrashBin.events({
    "click .js-delete "(){
        console.log(this._id)
        Tododb.remove({_id:this._id})
    }
})