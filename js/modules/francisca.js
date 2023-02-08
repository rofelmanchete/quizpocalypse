export default {
    state: {
        profile: {
            username: "kesodebola",
            fullName: "Francisca Mae Apolinar",
        },

        items: [
            {
                question: "It is a korean Zombie movie filmed at year 2016",
                choices: {
                    A: "Train to busan",
                    B: "All of us are dead",
                    C: "likey :)"
                },
                correct: "A"
            },
            {
                question: "Which of the following is a syntax that allows you to create components like inside the javascript : <text> Hello, can you be my date in feb 14?</text>",
                choices: {
                    A: "JSX",
                    B: "Component",
                    C: "State"
                },
                correct: "A"
            },
            {
                question: "A new technology that is currently being developed or will be developed within the next five to ten years?",
                choices: {
                    A: "Web Assembly",
                    B: "Emerging technology",
                    C: "Dynamic Web Application"
                },
                correct: "B"
            },
            {
                question: "It is a concept in which you start thinking about the app with a mobile screen and other mobile hardware features like productivity.; ",
                choices: {
                    A: "Emerging Technology",
                    B: "Web Assembly",
                    C: "Mobile First Development"
                },
                correct: "C"
            },
            {
                question: "One of the top web development trends for 2021",
                choices: {
                    A: "Automation testing",
                    B: "Voice Search Optimization",
                    C: "Motion UI"
                },
                correct: "B"
            },
            {
                question: "A network of interconnected devices that need little or almost no user intervention to execute operations and produce useful results ",
                choices: {
                    A: "Automation testing",
                    B: "Voice Search Optimization",
                    C: "Internet of Thing"
                },
                correct: "C"
            },
            {
                question: "which of the following Call of Duty games that feature a Zombies mode",
                choices: {
                    A: "Call of Duty: World at War",
                    B: "Call of Duty: Blitz ",
                    C: "Call of Duty: Cranked"
                },
                correct: "A"
            },
            {
                question: "It enables website to present fascinating and important content to specific people",
                choices: {
                    A: "Artificial Intellegence",
                    B: "Development First",
                    C: "Utilization of Chatbots"
                },
                correct: "A"
            },
            {
                question: "It is a software that automates conversation ",
                choices: {
                    A: "Messenger",
                    B: "Chatbot",
                    C: "ChatGPT"
                },
                correct: "B"
            },
            {
                question: "The most Common trend, they are ideal for freelancers, individuals and product specific websites.",
                choices: {
                    A: "Motion UI",
                    B: "Voice Search Application ",
                    C: "Single Page Application"
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