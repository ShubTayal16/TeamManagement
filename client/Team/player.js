Template.playerPage.events({
    'submit form': function(e){
        e.preventDefault();
        var playerIndividual={
            name : $(e.target).find('[name=name]').val(),
            dob : $(e.target).find('[name=dob]').val(),
            gender : $(e.target).find('[name=gender]').val(),
            height : $(e.target).find('[name=height]').val(),
            weight : $(e.target).find('[name=weight]').val(),
            address : $(e.target).find('[name=address]').val(),
            contactNo : $(e.target).find('[name=contactNo]').val(),
        }
        var player_id=PlayerColl.insert(playerIndividual);
        Session.set('id',player_id);

        Router.go('/sports');
    }
});