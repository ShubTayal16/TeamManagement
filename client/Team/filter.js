Template.gameFilter.created = function(){
    this.filter=new ReactiveTable.Filter('game-filter',['sportCat']);
};

Template.gameFilter.events({
    'change .sportsFilter':function(eve,registration){
        //eve.preventDefault();
        var selectedSport=$(".gameCat").val();
        registration.filter.set(selectedSport);
    }
});
