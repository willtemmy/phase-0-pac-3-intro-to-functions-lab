function shout(string) {
    return string.toUpperCase();
  }

  function whisper(string) {
    return string.toLowerCase();
  }

  function logShout(string) {
    console.log(string.toUpperCase());
  }

  function logWhisper(string) {
    console.log(string.toLowerCase());
  }

  const dinner = "Let's have dinner together!";

  function sayHiToHeadphonedRoommate(string) {
    if(string === string.toLowerCase()){
        const re = "I can\'t hear you!";
        return re;
    }else if(string === string.toUpperCase()){
        const reply1 = "YES INDEED!";
        return reply1;
    }else if(string === dinner){
        const yeap = "I would love to!";
        return yeap;
    }
  }

  