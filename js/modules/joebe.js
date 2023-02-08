export default {
    state: {
        profile: {
            username: "dyobheee",
            fullName: "Joebe V. Castaneda",
        },

        items: [
            {
                question: "How many languages are in use?",
                choices: {
                    A: "2000",
                    B: "5000",
                    C: "1000"
                },
                correct: "A"
            },
            {
                question: "Which of these is an early computer?",
                choices: {
                    A: "ENIAC",
                    B: "UNIVAC",
                    C: "NASA"
                },
                correct: "C"
            },
            {
                question: "Who founded Apple Computer?",
                choices: {
                    A: "Stephen Fry",
                    B: "Steve Jobs",
                    C: "Bili Gates"
                },
                correct: "B"
            },
            {
                question: "Which of these is not a peripheral, in computer terms?",
                choices: {
                    A: "Motherboard",
                    B: "Mouse",
                    C: "Monitor"
                },
                correct: "A"
            },
            {
                question: "Which of the following is not one of the early protocols, or ways to us the internet?",
                choices: {
                    A: "Blogging",
                    B: "FTP",
                    C: "Telnet"
                },
                correct: "A"
            },
            {
                question: "What does the internet prefix WWW stand for?",
                choices: {
                    A: "World Wide Web",
                    B: "World Width Tickets",
                    C: "Worldwide Weather"
                },
                correct: "A"
            },
            {
                question: "Which of these is not a kind of computer?",
                choices: {
                    A: "Lenovo",
                    B: "Toshiba",
                    C: "Lada"
                },
                correct: "D"
            },
            {
                question: "Which of the product is not made by apple corporation?",
                choices: {
                    A: "IMAX",
                    B: "iPhone",
                    C: "iMac"
                },
                correct: "A"
            },
            {
                question: "What is the name of computer pointing device?",
                choices: {
                    A: "A Mousee",
                    B: "Ram",
                    C: "Monitor"
                },
                correct: "A"
            },
            {
                question: "A network designed to allow communication within an organization?",
                choices: {
                    A: "An Internet",
                    B: "Yahoo",
                    C: "the internet"
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