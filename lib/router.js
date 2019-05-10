Router.configure({
    layoutTemplate:'MainLayout'
});

Router.route('/',function(){
    this.render('playerPage');
});

Router.route('/abc',function(){
    this.render('abc');
});

Router.route('/sports',function(){
    this.render('sports');
});

Router.route('/Success',function(){
    this.render('success');
});

Router.route('/TeamRegistration',function(){
    this.render('registration');
});

Router.route('/ViewAllTeams',function(){
    this.render('allTeams');
});