// ArtyomCommands.js
export default class ArtyomCommandsManager {

    // The ArtyomCommandsManager class expects as argument in the constructor
    // an already declared instance of Artyom.js
    constructor (ArtyomInstance){
        this._artyom = ArtyomInstance;
    }

    // Execute the loadCommands method to inject the methods to the instance of Artyom
    loadCommands(){
        let Artyom = this._artyom;

        // Here you can load all the commands that you want to Artyom
        return Artyom.addCommands([
            // {
            //     indexes: ["привет", "Hi"],
            //     action: () => {
            //         Artyom.say("привет. Как дела?");
            //     }
            // },
            // {
            //     indexes: [/Как дела/, /Regular expressions supported/],
            //     smart: true,
            //     action: () => {
            //         Artyom.say("всё хорошо!");
            //     }
            // },
            {
              indexes: [/меню/ig, /Menu/ig, /Menü/ig, /drucken/ig, /bitte/ig, /bitte öffnen Sie/ig, /drücken/ig, /Regular expressions supported/],
              smart: true,
              action: () => {
                console.log('here')
                let nav = document.querySelector('.navbar-toggle');
                (nav.onclick() || nav.click() || function() {})();
              }
            },
            {
              indexes: [/немецкий/ig, /deutsch/ig, /Regular expressions supported/],
              smart: true,
              action: () => {
                let nav = document.querySelector('.navbar-toggle'),
                    german = document.querySelector('.navbar-collapse.collapse.in .german');
                if(german) {
                  (german.onclick() || german.click() || function() {})();
                  (nav.onclick() || nav.click() || function() {})();

                }

              }
            },
            {
              indexes: [/русский/ig, /Russisch/ig, /Regular expressions supported/],
              smart: true,
              action: () => {
                let nav = document.querySelector('.navbar-toggle'),
                    russian = document.querySelector('.navbar-collapse.collapse.in .russian');
                if(russian) {
                  (russian.onclick() || russian.click() || function() {})();
                  (nav.onclick() || nav.click() || function() {})();
                }
              }
            }
            // {
            //     indexes: ["Generate reports of * of this year"],
            //     smart: true,
            //     action: (i, month) => {
            //         let year = new Date().getFullYear();
            //
            //         Artyom.say(`Generating reports of ${month} ${year} `);
            //
            //         Artyom.say("Ready ! What were you expecting? write some code you lazy bear !");
            //     }
            // },
        ]);
    }
}