export function initializeArtyomInstance(inst, currentLocale){
  inst.initialize({
      debug: true,
      lang: currentLocale,
      soundex: true,
  }).then(() => console.log("Artyom has been succesfully initialized"))
    .catch(err => console.error("Artyom couldn't be initialized: ", err));
}

export function initializeArtyomSlowInstance(inst, currentLocale){
  inst.initialize({
      debug: true,
      lang: currentLocale,
      soundex: true,
      speed: 0.25,
      mode: "slow"
  }).then(() => console.log("Slow Artyom has been succesfully initialized"))
    .catch(err => console.error("Slow Artyom couldn't be initialized: ", err));
}

export function startAssistant(currentLocale, jarvisInst, thisComponent) {
  let _this = thisComponent;
  // let currentLocale = this.state.currentLanguage === "russian" ? "ru-RU" : "de-DE";

  console.log("Artyom succesfully started !");

  jarvisInst.initialize({lang: currentLocale, debug: true, continuous: true, soundex: true, listen: true}).then(() => {
    // Display loaded commands in the console
    console.log(jarvisInst.getAvailableCommands());
    // console.log(_this.currentLocale, this.props.history.location, this.state.currentLanguage)
    // Jarvis.say(this.state.currentLanguage === "russian" ? "привет" : "Was geht alta?");
    _this.setState({artyomActive: true});


  }).catch((err) => {
    console.error("Oopsy daisy, this shouldn't happen !", err);
  });

  jarvisInst.redirectRecognizedTextOutput(function(recognized,isFinal){
      if(isFinal){
          console.log("Final recognized text: " + recognized);
          _this.setState({spokenText: recognized})
      }else{
          console.log(recognized);
      }
  });
}
