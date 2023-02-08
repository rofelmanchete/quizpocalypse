export default {
    state: {
        profile: {
            username: "DlynJornala",
            fullName: "Edilyn Jornala",
        },

        items: [
            {
                question: "Which of this not an early computer?",
                choices: {
                    A: "ENIAC",
                    B: "UNIVAC",
                    C: "NASA"
                },
                correct: "(C) NASA - stand for the National Aeronautics and Space Admiistrator "
            },

            {
                question: "What is the name for a computer pointing device?",
                choices: {
                    A: "Mouse",
                    B: "RAM",
                    C: "Monitor"
                },
                correct: "A"
            },

            {
                question: "Which of these is not a peripheral, in computer terms?",
                choices: {
                    A: "Mouse",
                    B: "Motherboard",
                    C: "Monitor"
                },
                correct: "B"
            },

            {
                question: "Firewall in computer is used for",
                choices: {
                    A: "Security",
                    B: "Data Transmission",
                    C: "Monitoring "
                },
                correct: "A"
            },

            {
                question: "Which one is the first searh engine in internet?",
                choices: {
                    A: "Google",
                    B: "Archie",
                    C: "Altavista"
                },
                correct: "B"
            },

            {
                question: "1024 bit is equal to how many byte?",
                choices: {
                    A: "1 Byte",
                    B: "128 Byte",
                    C: "64 Byte"
                },
                correct: "B"
            },

            {
                question: "Where is the headquater of Microsoft Office located?",
                choices: {
                    A: "Texas",
                    B: "California",
                    C: "Washington"
                },
                correct: "C"
            },

            {
                question: "Which one is the first fully supported 64-bit operating system?",
                choices: {
                    A: "Linux",
                    B: "Max",
                    C: "Mac"
                },
                correct: "A"
            },

            {
                question: "In computer world, Trojan refer to?",
                choices: {
                    A: "Virus",
                    B: "Worm",
                    C: "Malware"
                },
                correct: "C"
            },

            {
                question: "A computer use which type of number system to calculate and store data?",
                choices: {
                    A: "Decimal",
                    B: "Binary",
                    C: "Hexadecimal"
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
