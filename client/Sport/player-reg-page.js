 Template.playerRegPage.helpers({
   addSport:function(){
       return Sports.find();
   }

 });


Template.playerRegPage.events({
   
    'click .add': function(){
        Sports.insert({isClicked:true});       
        },

    'submit form':function(e){
        event.preventDefault();

        var sports=[
            {
                sportCat:$(e.target)
            }
        ]
        var player={
            name : $(e.target).find('[name=name]').val(),
            dob : $(e.target).find('[name=dob]').val(),
            gender : $(e.target).find('[name=gender]').val(),
            height : $(e.target).find('[name=height]').val(),
            weight : $(e.target).find('[name=weight]').val(),
            address : $(e.target).find('[name=address]').val(),
            contactNo : $(e.target).find('[name=contactNo]').val(),
        };
        player._id=Players.insert(player);

        for(var i=0;i<Sports.find().count()+1;i++){
            var spor={
                playerId:player._id,
                sportCat: $(e.target).find('[name=sportCat]').val(),
                experience: $(e.target).find('[name=experience]').val(),
                aboutGame:$(e.target).find('[name=aboutGame]').val(),
                achievement:$(e.target).find('[name=achievement]').val(),
                rating: $('#rating').data('userrating')
            };
            spor._id=PlayerSports.insert(spor);
        }

    }
});


