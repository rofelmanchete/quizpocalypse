export default {
    state: {
        profile: {
            username: "jogimarvin",
            fullName: "Jogi Marvin B. Occiano",
        },

        items: [
            {
                question: "Which of these is not an early computer?",
                choices: {
                    A: "ENIAC",
                    B: "UNIVAC",
                    C: "NASA"
                },
                correct: "C"
            
            },

            {
                question: "Who founded Apple Computer?",
                choices: {
                    A: "Stephen Curry",
                    B: "Steve Jobs",
                    C: "Steve Harvey"
                },
                correct: "B"
            
            },

            {
                question: "Which of these is not a peripheral, in computer terms?",
                choices: {
                    A: "Keyboard",
                    B: "Monitor",
                    C: "Motherboard"
                },
                correct: "C"
            
            },

            {
                question: "What does the Internet prefix WWW stand for?",
                choices: {
                    A: "World Wide Web",
                    B: "Wide Width Wickets",
                    C: "Western Washington World"
                },
                correct: "A"
            
            },

            {
                question: "Which of these products is not made by the Apple Corporation?",
                choices: {
                    A: "IMAX",
                    B: "iPhone",
                    C: "iMac"
                },
                correct: "A"
            
            },

            {
                question: "What is the name for a computer pointing device?",
                choices: {
                    A: "A Mouse",
                    B: "Sound Card",
                    C: "Monitor"
                },
                correct: "A"
            
            },

            {
                question: "'OS' computer abbreviation usually means ?",
                choices: {
                    A: "Order of Significance",
                    B: "Operating System",
                    C: "Optical Sensor"
                },
                correct: "B"
            
            },

            {
                question: "Firewall in computer is used for",
                choices: {
                    A: "Authentication",
                    B: "Security",
                    C: "Monitoring"
                },
                correct: "B"
            
            },

            {
                question: " Which of the following is not an operating system",
                choices: {
                    A: "Mac",
                    B: "C++",
                    C: "Linux"
                },
                correct: "B"
            
            },

            {
                question: "Mac Operating System is developed by which company",
                choices: {
                    A: "Samsung",
                    B: "Apple",
                    C: "IBM"
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