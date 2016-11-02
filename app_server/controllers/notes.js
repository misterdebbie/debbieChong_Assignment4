//GET 'home' page
module.exports.loginHome = function(req,res){
    res.render('login', {title: 'Welcome to the home page'});
};
//GET 'note' page
module.exports.noteEdit = function (req,res){
    res.render('note', {title: 'edit your notes here'});
};
//GET 'title edit' page
module.exports.titleEdit = function(req,res){
    res.render('title', {title:'edit the title page'});
};