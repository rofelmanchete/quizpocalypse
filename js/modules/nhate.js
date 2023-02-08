export default {
    state: {
        profile: {
            username: "nhatearelante",
            fullName: "Nhate Ravina Arelante",
        },

        items: [
            {
                question: "Which of the following is the next step of Planning stage in SDLC?",
                choices: {
                    A: "Design Stage",
                    B: "Testing Stage",
                    C: "Analysis Stage"
                },
                correct: "C"
            },

            {
                question: "Booting a computer means",
                choices: {
                    A: "logging in",
                    B: "turning the computer on",
                    C: "loading the resident part of the operating system into memory"
                },
                correct: "C"
            },

            {
                question: "Something which has easily undestood instructions is said to be",
                choices: {
                    A: "information",
                    B: "user friendly",
                    C: "icon"
                },
                correct: "B"
            },

            {
                question: "______ operator is used to allocate space in the dynamic memory for storage of data",
                choices: {
                    A: "&",
                    B: "new",
                    C: "dot"
                },
                correct: "B"
            },

            {
                question: "This design pattern conceals the system's complexities and provides a client interface through which the client can access the system",
                choices: {
                    A: "Factory",
                    B: "Singelton",
                    C: "Facade"
                },
                correct: "C"
            },

            {
                question: "A web injection attack that injects malicious script into otherwise harmless websites",
                choices: {
                    A: "XSS",
                    B: "CSRF",
                    C: "SQL Injection"
                },
                correct: "A"
            },

            {
                question: "How many OSI layers are there",
                choices: {
                    A: "7",
                    B: "Seven",
                    C: "VII"
                },
                correct: "A"
            },

            {
                question: "What is the roman numeral for 1900?",
                choices: {
                    A: "CCM",
                    B: "MCM",
                    C: "IXX"
                },
                correct: "B"
            },

            {
                question: "What is the number for MDCC?",
                choices: {
                    A: "1600",
                    B: "1070",
                    C: "1700"
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