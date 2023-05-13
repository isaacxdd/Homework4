const word = {
    number: "",
    adjective: "",
    pluralNoun: "",
    adverb: "",
    anotherAdjective: ""
  };
  
  function startMadlib() {
    word.number = prompt("Enter a number:");
    word.adjective = prompt("Enter an adjective:");
    word.pluralNoun = prompt("Enter a plural noun:");
    word.adverb = prompt("Enter an adverb:");
    word.anotherAdjective = prompt("Enter another adjective:");
  
    console.log(word); 
  }
  

  function storyMadlib() {
    const story = `Once upon a time a group of ${word.number} General Assembly graduates
  got together and made a startup called ${word.adjective} Technologies.
  Their goal was to create smart ${word.pluralNoun}.
  They approached the challenge ${word.adverb} which ultimately lead them to ${word.anotherAdjective} fame.`;
  
    return story;
  }
  

  startMadlib();
  const madlibStory = storyMadlib();
  alert(`MadLib story: \n\n${madlibStory}`);