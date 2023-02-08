export default {
    state: {
        profile: {
            username: "melemmel",
            fullName: "Rommel C. Ramos",
        },

        items: [
            {
                question: "'OS' computer abbreviation usually means ?",
                choices: {
                    A: "Order of Significance",
                    B: "Open Software",
                    C: "Operating System"
                },
                correct: "C"
                
            },
            {
                question: "Development of the Github.com began in",
                choices: {
                    A: "October 19, 2007",
                    B: "October 19, 2005",
                    C: "October 19, 2006"
                },
                correct: "A"
            },
            {
                question: "Who is the developer of Laravel",
                choices: {
                    A: "Taylor Otwell",
                    B: "Taylor Smith",
                    C: "Taylor Gan"
                },
                correct: "A"
            },
            {
                question: "When a password is limited strictly to numeric characters, the secret is often referred to as a PIN. What does that acronym stand for?",
                choices: {
                    A: "Personal Identification Number",
                    B: "Personal Indentication Number",
                    C: "Personal ID Number"
                },
                correct: "A"
            },
            {
                question: "VPN stands for",
                choices: {
                    A: "Virtual Public Network",
                    B: "Virtual Private Network",
                    C: "Virtual Public Acces Network"
                },
                correct: "B"
            },
            {
                question: ".MOV extension refers usually to what kind of file?",
                choices: {
                    A: "Image File",
                    B: "Animation/movie file",
                    C: "Audio File"
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
                    A: "Stephen Fry",
                    B: "Steve Jobs",
                    C: "Billy Gates"
                },
                correct: "B"
            },
            {
                question: "What does the Internet prefix WWW stand for?",
                choices: {
                    A: "World Wide Web",
                    B: "Worldwide Weather",
                    C: "Wide Width Wickets"
                },
                correct: "A"
            },
            {
                question: "Which of these is not kind of computer?",
                choices: {
                    A: "Apple",
                    B: "Lenovo",
                    C: "Lada"
                },
                correct: "C"
            },

        ]
    },



    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};