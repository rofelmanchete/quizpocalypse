export default {
    state: {
        profile: {
            username: "ricjohannson",
            fullName: "Ric Johannson C. Oñate",
        },

        items: [
            {
                question: "1. Primary system of networks connecting both major network hubs and internet users to the internet itself",
                choices: {
                    A: "Internet Backbone",
                    B: "Backbone",
                    C: "Internet"
                },
                correct: "A"
            },

            {
                question: "2. WWW meaning",
                choices: {
                    A: "World World World",
                    B: "Wide Wide Wide",
                    C: "World Wide Web",
                    D: "Web Web Web"
                },
                correct: "C"
            }, 

            {
                question: "3. HTTP meaning",
                choices: {
                    A: "Hyperbole Transfer Protocol",
                    B: "HyperText Transfer Protocol",
                    C: "Hyperbole Trans Protocol",
                    D: "Hyperbole Transfer Payment"
                },
                correct: "B"
            }, 

            {
                question: "4. URL meaning",
                choices: {
                    A: "Uniform Resource Locator",
                    B: "Uniforms Resources Locators",
                    C: "Unified Resource Locator",
                    D: "Uniform Register Locator"
                },
                correct: "A"
            }, 

            {
                question: "5. ISP meaning",
                choices: {
                    A: "Interface Service Provider",
                    B: "Internet Serve Provider",
                    C: "Internet Service Primary",
                    D: "Internet Service Provider"
                },
                correct: "D"
            }, 

            {
                question: "6. Type of IP Address: the one in charge will assign the IP Address",
                choices: {
                    A: "Dynamic",
                    B: "Change",
                    C: "Static",
                    D: "Internet"
                },
                correct: "C"
            }, 

            {
                question: "7. Type of IP Address: automatically given",
                choices: {
                    A: "Change",
                    B: "Static",
                    C: "Internet",
                    D: "Dynamic"
                },
                correct: "D"
            }, 

            {
                question: "8. Method of organizing information that gives the reader control over the order in which information is presented",
                choices: {
                    A: "Hyperbole",
                    B: "Hypertext",
                    C: "Text",
                    D: "Address"
                },
                correct: "B"
            }, 

            {
                question: "9. FTP meaning",
                choices: {
                    A: "File Transfer Protocol",
                    B: "For Transfer Protocol",
                    C: "File Tiles Protocol",
                    D: "File Transfer Prime"
                },
                correct: "A"
            }, 

            {
                question: "10. IP meaning",
                choices: {
                    A: "Internet Protocol",
                    B: "Internet Prototype",
                    C: "Inet Protocol",
                    D: "I'll Protocol"
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
