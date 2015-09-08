// Create a storyWriter function that returns an object with two methods. One method, addWords adds a word to your story and returns the story while the other one, erase, resets the story back to an empty string. Here is an implementation:

// var farmLoveStory = storyWriter();
// farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
// farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'

// var storyOfMyLife = storyWriter();
// storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
// storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
// storyOfMyLife.erase(); // ''

function storyWriter(){
    story="";
    stories= {
        addWords: function(str){
            story = story+" "+str;
            console.log(str);
        },
        tellStory: function(){
            console.log(story);
        },
        erase: function(){
            story="";
            console.log("Deleted");
        }
    }
    return stories;
}

var farmLoveStory = storyWriter();
console.log(farmLoveStory);
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.');
farmLoveStory.addWords('My code fails.');

farmLoveStory.tellStory();
farmLoveStory.erase();
