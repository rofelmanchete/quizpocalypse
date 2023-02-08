export default {
    state: {
        profile: {
            username: "Luccharl",
            fullName: "Luc Charl Dato",
        },

        items: [
            {
                question: "How do you turn into a zombie?",
                choices: {
                    A: "Your brain gets eaten by an infected",
                    B: "Get scratched by an infected",
                    C: "Get bitten by an infected"
                },
                correct: "C"
            },
            {
                question: "In the Last of Us video game, Which of the following type of zombie is the fastest?",
                choices: {
                    A: "Runner",
                    B: "Stalker",
                    C: "Bloater"
                },
                correct: "A"
            },
            {
                question: "In the Last of Us video game, Which of the following type of zombie is strong yet very slow and blind?",
                choices: {
                    A: "Stalker",
                    B: "Clicker",
                    C: "Bloater"
                },
                correct: "C"
            },
            {
                question: "In the Last of Us video game, this type of zombie is formed from several infected combining into one",
                choices: {
                    A: "Rat king",
                    B: "Shambler",
                    C: "Stalker"
                },
                correct: "A"
            },
            {
                question: "He is the main antagonist of the game Plants Vs. Zombies",
                choices: {
                    A: "Dr. Zombies",
                    B: "Dr. Zomboss",
                    C: "Prof. Zomboo"
                },
                correct: "B"
            },
            {
                question: "What is the world's fastest computer?",
                choices: {
                    A: "Tohoku",
                    B: "Seirin",
                    C: "Fugaku"
                },
                correct: "C"
            },
            {
                question: "What is the first ever computer virus that emerged?",
                choices: {
                    A: "Zombie",
                    B: "Creeper",
                    C: "Enderman"
                },
                correct: "B"
            },
            {
                question: "How many tons does the first ever computer weight?",
                choices: {
                    A: "27 tons",
                    B: "55 tons",
                    C: "38 tons"
                },
                correct: "A"
            },
            {
                question: "The first ever computer mouse is made up of what?",
                choices: {
                    A: "Metal",
                    B: "Wood",
                    C: "Plastic"
                },
                correct: "B"
            },
            {
                question: "It is believed to be the most deadly worm virus ever developed",
                choices: {
                    A: "IHATEYOU",
                    B: "ILOVEYOU",
                    C: "ITSNOTYOUITSME"
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
