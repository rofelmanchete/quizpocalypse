export default {
    state: {
        profile: {
            username: "IvanCalleja",
            fullName: "Ivan Jefferson O. Calleja",
        },

        items: [
            {
                question: "Which of the following is not a kind of computer?",
                choices: {
                    A: "Lenovo",
                    B: "Lada",
                    C: "Apple"
                },
                correct: "B"
            },

            {
                question: "What is the name for a computer pointing device?",
                choices: {
                    A: "Mouse",
                    B: "Sound Card",
                    C: "Keyboard"
                },
                correct: "A"
            },

            {
                question: "Which of the following is not a database management software",
                choices: {
                    A: "COBOL",
                    B: "MySQL",
                    C: "Oracle"
                },
                correct: "A"
            },

            {
                question: "Firewall in computer is used for",
                choices: {
                    A: "Security",
                    B: "Monitoring",
                    C: "Data Transmission"
                },
                correct: "A"
            },


            {
                question: "_______________ support or completely automate software development tasks.",
                choices: {
                    A: "Programming Lnaguage",
                    B: "System Development Tools",
                    C: "Binary"
                },
                correct: "B"
            },


            {
                question: "Which of these is not a peripheral, in computer terms?",
                choices: {
                    A: "Motherboard",
                    B: "Keyboard",
                    C: "Mouse"
                },
                correct: "A"
            },

            {
                question: " This is the term used when an attacker takes control of your computer without your knowledge. ",
                choices: {
                    A: "Zombie",
                    B: "Malware",
                    C: "Virus"
                },
                correct: "A"
            },

            {
                question: "A network designed to allow communication within an organization is called: ",
                choices: {
                    A: "Yahoo",
                    B: "Intranet",
                    C: "Internet"
                },
                correct: "B"
            },

            {
                question: "The first web browser invented in 1990.",
                choices: {
                    A: "Nexus",
                    B: "Mozilla",
                    C: "Internet Explorer"
                },
                correct: "A"
            },


            {
                question: "Which one programming language is exclusively used for artificial intelligence?",
                choices: {
                    A: "Java",
                    B: "Prolog",
                    C: "C"
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
