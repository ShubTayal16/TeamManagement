PlayerColl= new Mongo.Collection('players');

SportsColl = new Mongo.Collection('sports',{    
    transform: function(doc){
        doc.playerss=PlayerColl.findOne(doc.play_id);
        return doc;
    }
   });

Teams = new Mongo.Collection('teams');