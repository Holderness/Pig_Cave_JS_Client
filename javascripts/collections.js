var DreamList = Backbone.Collection.extend({
	model: Dream,
	url: "http://104.131.205.122/dreams"
});

var StoryList = Backbone.Collection.extend({
	model: Story,
	url: "http://104.131.205.122/stories"
});

var ThoughtList = Backbone.Collection.extend({
	model: Thought,
	url: "http://104.131.205.122/thoughts"
});