export default {
    state: {
        profile: {
            username: "Aez4km1",
            fullName: "John Carlo Barbiles Cleopas",
        },

        items: [
            {
                question: "1. How many computer languages are in use?",
                choices: {
                    A: "2000",
                    B: "5000",
                    C: "20"
                },
                correct: "A"
            },
            {
                question: "2. Which of these is not an early computer?",
                choices: {
                    A: "ENIAC",
                    B: "UNIVAC",
                    C: "NASA"
                },
                correct: "C"
            },
            {
                question: "3. Who founded Apple Computer?",
                choices: {
                    A: "Stephen Fry",
                    B: "Bill Gates",
                    C: "Steve Jobs",

                },
                correct: "C"
            },
            {
                question: "4. Which of these is not a peripheral, in computer terms?",
                choices: {
                    A: "Keyboard",
                    B: "Monitor",
                    C: "Mouse"
                },
                correct: "B"
            },
            {
                question: "5. Which of the following is not one of the early “protocols,” or ways to use the Internet?",
                choices: {
                    A: "Blogging",
                    B: "Telnet",
                    C: "FTP"
                },
                correct: "A"
            },
            {
                question: "6. What does the Internet prefix WWW stand for?",
                choices: {
                    A: "Wide Width Wickets",
                    B: "World Wide Web",
                    C: "Worldwide Weather"

                },
                correct: "B"
            },
            {
                question: "7. A network designed to allow communication within an organization is called:",
                choices: {
                    A: "the World Wide Web",
                    B: "Yahoo",
                    C: "an intranet"

                },
                correct: "C"
            },
            {
                question: "8. Which of these is not a kind of computer?",
                choices: {
                    A: "Apple",
                    B: "Lenovo",
                    C: "Lada"
                },
                correct: "C"
            },
            {
                question: "9. Which of these products is not made by the Apple Corporation?",
                choices: {
                    A: "IMAX",
                    B: "iPhone",
                    C: "iMac"

                },
                correct: "A"
            },
            {
                question: "10. What is the name for a computer pointing device?",
                choices: {
                    A: "Mouse",
                    B: "Sound Card",
                    C: "Monitor"

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
