export default {
    state: {
        profile: {
            username: "Juliusmisola",
            fullName: "Julius Albert C. Misola",
        },

        items: [
            {
                question: "Which of these is not a peripheral, in computer terms?",
                choices: {
                    A: "Mouse",
                    B: "Monitor",
                    C: "Motherboard"
                },
                correct: "C"
            },
            {
                question: "Which of the following is not one of the early “protocols,” or ways to use the Internet?",
                choices: {
                    A: "Blogging",
                    B: "FTP",
                    C: "Telnet"
                },
                correct: "A"
            },
            {
                question: "What is the name for a computer pointing device?",
                choices: {
                    A: " A Mouse",
                    B: "Ram",
                    C: "Monitor"
                },
                correct: "A"
            },
            {
                question: "How many computer languages are in use?",
                choices: {
                    A: "5000",
                    B: "2000",
                    C: "20"
                },
                correct: "B"
            },
            {
                question: "Which of these is not an early computer?",
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
                    A: "Steve Jobs",
                    B: "Stephen Fry",
                    C: "Stephen Hawking"
                },
                correct: "A"
            },
            {
                question: "What does the Internet prefix WWW stand for?",
                choices: {
                    A: "Wide Width Wickets",
                    B: "Who were Naruto's main Teachers/Mentors/Trainers?",
                    C: "Worldwide Weather"
                },
                correct: "B"
            },
            {
                question: "A network designed to allow communication within an organization is called:",
                choices: {
                    A: "an intranet",
                    B: "the Internet",
                    C: "Yahoo"
                },
                correct: "A"
            },
            {
                question: "Which of these is not a kind of computer?",
                choices: {
                    A: "Lenovo",
                    B: "Apple",
                    C: "Lada"
                },
                correct: "C"
            },
            {
                question: "Which of these products is not made by the Apple Corporation?",
                choices: {
                    A: "IMAX",
                    B: "iMac",
                    C: "iPod"
                },
                correct: "A"
            }
        ]
    },
   


    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};