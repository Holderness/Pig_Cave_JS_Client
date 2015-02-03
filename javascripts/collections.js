var DreamList = Backbone.Collection.extend({
	model: Dream,
	url: "http://pigcaverailsapi.herokuapp.com/dreams"
});

var StoryList = Backbone.Collection.extend({
	model: Story,
	url: "http://pigcaverailsapi.herokuapp.com/stories"
});

var ThoughtList = Backbone.Collection.extend({
	model: Thought,
	url: "http://pigcaverailsapi.herokuapp.com/thoughts"
});