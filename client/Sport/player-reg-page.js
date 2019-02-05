 //sports=[];
 
 Template.playerRegPage.helpers({
   addSport:function(){
       return Sports.find({isClicked:true});
   }

 });


Template.playerRegPage.events({
   
    'click #addGame': function(eve){
        eve.preventDefault();
        var sportPlayed={
            isClicked:true,
            sports:[
                {
                sportCat: $(".gameCat").val(),
                experience: $("#experience").val(),                
                aboutGame:$("#aboutGame").val(),
                achievement:$("#achievements").val(),
                rating: $('#rating').data('userrating')
            }
            ]
        }
        Sports.insert(sportPlayed); 
        console.log($(eve.target).find('[name=experience]').val());     
        },

    'submit form':function(e){
        e.preventDefault();

        // var sports=[
        //     {
        //         sportCat:$(e.target)
        //     }
        // ]
        var player={
            name : $(e.target).find('[name=name]').val(),
            dob : $(e.target).find('[name=dob]').val(),
            gender : $(e.target).find('[name=gender]').val(),
            height : $(e.target).find('[name=height]').val(),
            weight : $(e.target).find('[name=weight]').val(),
            address : $(e.target).find('[name=address]').val(),
            contactNo : $(e.target).find('[name=contactNo]').val(),
        };
        Players.insert(player);

        
        //     var spor=[
        //         {
                   
        //         playerId:player._id,
        //         sportCat: $(e.target).find('[name=sportCat]').val(),
        //         experience: $(e.target).find('[name=experience]').val(),
        //         aboutGame:$(e.target).find('[name=aboutGame]').val(),
        //         achievement:$(e.target).find('[name=achievement]').val(),
        //         rating: $('#rating').data('userrating')
        //     }
        

        // ];
            //PlayerSports.insert(spor);
        Router.go('/AddSuccess')
    }
});


