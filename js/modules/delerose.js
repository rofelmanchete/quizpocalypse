export default {
    state: {
        profile: {
            username: "rosemortega",
            fullName: "Delerose O. Mortega",
        },

        items: [
            {
                question: "OS computer abbreviation usually means?",
                choices: {
                    A: "Order of Significance",
                    B: "Open Software",
                    C: "Operating System"
                },
                correct: "C"
            },

            {
                question: "The primary input and control device for computer software like word-processing, spreadsheet and datbase management is? ",
                choices: {
                    A: "Mouse",
                    B: "Keyboard",
                    C: "PC",
                    D: "Laptop"
                },
                correct: "B"
            },

            {
                question: "The following are words in information Technology in everyday life EXCEPT;",
                choices: {
                    A: "Computer",
                    B: "Methods",
                    C: "Social Media",
                },
                correct: "B"
            },

            {
                question: "internet consists of thousands of connected computer networks around the world. Which term does NOT refer to Internet?",
                choices: {
                    A: "Net",
                    B: "On-line",
                    C: "Cyberspace",
                    D: "Information Superhighway",
                },
                correct: "D"
            },

            {
                question: "it is a system for sending messages orfies to the accounts of other Computer users",
                choices: {
                    A: "Telegraph",
                    B: "Social networking",
                    C: "fax",
                    D: "Elecronic Mail",
                },
                correct: "D"
            },

            {
                question: "In a Web Application, the client uses a _____________to interact with a web server",
                choices: {
                    A: "Web Browser",
                    B: "Web server",
                    C: "Web Application",
                    D: "Web Sites",
                },
                correct: "D"
            },

            {
                question: "A ___________ makes web sites available to other computers over a network.",
                choices: {
                    A: "Web Browser",
                    B: "Web server",
                    C: "Web Application",
                    D: "Web Sites",
                },
                correct: "B"
            },

            {
                question: "A web application starts when a client sends a/an ___________________to a Server",
                choices: {
                    A: "HTTP request",
                    B: "HTTp Protocol",
                    C: "HTTP",
                    D: "IP",
                },
                correct: "A"
            },

            {
                question: "Every computer looking to access the Internet Would be known as this.",
                choices: {
                    A: "Client",
                    B: "Server",
                    C: "Hub",
                    D: "Desktop",
                },
                correct: "B"
            },

            {
                question: "An application used to search and find information on the internet",
                choices: {
                    A: "Web Browser",
                    B: "LAN",
                    C: "Server",
                    D: "Wifi",
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