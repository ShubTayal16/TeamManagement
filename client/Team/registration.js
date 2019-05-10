import { ReactiveVar } from 'meteor/reactive-var';
Template.registration.onCreated(function(){
    this.showPlayers = new ReactiveVar("");
    this.showAll = new ReactiveArray();
});

Template.registration.helpers({
    registerTeam: function(){
            return{
        collection: SportsColl,
        showFilter: false,
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

    showAllPlayers:function(){
        return Template.instance().showAll.get();
    },

    // showPlayers: function(){
    // //     return Teams.find({},{"players":1});
    //       return Template.instance().showPlayers.get();
    // }
});

Template.registration.events({
    'click .reactive-table tbody tr':function(e,template){
        var player=this;
        Teams.update(
            {_id:Session.get('teamId')},
            {$push:{players:player}}
        );
         template.showAll.push(player);    
       //template.showPlayers.set(player.playerss.name);
    },

    'click #showTeam':function(eve){
        Router.go('/ViewAllTeams');
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