export default {
    state: {
        profile: {
            username: "aylieeex",
            fullName: "Allyson H. Dioquino",
        },

        items: [
            {
                question: "What zombie movie does Park Solomon belong?",
                choices: {
                    A: "All of us are dead",
                    B: "Happiness",
                    C: "Zombie Tsunami"
                },
                correct: "A"
            },

            {
                question: "Which of the following is the Hardare?",
                choices: {
                    A: "Program",
                    B: "Operating System",
                    C: "Microsoft Office",
                    D: "Monitor"
                },
                correct: "D"
            }, 

            {
                question: "Which is not a function of computer",
                choices: {
                    A: "Input",
                    B: "Output",
                    C: "Highlight",
                    D: "Store"
                },
                correct: "C"
            },

            {
                question: "Which movie was created in year 2016",
                choices: {
                    A: "Train to Busan",
                    B: "All of us are dead",
                    C: "Wrong Turn",
                    D: "Sweet Home"
                },
                correct: "A"
            }, 

            {
                question: "What is the file extension of the Powerpoint presentation? ",
                choices: {
                    A: ".docx",
                    B: ".pptx",
                    C: ".xls",
                    D: ".jpeg"
                },
                correct: "B"
            }, 

            {
                question: "Operating system is the collection of",
                choices: {
                    A: "Input-Output devices",
                    B: "Software routines",
                    C: "Hardware Components",
                    D: "All of the above"
                },
                correct: "B"
            }, 

            {
                question: "Which of the following is not an Operating System",
                choices: {
                    A: "UNIX",
                    B: "PASCAL",
                    C: "CP/M",
                    D: "MS-DOS"
                },
                correct: "B"
            }, 

            {
                question: "The program that computer executes are called",
                choices: {
                    A: "Software",
                    B: "Programming Language",
                    C: "Browsers",
                    D: "Integrated development environment"
                },
                correct: "B"
            }, 

            {
                question: "A _____ computer request web pages from the server",
                choices: {
                    A: "server",
                    B: "Host",
                    C: "Client",
                    D: "Router"
                },
                correct: "C"
            }, 

            {
                question: "ASP is a _____ language that tells the client's browser how to render the page on the coomputer screen",
                choices: {
                    A: "Programming",
                    B: "Markup",
                    C: "Structured query",
                    D: "Data Storage"
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