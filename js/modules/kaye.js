export default {
    state: {
        profile: {
            username: "kayeromero05",
            fullName: "Kaye E. Romero",
        },

        items: [
            {
                question: "Question 1: Which of these is not a peripheral, in computer terms?",
                choices: {
                    A: "Motherboard",
                    B: "Mouse",
                    C: "Keyboard"
                },
                correct: "A"
            },

            {
                question: "Question 2: It is a network designed to allow communication within an organization.",
                choices: {
                    A: "An intranet",
                    B: "Yahoo",
                    C: "The internet"
                },
                correct: "A"
            },
            
            {
                question: "Question 3: What is the name for a computer pointing device?",
                choices: {
                    A: "Monitor",
                    B: "Mouse",
                    C: "Keyboard"
                },
                correct: "B"
            },

            {
                question: "Question 4: To which of these devices is the cellular telephone most closely related?",
                choices: {
                    A: "Radio",
                    B: "Telescope",
                    C: "Telegraph"
                },
                correct: "A"
            },

            {
                question: "Question 5: Which of these products is not made by the Apple Corporation?",
                choices: {
                    A: "IPhone",
                    B: "IMac",
                    C: "IMAX"
                },
                correct: "C"
            },

            {
                question: "Question 6: Who founded Apple Computer?",
                choices: {
                    A: "Bill Gates",
                    B: "Stephen Fry",
                    C: "Steve Jobs"
                },
                correct: "C"
            },

            {
                question: "Question 7: What are the reason for android is mainly developed?",
                choices: {
                    A: "Laptops",
                    B: "Mobile Devices",
                    C: "Desktop"
                },
                correct: "B"
            },

            {
                question: "Question 8: APK Stand for__________",
                choices: {
                    A: "Android Phone Kit",
                    B: "Android Package Kit",
                    C: "Android Page Kit"
                },
                correct: "B"
            },

            {
                question: "Question 9: Which Programming Language Is Used For Android Application Development?",
                choices: {
                    A: "Java",
                    B: "Flutter",
                    C: "Both A and B"
                },
                correct: "C"
            },

            {
                question: "Question 10: 'OS' computer abbreviation usually means?",
                choices: {
                    A: "Operating System",
                    B: "Open Software",
                    C: "Optical Sensor"
                },
                correct: "A"
            }
            
        ]
    },



    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};
