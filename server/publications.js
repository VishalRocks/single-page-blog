Meteor.publish('lazyload-posts',function(limit){
	return Posts.find({},{
		limit: limit,
		fields: {
			text: 0
		}
	});
});

Meteor.publish("single-post", function(slug) {
	return Posts.find({slug: slug});
});