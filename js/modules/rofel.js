export default {
    state: {
        profile: {
            username: "rofelmanchete",
            fullName: "Rofel L. Manchete",
        },

        items: [
            {
                question: "What is a zombie?",
                choices: {
                  A: "A mythical creature",
                  B: "A virus-infected person",
                  C: "A supernatural being",
                },
                correct: "B"
              },
              {
                question: "Where did the concept of zombies originate?",
                choices: {
                  A: "Africa",
                  B: "Europe",
                  C: "The Americas",
                },
                correct: "A"
              },
              {
                question: "What is a common trait of zombies in popular culture?",
                choices: {
                  A: "They can fly",
                  B: "They have superhuman strength",
                  C: "They are slow-moving",
                },
                correct: "C"
              },
              {
                question: "In zombie movies and TV shows, what is the usual cause of a zombie outbreak?",
                choices: {
                  A: "A spell cast by a wizard",
                  B: "A virus or disease",
                  C: "A nuclear disaster",
                },
                correct: "B"
              },
              {
                question: "What is the goal of most characters in zombie stories?",
                choices: {
                  A: "To become a zombie",
                  B: "To escape from zombies",
                  C: "To defeat the zombies",
                },
                correct: "B"
              },
              {
                question: "What is a common way to kill zombies in popular culture?",
                choices: {
                  A: "Starve them",
                  B: "Set them on fire",
                  C: "Shoot them in the head",
                },
                correct: "C"
              },
              {
                question: "What is the 'zombie apocalypse'?",
                choices: {
                  A: "A party for zombies",
                  B: "A parade of zombies",
                  C: "A widespread outbreak of zombies",
                },
                correct: "C"
              },
              {
                question: "How do zombies usually spread their infection in popular culture?",
                choices: {
                  A: "Through the air",
                  B: "Through bites or scratches",
                  C: "Through contact with zombie blood",
                },
                correct: "B"
              },
              {
                question: "What is the purpose of creating a 'safe zone' in zombie stories?",
                choices: {
                  A: "To lure zombies into a trap",
                  B: "To protect non-infected people from zombies",
                  C: "To create a breeding ground for zombies",
                },
                correct: "B"
              },
              {
                question: "What is the typical response of government and military in zombie outbreaks in popular culture?",
                choices: {
                  A: "They quickly find a cure",
                  B: "They evacuate all citizens",
                  C: "They attempt to contain the outbreak",
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