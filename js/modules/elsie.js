export default {
    state: {
        profile: {
            username: "Elsiedancalan",
            fullName: "Elsie Dancalan",
        },

        items: [
            {
                question: "What is thename for a computer pointing device?",
                choices: {
                    A: "Sound Card",
                    B: "A Mouse",
                    C: "Ram"
                },
                correct: "B"
            },
            {
                question: "When was DVD introduced",
                choices: {
                    A: "1770",
                    B: "1990",
                    C: "1995"
                },
                correct: "C"
            },
            {
                question: "Which one is the first search engine in internet?",
                choices: {
                    A: "Google",
                    B: "Archie",
                    C: "Altavista"
                },
                correct: "B"
            },
            {
                question: "Which one is the first web browser invented in 1990?",
                choices: {
                    A: "Internet Explorer",
                    B: "Mosaic",
                    C: "Nexus"
                },
                correct: "C"
            },
            {
                question: "Which of the following programming language is used to create programs like applets?",
                choices: {
                    A: "COBOL",
                    B: "C Language",
                    C: "Java"
                },
                correct: "C"
            },
            {
                question: "Firewall in computer is used for?",
                choices: {
                    A: "Security",
                    B: "data Transmission",
                    C: "Monitoring"
                },
                correct: "A"
            },
            {
                question: "Which of the following is not an Operating System?",
                choices: {
                    A: "DOS",
                    B: "Computer",
                    C: "Mac"
                },
                correct: "B"
            },
            {
                question: "1024 bit is equal to how many byte?",
                choices: {
                    A: "1 Byte",
                    B: "128 Byte",
                    C: "32 Byte"
                },
                correct: "B"
            },
            {
                question: "Version of PHP that introduce the use of superglobal",
                choices: {
                    A: "4.1",
                    B: "3.1",
                    C: "2.1"
                },
                correct: "A"
            },
            {
                question: "A line tghat is not read/executed as part of the program?",
                choices: {
                    A: "Semicolon",
                    B: "Comment",
                    C: "bracket"
                },
                correct: "B"
            },

            /*{
                question: "Question 1",
                choices: {
                    A: "Choice 1",
                    B: "Choice 2",
                    C: "Choice 3",
                    D: "Choice 4"
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
