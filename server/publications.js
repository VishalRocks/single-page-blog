Meteor.publish('lazyload-posts',function(limit){
	return Posts.find({},{
		limit: limit,
		fields: {
			text: 0
		}
	});
});
