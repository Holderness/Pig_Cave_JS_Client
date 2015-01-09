var DreamList = Backbone.Collection.extend({
	model: Dream,
	url: "http://192.241.243.100:3001/dreams"
});

var StoryList = Backbone.Collection.extend({
	model: Story,
	url: "http://192.241.243.100:3001/stories"
});

var ThoughtList = Backbone.Collection.extend({
	model: Thought,
	url: "http://192.241.243.100:3001/thoughts"
});