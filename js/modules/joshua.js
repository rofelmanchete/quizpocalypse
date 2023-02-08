export default {
    state: {
        profile: {
            username: "joshabinal",
            fullName: "Joshua P. Abinal",
        },

        items: [
            {
                question: "What is cloud computing used for?",
                choices: {
                    A: "Cloud Computing is used for making phone calls",
                    B: "Cloud Computing is used for storing and accessing files",
                    C: "Cloud Computing is used for playing"
                },
                correct: "B"
            },

            {
                question: "What is the most widely used front-end framework for web development?",
                choices: {
                    A: "Vue.js",
                    B: "React",
                    C: "Angular"
                },
                correct: "B"
            },

            {
                question: "What is a network that is designed to allow communication within an organization?",
                choices: {
                    A: "Yahoo",
                    B: "Intranet",
                    C: "Internet"
                },
                correct: "B"
            },

            {
                question: "Which of the following is not an early computer?",
                choices: {
                    A: "UNIVAC",
                    B: "NASA",
                    C: "ENIAC"
                },
                correct: "B"
            },

            {
                question: "If a developer is planning to build a mobile application, which of the following issues is the most important?",
                choices: {
                    A: "Platform",
                    B: "Usability",
                    C: "Security"
                },
                correct: "B"
            },

            {
                question: "Aside from deployment, what are the other parts of the application lifecycle that can be automated?",
                choices: {
                    A: "Coding the application",
                    B: "Both A and C",
                    C: "Delivering failed test reports to the developer's inbox",
                },
                correct: "B"
            },

            {
                question: "What is the most common language used for server-side web development?",
                choices: {
                    A: "JavaScript",
                    B: "PHP",
                    C: "HTML"
                },
                correct: "B"
            },

            {
                question: "What is the purpose of an API in application development?",
                choices: {
                    A: "To store data for the application",
                    B: "To allow different applications to communicate with each other",
                    C: "To provide a user interface for the application"
                },
                correct: "B"
            },

            {
                question: "What is the main goal of a zombie computer in a botnet?",
                choices: {
                    A: "To spread malware to other computers",
                    B: "To perform DDoS attacks",
                    C: "To steal personal data from infected computers"
                },
                correct: "B"
            },

            {
                question: "What is a zombie computer in computer terms?",
                choices: {
                    A: "A computer program that is no longer running but still occupying memory",
                    B: "A computer that has been hacked and is being used to perform malicious tasks",
                    C: "A computer that has become outdated and is no longer usable"
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