// Template.registration.onCreated(function(){
//     var arr=[];
//     this.playersSeleted = new ReactiveVar(arr);
// });

Template.registration.helpers({
    registerTeam: function(){
    //var gameFilter= new ReactiveTable.Filter("sportsFillter",["sportCat"]);

        return{
        collection: SportsColl,
        showFilter: false,
        //filter:gameFilter,
        fields: [
            {key:'playerss.name', label:'Player Name'},
            {key:'playerss.gender', label:'Player Name'},
            {key:'sportCat', label:'Sports'},
            {key:'experience', label:'Experience'},
            {key:'aboutGame', label:'About Game'},
            {key:'achievement', label:'Achievement'}
        ]
        };

    },

    // showPlayers: function(){
    //     return Teams.find({},{"players":1});
    // }
});

Template.registration.events({
    'click .reactive-table tbody tr':function(e){
        var player=this;
        Teams.update(
            {_id:Session.get('teamId')},
            {$push:{players:player}}
        );
    //     arr.push(player.playerss.name);
    //     template.playersSeleted.set(arr);
    //    Session.set('playrDet',player.playerss.name);
    },

    'submit form':function(event){
        event.preventDefault();
        var team=
        {
            teamName:$(event.target).find('[name=teamName]').val(),
            sports:$("#gameCat").val(),
            players:[]
        }

        var team_id=Teams.insert(team);
        Session.set('teamId',team_id);

    },

    'change #gameCat':function(eve){
        eve.preventDefault();
        var selectedSport=$(eve.target).val();
    }
});