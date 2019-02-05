Template.single.events({
    'submit form':function(e){
        e.preventDefault();
        var credenctial={
            username:$(e.target).find('[name=username]').val()
        } 
        PracticeCollec.insert(credenctial);
    }   
});