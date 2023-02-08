export default {
    state: {
        profile: {
            username: "JessaMaeNaval",
            fullName: "Jessa Mae A. Naval",
        },

        items: [
            {
                question: "Who invented the first computer?",
                choices: {
                    A: "Willard Boyle",
                    B: "Henry Edward Roberts",
                    C: "Charles Babbage"
                },
                correct: "C"
            },

            {
                question: "'OS' computer abbreviation stand for?",
                choices: {
                    A: "Open Software",
                    B: "Optical Sensor",
                    C: "Operating System",
                },
                correct: "C"
            },
            {
                question: "What is GPU?",
                choices: {
                    A: "Graphics Proccessing Unit",
                    B: "Graphical Portable Unit",
                    C: "Grouped Processing Unit",
                },
                correct: "A"
            },
            {
                question: "Which of the following is a search engine?",
                choices: {
                    A: "Bondee",
                    B: "Google",
                    C: "Netscape",
                },
                correct: "B"
            },
            {
                question: "What does the abbreviation 'http' stand for?",
                choices: {
                    A: "High Task Termination Procedure",
                    B: "Hypertext Transfer Protocol",
                    C: "Hypertext Technical Protocol",
                },
                correct: "B"
            },
            {
                question: "Which of the following is not a part of the Internet?",
                choices: {
                    A: "CD-ROM",
                    B: "World Wide Web",
                    C: "HTTP",
                },
                correct: "A"
            },
            {
                question: "What is the World Wide Web?",
                choices: {
                    A: "A computer game.",
                    B: "Another name for the Internet.",
                    C: "The part of the Internet that enables information-sharing via interconnected pages.",
                },
                correct: "C"
            },
            {
                question: "A program that neither replicates or copies itself,but does damage or compromises the security of the computer. Which computer virus it is?",
                choices: {
                    A: "Worm",
                    B: "Trojan",
                    C: "Hoax",
                },
                correct: "B"
            },
            {
                question: "What is URL?",
                choices: {
                    A: "A computer software program.",
                    B: "The address of a document or 'page' on the World Wide Web.",
                    C: "An acronym for Uniform Resource Learning.",
                },
                correct: "B"
            },
            {
                question: "What is the difference between the Internet and an Intranet?",
                choices: {
                    A: "One is public, the other is private",
                    B: "One is safer than the other",
                    C: "None of the above",
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
