// GET /
exports.index = function(req, res){
  res.render('home/index', {title: 'Pete Dunlap'});
};


// GET /digital_droppings
exports.digital_droppings = function(req, res){
  res.render('digital_droppings/digital_droppings', {title: 'Pete Dunlap'});
};
