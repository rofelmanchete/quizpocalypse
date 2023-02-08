export default {
    state: {
        profile: {
            username: "wews2021",
            fullName: "Maria Alexa Sharmaine Bermido",
        },

        items: [
            {
                question: "In a 2003 movie entitled 'Warm Bodies', what role is being portrayed by Nicholas Hoult?",
                choices: {
                    A: "Julie",
                    B: "Spongebob",
                    C: "R, the zombie"
                },
                correct: "C"
            },

            {
                question: "In case of a zombie apocalypse, which of the following is the best weapon to use?",
                choices: {
                    A: "Banana",
                    B: "Gun",
                    C: "Tumbler",
                },
                correct: "B"
            }, 

            {
                question: "What is the title of the korean movie wherein a zombie virus breaks out in South Korea and passengers struggle to survive on the train from Seoul to Busan?",
                choices: {
                    A: "Trip Ubusan",
                    B: "Train to Busan",
                    C: "Train to Cavite",
                },
                correct: "B"
            }, 

            {
                question: "Which of the following does not belong in 'Plants Vs Zombies' game?",
                choices: {
                    A: "Sakuragi",
                    B: "Dr. Zombross",
                    C: "Torchwood",
                },
                correct: "A"
            }, 

            {
                question: "Who is the orioginal singer of Zombie by the Cranberries?",
                choices: {
                    A: "Willie Revillame",
                    B: "Zild Benitez",
                    C: "Dolores O'Riordan",
                },
                correct: "C"
            }, 

            {
                question: "Who invented the first computer?",
                choices: {
                    A: "Arvic Babol",
                    B: "Charles Babbage",
                    C: "Maria Alexa Sharmaine Bermido",
                },
                correct: "B"
            }, 

            {
                question: "Which of the following is not part of computer?",
                choices: {
                    A: "keyboard",
                    B: "mouse",
                    C: "spoon",
                },
                correct: "C"
            }, 

            {
                question: "What is the short term for malicious software?",
                choices: {
                    A: "malware",
                    B: "hacker",
                    C: "dejavu",
                },
                correct: "A"
            }, 

            {
                question: "What does the internet prefix 'WWW' stands for?",
                choices: {
                    A: "World Web Wider",
                    B: "Web Widest World",
                    C: "World Wide Web",
                },
                correct: "C"
            }, 

            {
                question: "Who was the first comnputer programmer?",
                choices: {
                    A: "Tammy Faye Sabas",
                    B: "Ada Lovelace",
                    C: "Jeremy Jireh Neo",
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
