// Router.route('/',function(){
//     this.render('single')
// });
Router.configure({
    layoutTemplate:'MainLayout'
});

Router.route('/',function(){
    this.render('playerRegPage');
});

Router.route('/Single',function(){
    this.render('single');
});

Router.route('/AddSuccess',function(){
    this.render('addSuccess');
});