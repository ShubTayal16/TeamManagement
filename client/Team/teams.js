Template.allTeams.helpers({
    teams:function(){
    return Teams.find().fetch();
}
});