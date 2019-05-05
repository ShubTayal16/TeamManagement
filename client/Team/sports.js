Template.sports.events({
    'click #addGame':function(e,template){
        e.preventDefault();
        var player_id=Session.get('id');
        var game={
                play_id:player_id,
                sportCat: $(".gameCat").val(),
                experience: $("#experience").val(),                
                aboutGame:$("#aboutGame").val(),
                achievement:$("#achievements").val(),
                rating: $('#rating').data('userrating')
        }
        SportsColl.insert(game);
        template.find("form").reset();
    },
    'submit form':function(e){
        e.preventDefault();
        Router.go('/Success');
    }
});