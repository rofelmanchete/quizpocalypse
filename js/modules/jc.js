export default {
    state: {
        profile: {
            username: "Carlszenn25",
            fullName: "John Carlo Dacara",
        },

        items: [
            {
                question: "Question 1Who is the father of Computers?",
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
                    A: "Commonly Operated Machines Used in Technical and Environmental Research",
                    B: "Commonly Oriented Machines Used in Technical and Educational Research",
                    C: " Commonly Operated Machines Used in Technical and Educational Research"
                },
                correct: "C"
            },
            {
                question: "Which of the following is the correct definition of Computer?",
                choices: {
                    A: "Computer understands only binary language which is written in the form of 0s & 1s",
                    B: "Computer is a programmable electronic device that stores, retrieves, and processes the data",
                    C: "All of the mentioned"
                },
                correct: "C"
            },
            {
                question: "What is the full form of CPU?",
                choices: {
                    A: "Computer Processing Unit",
                    B: "Computer Principle Unit",
                    C: "Central Processing Unit"
                },
                correct: "C"
            },
            {
                question: "Which of the following language does the computer understand?",
                choices: {
                    A: "Computer understands only C Language",
                    B: "Computer understands only Assembly Language",
                    C: "Computer understands only Binary Language"
                },
                correct: "C"
            },
            {
                question: "Which of the following computer language is written in binary codes only?",
                choices: {
                    A: "pascal",
                    B: "machine language",
                    C: "C#"
                },
                correct: "B"
            },
            {
                question: "Which of the following is the brain of the computer?",
                choices: {
                    A: "Central Processing Unit",
                    B: "Memory",
                    C: "Control unit"
                },
                correct: "A"
            },
            {
                question: "Which of the following is not a characteristic of a computer?",
                choices: {
                    A: "Versatility",
                    B: "Diligence",
                    C: "I.Q."
                },
                correct: "C"
            },
            {
                question: "Which of the following is the smallest unit of data in a computer?",
                choices: {
                    A: "Bit",
                    B: " KB",
                    C: "Byte"
                },
                correct: "A"
            },
            {
                question: "Which of the following unit is responsible for converting the data received from the user into a computer understandable format?",
                choices: {
                    A: "Output Unit",
                    B: "Input Unit",
                    C: "Memory Unit"
                },
                correct: "B"
            },

            
        ]
    },



    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};