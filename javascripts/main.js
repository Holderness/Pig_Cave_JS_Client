

var story = new StoryList();
var storyPainter;
var thoughts = new ThoughtList();
var dreams = new DreamList();
var rs;


$(function(){

  $(window).load(function() {
    // Animate loader off screen
    $(".loading-signal").fadeOut(1100);
    $(".loading-pig").delay(100).fadeOut(2000);
    $("#page-content").fadeIn(2000);
  });

	storyPainter = new StoryListView({
		el: $('.story'),
		collection: story
	});

  $.when(
    dreams.fetch({reset: true}),
    thoughts.fetch({reset: true}),
    story.fetch({reset: true})
    )
  .done(function(){
    dreamsArray = _.map(dreams.models, function(d){
      return d.attributes.dream;
    });
    thoughtsArray = _.map(thoughts.models, function(t){
      return t.attributes.title;
    });
  })
  .done(function(){
      $.ajax({
        url: "/",
        type: 'get',
        data: {story: rs},
        success: function(data){
          randomStoryArray = stringToArray(rs);
          thoughtt = matchStoryToThought(randomStoryArray, thoughtsArray);
          thoughttArray = stringToArray(thoughtt);
          dreamm = matchStoryToThought(thoughttArray, dreamsArray);
          $(".thought").text(thoughtt);
          $(".dream").text(dreamm);
          console.log("Yup");
        }
      });
    });


  // dreams.fetch({reset: true}).done(function(){
  //   dreamsArray = _.map(dreams.models, function(d){
  //     return d.attributes.dream;
  //   });
  // })
  // .done(function(){
  //   thoughts.fetch({reset: true});
  // })
  // .done(function(){
  //   thoughtsArray = _.map(thoughts.models, function(t){
  //     return t.attributes.title;
  //   });
  // })
  // .done(function(){
  //   story.fetch({reset: true}).done(function(){
  //     $.ajax({
  //       url: "/",
  //       type: 'get',
  //       data: {story: rs},
  //       success: function(data){
  //         randomStoryArray = stringToArray(rs);
  //         thoughtt = matchStoryToThought(randomStoryArray, thoughtsArray);
  //         thoughttArray = stringToArray(thoughtt);
  //         dreamm = matchStoryToThought(thoughttArray, dreamsArray);
  //         $(".thought").text(thoughtt);
  //         $(".dream").text(dreamm);
  //         console.log("Yup");
  //       }
  //     });
  //   });
  // });


    $('body').click(function(){
      story.fetch({reset: true}).done(function(){
        $.ajax({
          url: "/",
          type: 'get',
          data: {story: rs},
          success: function(data){
            randomStoryArray = stringToArray(rs);
            thoughtt = matchStoryToThought(randomStoryArray, thoughtsArray);
            thoughttArray = stringToArray(thoughtt);
            dreamm = matchStoryToThought(thoughttArray, dreamsArray);
            $(".thought").text(thoughtt);
            $(".dream").text(dreamm);
            console.log("clickity-click");
          }
        });
      });
    });




  $(document).scroll(function(){
    if(document.documentElement.clientHeight +
      $(document).scrollTop() >= document.body.offsetHeight ){
        $(document).scrollTop(0);
        story.fetch({reset: true}).done(function(){
        $.ajax({
          url: "/",
          type: 'get',
          data: {story: rs},
          success: function(data){
            // thought = $.text($(data).find('.thought')[0]);
            // $('.thought').text(thought);
            // dream = $.text($(data).find('.dream')[0]);
            // $('.dream').text(dream);
            randomStoryArray = stringToArray(rs);
            thoughtt = matchStoryToThought(randomStoryArray, thoughtsArray);
            thoughttArray = stringToArray(thoughtt);
            dreamm = matchStoryToThought(thoughttArray, dreamsArray);
            $(".thought").text(thoughtt);
            $(".dream").text(dreamm);
            console.log("8P");
          }
        });
      });
    }
  });

  
  var size = [window.width,window.height];
  
  $(window).resize(function(){
    window.resizeTo(size[0],size[1]);
  });




});



