export default {
    state: {
        profile: {
            username: "txxxy25",
            fullName: "Tammy Faye D. Sabas",
        },

        items: [
            {
                question: "Who is the father of Computer?",
                choices: {
                    A: "Charles Babbage",
                    B: "Rommel Ramos",
                    C: "Charles Cabbage"
                },
                correct: "A"
            },

            {
                question: "Which is not a type of zombies? ",
                choices: {
                    A: "Crush Zombies",
                    B: "Parasite Zombies",
                    C: "Supernatural Zombies",
                },
                correct: "A"
            },
            {
                question: "It is a network of interconnected devices that need little or almost no user intervention to produce result, what is it?",
                choices: {
                    A: "Motion UI",
                    B: "Internet of Things (IoT)",
                    C: "Artificial Intelligent"
                },
                correct: "B"
            },

            {
                question: "What is a set of detailed methods, procedures and routines establisheed to carry out or solve a problem?",
                choices: {
                    A: "System Analysis",
                    B: "System",
                    C: "Artificial Intelligent",
                },
                correct: "B"
            },
            {
                question: "What is not a phase of SDLC?",
                choices: {
                    A: "Asking client what does he like aout his business partner",
                    B: "Testing the product",
                    C: "Building or developing a product"
                },
                correct: "A"
            },

            {
                question: "Which of the following is true about zombies? ",
                choices: {
                    A: "Zombie is an African word 'nzambi' meaning 'God'",
                    B: "Zombie eats your brain",
                    C: "Zombies appeared in literature as far back as 1999",
                },
                correct: "A"
            },
            {
                question: "What are the 4 types of programming language?",
                choices: {
                    A: "Procedural, Functional, Object-oriented, Scripting programming languages",
                    B: "Scripting, Procedural, Aritificial, Java",
                    C: "Java, PHP, Python, C#"
                },
                correct: "A"
            },

            {
                question: "In terms of easy accessibility, which operating system is the best?",
                choices: {
                    A: "MacOS",
                    B: "Linux",
                    C: "Windows",
                },
                correct: "C"
            },
            {
                question: "What is a Data Structure?",
                choices: {
                    A: "Items stored are of the same type.",
                    B: "A storage format that defines the way data is stored, organized, and manipulated.",
                    C: "It extracts the data that was stored last first."
                },
                correct: "B"
            },

            {
                question: "What is not true about Binary Trees?",
                choices: {
                    A: "An extension of the linked list structure where each node has at most two children. ",
                    B: "Items stored are of the same type.",
                    C: "A binary tree has two nodes at all times, a left node and a right node.",
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
