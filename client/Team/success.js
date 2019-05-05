Template.success.helpers({
    // //'playerDetails': function(){
    //     // PlayerColl.aggregate(
    //     // [
    //     //     {
    //     //         $lookup:
    //     //         {
    //     //             from:"SportsColl",
    //     //             localField:"id",
    //     //             foreignField:"play_id",
    //     //             as:"embeddedData"
    //     //         }
    //     //     }
    //     // ]
    //     // )
    //     //return PlayerColl;
        // settings : function(){
        //     return {
        //         collection: PlayerColl,
        //         rowsPerPage: 5,
        //         showFilter: false,
        //         fields: ['name','dob','gender','height','weight','contactNo']
        //     };
        // }
    playerDetails:function(){
        return SportsColl.find().fetch();
    }
});

Template.success.events({
    'click #selectTeam':function(e){
        e.preventDefault();
        Router.go('/TeamRegistration');
    }
});










// Meteor.methods({
//     PlayerColl.aggregate(
//         [
//             {
//                 $lookup:
//                 {
//                     from:"SportsColl",
//                     localField:"id",
//                     foreignField:"play_id",
//                     as:"embeddedData"
//                 }
//             }
//         ]
//         )
//})


