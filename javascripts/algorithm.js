	 

   wordsToReject = ['this', 'isn', 'that', 'these', 'the', 'would',
  'wouldn', 'and', 'have', 'having', 'had', 'has', 'haven', 'with',
  'from', 'what', 'where', 'can', 'but', 'get', 'got', 'getting',
  'for', 'then', 'there', 'our', 'all', 'when', 'will', 'ever',
  'every', 'are', 'aren', 'along', 'into', 'just', 'were', 'was',
  'not', 'say', 'about', 'after', 'across', 'above', 'out', 'well',
  'one', 'didn', 'before', 'behind', 'while', 'how', 'few', 'many',
  'much', 'see', 'look', 'like', 'able', 'off', 'should', 'shouldn',
  'could', 'couldn', 'only', 'why', 'said', 'most', 'more', 'his',
  'her', 'him', 'she', 'they', 'them', 'their', 'here', 'there',
  'because', 'who', 'back', 'doing', 'don', 'good', 'around', 'wont',
  'else', 'too', 'now', 'been', 'some', 'become', 'wasn', 'use',
  'did', 'know', 'through', 'though', 'than', 'then', 'its', 'right',
  'left', 'took', 'take', 'does', 'doesn', 'make', 'made', 'within',
  'even', 'anything', 'knew', 'thought', 'own', 'really', 'want',
  'something', 'tell', 'told', 'each', 'came', 'went'];


  var stringToArray = function stringToArray(string){
    var wordArray = string.toLowerCase().split(/\W+/);
    var wordArrayFiltered = _.filter(wordArray, function(word) {
      return (word.length > 2);
    });
    var wordArrayFilteredAgain = _.reject(wordArrayFiltered, function(word){
      return _.find(wordsToReject, function(rejectWord){
        return word === rejectWord;
      });
    });
    return _.uniq(wordArrayFilteredAgain);
  };


  var matchStoryToThought = function matchStoryToThoughts(storyArray, thoughtsArray){
    var thoughtAndWordMatches = [];
    _.each(thoughtsArray, function(thought){
        var counter = 0;
        var thoughtLowerCase = thought.toLowerCase();
        _.each(storyArray, function(word){
           if ((thoughtLowerCase.search(word) > 0) && (word.length > 2)) {
             counter++;
           }
        });
        if (counter > 0){
          thoughtAndWordMatches.push([thought, counter]);
        }
      });
      if (thoughtAndWordMatches.length === 0) {
        failSafe = _.sample(thoughtsArray, 1);
        thoughtAndWordMatches.push(failSafe);
      }
      orderedByWordMatchNumber = _.pairs(thoughtAndWordMatches.sort(function(a,b){
       return b[1]-a[1];
      }));
      return orderedByWordMatchNumber[0][1][0];
    };

// // two different ways to get orderedByWordMatchNumber
// _.pairs(matchStoryToThoughts(sa, ta)).sort(function(a,b){ return b[1]-a[1]})
// _.sortBy(_.pairs(matchStoryToThoughts(sa, ta)), function(pair){ return pair[1] }).reverse()


var createWordArray = function createWordArray(storyArray, thoughtArray){
  return _.uniq(storyArray.concat(thoughtArray));
};

