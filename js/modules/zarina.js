export default {
    state: {
        profile: {
            username: "zrnlagatic",
            fullName: "Zarina Kate Lagatic",
        },

        items: [
            {
                question: "Which of these is not an early computer?",
                choices: {
                    A: "ENIAC",
                    B: "NASA",
                    C: "SAGA"
                },
                correct: "B"
            },

             /*{
                qquestion: "Which of these is not an early computer?",
                choices: {
                    A: "ENIAC",
                    B: "NASA",
                    C: "SAGA"
                },
                correct: "B"
            }, */

            {
                question: "Which of these is not a peripheral, in computer terms?",
                choices: {
                    A: "Keyboard",
                    B: "Motherboard",
                    C: "Monitor"
                },
                correct: "B"
            },

            {
                question: "Which of the following is not one of the early “protocols,” or ways to use the Internet?",
                choices: {
                    A: "Blogging",
                    B: "Telnet",
                    C: "FTP"
                },
                correct: "A"
            },

            {
                question: "A network designed to allow communication within an organization is called:",
                choices: {
                    A: "the internet",
                    B: "Yahoo",
                    C: "an intranet"
                },
                correct: "C"
            },

            {
                question: "Which of these is not a kind of computer?",
                choices: {
                    A: "Lada",
                    B: "Apple",
                    C: "HP"
                },
                correct: "A"
            },

            {
                question: "What is the name for a computer pointing device?",
                choices: {
                    A: "RAM",
                    B: "Monitor",
                    C: "Mouse"
                },
                correct: "C"
            },

            {
                question: "Who invented flexible photographic film?",
                choices: {
                    A: "George Eastman",
                    B: "Louis Daguerre",
                    C: "Leonardo da Vinci"
                },
                correct: "A"
            },

            {
                question: "When did the compact disc first appear on the market?",
                choices: {
                    A: "1989",
                    B: "2000",
                    C: "1982"
                },
                correct: "C"
            },

            {
                question: "Who is the maker of the iPhone?",
                choices: {
                    A: "IBM",
                    B: "Apple",
                    C: "Microsoft"
                },
                correct: "B"
            },
           
            {
                question: "To which of these devices is the cellular telephone most closely related?",
                choices: {
                    A: "Radio",
                    B: "Telescope",
                    C: "Telegraph"
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
