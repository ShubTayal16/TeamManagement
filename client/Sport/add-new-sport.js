Template.addNewSport.helpers({
    val:function(){
        console.log("Session Value at helper"+Session.get('sportCat'));

        return Session.get('sportCat');
       
   }
});

Template.addNewSport.events({
    'change .gameCat'(even){
        Session.set('sportCat',0);
        console.log("Session Value"+Session.get('sportCat'));
        var newVal=$(even.target).val();
        console.log("Value entered"+newVal);
        var oldVal=Session.get('sportCat');
        if(newVal!=oldVal){
           Session.set('sportCat',newVal);
        }
    }
});