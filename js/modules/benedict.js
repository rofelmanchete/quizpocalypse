export default {
    state: {
        profile: {
            username: "HANZILOT",
            fullName: "Benedict Reyes",
        },

        items: [
            {
                question: "1. Who founded PHP?",
                choices: {
                    A: "Joshua Abinal",
                    B: "Rommel Ramos",
                    C: "Rasmus Ledorf"
                },
                correct: "C"
            },

            {
                question: "2. PHP is an acronym for?",
                choices: {
                    A: "Philippines",
                    B: "Hypertext Preprocessor",
                    C: "Hypertext Visual"
                },
                correct: "B"
            },

            {
                question: "3. How many computer languages are in use?",
                choices: {
                    A: "2000",
                    B: "3000",
                    C: "100"
                },
                correct: "A"
            },

            {
                question: "4. Which of these is not an early computer?",
                choices: {
                    A: "NASA",
                    B: "UNIVAC",
                    C: "ENIAC"
                },
                correct: "A"
            },

            {
                question: "5. Who founded Apple Computer?",
                choices: {
                    A: "Bill Gates",
                    B: "Stephen Curry",
                    C: "Steve Jobs"
                },
                correct: "C"
            },

            {
                question: "6. Which of these is not a peripheral, in computer terms?",
                choices: {
                    A: "Mouse",
                    B: "Printer",
                    C: "MotherBoard"
                },
                correct: "C"
            },

            {
                question: "7. What does the Internet prefix WWW stand for? ",
                choices: {
                    A: "World Wide Weather",
                    B: "Wide World West",
                    C: "World Wide Web"
                },
                correct: "C"
            },

            {
                question: "8. What does the Internet prefix WWW stand for?",
                choices: {
                    A: "Yahoo",
                    B: "An Intranet",
                    C: "The Internet"
                },
                correct: "B"
            },

            {
                question: "9. Which of these is not a kind of computer?",
                choices: {
                    A: "Apple",
                    B: "Lenovo",
                    C: "Lazada"
                },
                correct: "C"
            },

            {
                question: "10. What is the name for a computer pointing device? ",
                choices: {
                    A: "Sound Card",
                    B: "Ram",
                    C: "A Mouse"
                },
                correct: "C"
            },
            

            /*{
                question: "Question 1",
                choices: {
                    A: "Choice 1",
                    B: "Choice 2",
                    C: "Choice 3",
                },
                correct: "D"
            }, */
        ]
    },



    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};
