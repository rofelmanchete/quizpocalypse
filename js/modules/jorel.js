export default {
    state: {
        profile: {
            username: "Ayjayyyyy",
            fullName: "Jorel I. Agustin",
        },

        items: [
            {
                question: "Where do we use trechnology?",
                choices: {
                    A: "For Work",
                    B: "For eating",
                    C: "Both A and B"
                },
                correct: "A"
            },

            {
                question: "The system that uses technical means to transmit information",
                choices: {
                    A: "Construction technology",
                    B: "Assistive technology",
                    C: "Communication Technology"
                },
                correct: "C"
            },

            {
                question: "Example Of Communication Technology",
                choices: {
                    A: "Keyboard",
                    B: "Mouse",
                    C: "Headset"
                },
                correct: "C"
            },

            {
                question: "A type of Technology which is used to extend and improve human life.",
                choices: {
                    A: "Printer Machine",
                    B: "Medical Technology",
                    C: "Fax Machine"
                },
                correct: "B"
            },

            {
                question: "Use of technology to create an entertainment experience.",
                choices: {
                    A: "Educational Technology",
                    B: "Business Technology",
                    C: "Entertainment technology"
                },
                correct: "C"
            },

            {
                question: "Example of Entertainment technology",
                choices: {
                    A: "Video Games",
                    B: "Heater",
                    C: "Light"
                },
                correct: "A"
            },

            {
                question: "A type of technology with advance methods and equipment used to build basic and advanced structures.",
                choices: {
                    A: "Communication Technology",
                    B: "Construction Technology",
                    C: "Medical Technology"
                },
                correct: "B"
            },

            {
                question: "Example of Construction Technology",
                choices: {
                    A: "Projector",
                    B: "DVD Player",
                    C: "Humanoid Laborer"
                },
                correct: "A"
            },

            {
                question: "Zombie that Walks",
                choices: {
                    A: "Walker",
                    B: "Whisperer",
                    C: "Runner"
                },
                correct: "A"
            },

            {
                question: "Zombie with High Intelligence",
                choices: {
                    A: "Bitter",
                    B: "Walker",
                    C: "Hybrid"
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