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