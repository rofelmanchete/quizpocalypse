export default {
    state: {
        profile: {
            username: "Dranlizter",
            fullName: "Meynard L. Peregrino",
        },

        items: [
            {
                question: "Who is the fatheer of Computers?",
                choices: {
                    A: "James Gosling",
                    B: "Charles Babbage",
                    C: "Dennis Ritchie"
                },
                correct: "B"
            },

            {
                question: "Which of the following is the correct abbreviation of COMPUTER?",
                choices: {
                    A: "Commonly Occupied Machines Used in Technical and Educational ResearchCommonly Occupied Machines Used in Technical and Educational Research",
                    B: "Commonly Occupied Machines Used in Technical and Educational Research",
                    C: "Commonly Occupied Machines Used in Technical and Educational Research",
                },
                correct: "C"
            },

            {
                question: "Which of the following is the correct definition of Computer?",
                choices: {
                    A: "Computer is a machine or device that can be programmed to perform arithmetical or logic operation sequences automatically",
                    B: "Computer understands only binary language which is written in the form of 0s & 1s",
                    C: "All of the mentioned"
                },
                correct: "C"
            },

            {
                question: "Which of the following computer language is written in binary codes only?",
                choices: {
                    A: "pascal",
                    B: "machine language",
                    C: "C"
                },
                correct: "B"
            },

            {
                question: "'What is the full form of CPU?",
                choices: {
                    A: "Computer Processing Unit",
                    B: "Computer Principle Unit",
                    C: "Computer Processing Unit"
                },
                correct: "B"
            },

            {
                question: "In which decade was the SPICE simulator introduced?",
                choices: {
                    A: "1950s",
                    B: "1960s",
                    C: "1970s"
                },
                correct: "C"
            },

            {
                question: "Most modern TV's draw power even if turned off. The circuit the power is used in does what function?",
                choices: {
                    A: "Sound",
                    B: "Remote control",
                    C: "Color Balance"
                },
                correct: "B"
            },

            {
                question: "Which is a type of Electrically-Erasable Programmable Read-Only Memory?",
                choices: {
                    A: "Flash",
                    B: "Flange",
                    C: "Fury"
                },
                correct: "A"
            },

            {
                question: "The purpose of choke in tube light is ?",
                choices: {
                    A: "To increase the current",
                    B: "To decrease the voltage momentarily",
                    C: "To increase the voltage momentarily"
                },
                correct: "C"
            },

            {
                question: "'.MPG' extension refers usually to what kind of file?",
                choices: {
                    A: "Animation/movie file",
                    B: "WordPerfect Document file",
                    C: "Image file"
                },
                correct: "A"
            },

           
        ]
    },



    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};