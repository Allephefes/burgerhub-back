var CurrentProduct = require('./ProductModel');

exports.get = function(req, res, next){
 
res.json({firstmessage:"hello world"});
};


exports.getall = function(req, res, next){

CurrentProduct.find( {} ).then(function(data){
res.json(data)

},
function(err){
next(err);
}
);
 
};

exports.insert = function(req, res, next){
console.log(req.body);
var title = req.body.title;
var description = req.body.description;
var p1 = {title:title, description:description,created: new Date()};
var newItem = new CurrentProduct(p1);
newItem.save(function(err, item){
if(err){
next(err);
}
res.json({product:item});
});//end of save
};

exports.delete = function(req, res, next){

CurrentProduct.remove({_id:req.body._id}).then(function(){
res.send("deleted " + req.body._id);
}, function(err){
next(err);
}
);

} ;
 

exports.update = function(req, res, next){
CurrentProduct.findOne({_id:req.body._id}).then(function(data){
data.title = req.body.title;
data.description= req.body.description;

data.save(function(err, item){
if(err){
next(err);
}
res.json(item);
})

},function(err){
next(err);
})
};