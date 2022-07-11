AccountsTemplates.configure({ 
    // confirmPassword:false,//
    
});
AccountsTemplates.addFields([
    {
    _id: 'username',
    required:true,
    type: 'text',
    displayName: "UserName",
   // func: function(value){return value !== 'Full Name';},
   // errStr: 'Only "Full Name" allowed!',
    },
   {
        _id: "gender",
        type: "select",
        displayName: "Gender",
        select: [
            {
                text: "Male",
                value: "male",
            },
            {
                text: "Female",
                value: "female",
            },
        ],
    }

]);