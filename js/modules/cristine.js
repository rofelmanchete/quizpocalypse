export default {
    state: {
        profile: {
            username: "CristineHaber",
            fullName: "Cristine Sayat Haber",
        },

        items: [
            {
                question: " How many kilobytes are there in 1 megabyte?",
                choices: {
                    A: "1000",
                    B: "1024",
                    C: "1048"
                },
                correct: "B"
            },
            {
                question: " Amazon is one of the biggest tech companies in the world. Which product did it originally sell online?",
                choices: {
                    A: "Clothes",
                    B: "Drinks",
                    C: "Books"
                },
                correct: "C"
            },
            {
                question: " What does IT stand for?",
                choices: {
                    A: "International Technology",
                    B: "Information Techology",
                    C: "Internet Tecjnology"
                },
                correct: "B"
            },
            {
                question: " Which of the following is the first high level programming language created in the 1950s?",
                choices: {
                    A: "FORTRAN",
                    B: "C++",
                    C: "COBOL"
                },
                correct: "A"
            },
            {
                question: " Which of the following is not an operating system?",
                choices: {
                    A: "macOS Catalina",
                    B: "Microsoft Office XP",
                    C: "Windows Vista"
                },
                correct: "B"
            },
            {
                question: " “.mp4” extension typically refers to which type of computer file?",
                choices: {
                    A: "An image file",
                    B: "An audio file",
                    C: "A movie file"
                },
                correct: "C"
            },
            {
                question: " Which was the first internet search engine in the world?",
                choices: {
                    A: "Google",
                    B: "Bing",
                    C: "Archie"
                },
                correct: "C"
            },
            {
                question: " Which component is known as the heart of a computer?",
                choices: {
                    A: "RAM",
                    B: "CPU",
                    C: "CHIP"
                },
                correct: "B"
            },
            {
                question: " Opera and Safari are types of what?",
                choices: {
                    A: "Web browser",
                    B: "Anti-Virus software",
                    C: "Operating System"
                },
                correct: "A"
            },
            {
                question: " What is the name of the area in California where many of the world’s largest tech companies are headquartered?",
                choices: {
                    A: "Hi-Tech Valley",
                    B: "Silicon Valley",
                    C: "Disruptive Valley"
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