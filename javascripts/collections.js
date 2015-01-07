var DreamList = Backbone.Collection.extend({
	model: Dream,
	url: "http://localhost:3001/dreams"
});

var StoryList = Backbone.Collection.extend({
	model: Story,
	url: "http://localhost:3001/stories"
});

var ThoughtList = Backbone.Collection.extend({
	model: Thought,
	url: "http://localhost:3001/thoughts"
});