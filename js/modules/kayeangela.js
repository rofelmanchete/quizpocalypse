export default {
    state: {
        profile: {
            username: "Bossmadam",
            fullName: "Kaye Angela L. Sabenorio",
        },

        items: [
            {
                question: "Question 1. Which of the following is not operating system?",
                choices: {
                    A: "DOS",
                    B: "Mac",
                    C: "C"
                },
                correct: "C"
            },
            {
                question: "Question 2. Which of the following is not database management software?",
                choices: {
                   A: "COBOL",
                   B: "MySQL",
                   C: "Oracle"
               },
               correct: "A"
           },
           {
            question: "Question 3. Which one is the first search engine internet?",
            choices: {
               A: "Google",
               B: "Archie",
               C: "Altavista"
               },
            correct: "B"
      },
      {
        question: "Question 4. Number of bit used by the IPv6 Address",
        choices: {
            A: "32 bit",
            B: "64 bit",
            C: "128 bit"
   },
        correct: "C"
},
{
    question: "Question 5. Which one is the first web browser invented in 1990? ",
   choices: {
       A: "Internet Explorer",
       B: "Mosaic",
       C: "Nexus"
   },
   correct: "C"
},
{
    question: "Question 6. Which of the following programming language is used to create programs like applets?",
    choices: {
        A: "COBOL",
        B: "Java",
        C: "C Language"
    },
    correct: "B"
},
{
    question: "Question 7. First computer virus is known as",
    choices: {
        A: "Rabbit",
        B: "Elk Cloner",
        C: "Creeper Virus"
    },
    correct: "C"
},
{
    question: "Question 8. Which one programming language is exclusively used for artificial intelligence?",
    choices: {
        A: "Prolog",
        B: "Java",
        C: "J2EE"
    },
    correct: "A"
},
{
    question: "Question 9. Firewall in computer is used for",
    choices: {
        A: "Security",
        B: "Data Transmission",
        C: "Monitoring"
    },
    correct: "A"
},
{
    question: "Question 10. A dual layer Blue-ray Disc store data upto ",
    choices: {
        A: "20GB",
        B: "50GB",
        C: "12GB"
    },
    correct: "B"
},
            /*{
                question: "Question 1",
                choices: {
                    A: "Choice 1",
                    B: "Choice 2",
                    C: "Choice 3",
                    D: "Choice 4"
                },
                correct: "D"
            }, */
        ]
    },



    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};