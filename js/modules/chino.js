export default {
    state: {
        profile: {
            username: "cheeenowtf",
            fullName: "Chino Barrameda Piñon",
        },

        items: [
            {
                question: "What does “LAN” stand for?",
                choices: {
                    A: "Last American N*gga",
                    B: "Local Area Network",
                    C: "Least Amplified Neanderthal"
                },
                correct: "B"
            },
            {
                question: "What is the specialized electronic circuit that is designed to rapidly manipulate and alter memory to accelerate the creation of images in a frame buffer for the output on a display device called?",
                choices: {
                    A: "Graphics Processing Unit",
                    B: "General Display Frame",
                    C: "Central Processing Unit"
                },
                correct: "A"
            },
            {
                question: "What is the global system of interconnected computer networks that uses TCP/IP to communicate between networks and devices called?",
                choices: {
                    A: "Ethernet",
                    B: "Internet",
                    C: "WiFi"
                },
                correct: "B"
            },
            {
                question: "What is the standard markup language for documents designed to be displayed in a web browser called?",
                choices: {
                    A: "HTML",
                    B: "XML",
                    C: "URL"
                },
                correct: "A"
            },
            {
                question: "What is an error, flaw or fault in a computer program or system, that causes it to produce an incorrect or unexpected result, or to behave in unintended ways called?",
                choices: {
                    A: "Insect",
                    B: "Worm",
                    C: "Bug"
                },
                correct: "C"
            },
            {
                question: "What do you call the physical parts of a computer, such as the monitor, mouse, sound card, and motherboard?",
                choices: {
                    A: "Malware",
                    B: "Software",
                    C: "Hardware"
                },
                correct: "C"
            },
            {
                question: "What does “HTTP” stand for?",
                choices: {
                    A: "Help The Tired People",
                    B: "Hot Trusted Thai Person",
                    C: "Hypertext Transfer Protocol"
                },
                correct: "C"
            },
            {
                question: "What is the process of starting a computer called?",
                choices: {
                    A: "Booking",
                    B: "Busking",
                    C: "Booting"
                },
                correct: "C"
            },
            {
                question: "What is a software application, used for accessing information on the internet, by requesting a web page from a website called?",
                choices: {
                    A: "Bowser",
                    B: "Browser",
                    C: "Brewer"
                },
                correct: "B"
            },
            {
                question: "What does GB stand for?",
                choices: {
                    A: "Gigabyte",
                    B: "Ghettobyte",
                    C: "Gabbabyte"
                },
                correct: "A"
            },
            
        ]
    },



    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};