export default {
    state: {
        profile: {
            username: "allen014",
            fullName: "Roy Allen E. Villeno",
        },

        items: [
            {
                question: "Solve the differential equation: x(y – 1) dx + (x + 1) dy = 0. If y = 2 when x = 1.",
                choices: {
                    A: "1.80",
                    B: "1.48",
                    C: "1.55",
                    D: "1.63"
                },
                correct: "C"
            },

            {
                question: "In Marvel's The Avengers What does S.H.I.E.L.D stand for?",
                choices: {
                    A: "Strategic Hero Intervention, Enforcement and Logistics Division",
                    B: "Strategic Homeland Intervention, Enforcement and Logistics Division",
                    C: "Space Human Investigation on Energy, Light and Deities."
                },
                correct: "B"
            },

            {
                question: "What pulls the sea water with its gravitational force?",
                choices: {
                    A: "Sun",
                    B: "Moon",
                    C: "Sun and Moon"
                },
                correct: "B"
            },

            {
                question: "Kung magiging zombie si crush, magpapakagat ka ba?",
                choices: {
                    A: "Yes",
                    B: "No",
                    C: "Yes na yes!!! accckkkkk"
                },
                correct: "C"
            },

            {
                question: "What is the sixth planet in the solar system?",
                choices: {
                    A: "Neptune",
                    B: "Saturn",
                    C: "Uranus"
                },
                correct: "B"
            },

            {
                question: "In Marvel's Doctor Strange, What was Steven Strange’s career before he learned to use magic?",
                choices: {
                    A: "An Accountant",
                    B: "A Surgeon",
                    C: "A Doctor",
                    D: "An Astronaut"
                },
                correct: "B"
            },

            {
                question: "Which of these products is not made by the Apple Corporation?",
                choices: {
                    A: "IMAX",
                    B: "iPhone",
                    C: "iPad"
                },
                correct: "A"
            },

            {
                question: "Which of these is a file format for digital images?",
                choices: {
                    A: "CIA",
                    B: "ICBM",
                    C: "HH",
                    D: "JPG"
                },
                correct: "D"
            },

            {
                question: "What does fiber optic cable resemble, in terms of size?",
                choices: {
                    A: "Pipeline",
                    B: "Bamboo",
                    C: "Human hair"
                },
                correct: "D"
            },

            {
                question: "In the anime 'Naruto' Who were Naruto's main Teachers/Mentors/Trainers?",
                choices: {
                    A: "Guy, Madara, Kisame, Shino, Konan",
                    B: "Kiba, Tsunade, Pain, Obito, Deidara",
                    C: "Ebisu, Jiraiya, Iruka, Kakashi, Fukasaku"
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