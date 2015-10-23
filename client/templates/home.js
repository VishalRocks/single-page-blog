Template.home.created = function(){
	console.log("Home content created");
};

Template.home.rendered = function(){
	console.log("Home content rendered");
};

Template.home.destroyed = function(){
	console.log("Home content destroyed");
};

Template.home.helpers({
	exampleHelper: function(){
		return "This is exampleHelper";
	},
	postList: function(){
		return Posts.find({});
	}
});

Template.home.events({
	'click button.lazyload': function(e,template){
		var currentLimit = Session.get('lazyloadLimit');
		Session.set('lazyloadLimit',currentLimit+2);
	}
});