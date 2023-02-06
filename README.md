## QuizPocalypse
Survive the QuizPocalypse, one question at a time!

### Installation
1. Log in to your GitHub account using a web browser.
2. ***Fork*** this repository.
3. Download and setup [**GitHub Desktop**](https://desktop.github.com/) and sign in with your GitHub account.
4. ***Clone*** your forked repository using **GitHub Desktop**.
5. Open the cloned repository in an IDE such as
   [Visual Studio Code](https://code.visualstudio.com),
   [Sublime Text](https://www.sublimetext.com),
   or [Notepad++](https://notepad-plus-plus.org/downloads).

### Contributing
1. Create a new `.js` file in the [**js/modules**](js) folder, with your first name as the file name (e.g. "john.js").
2. Add your quiz module, following the given format:

    ```javascript
    export default {
        state: {
            profile: {
                username: "your-github-username",
                fullName: "Your Full Name",
            },

            items: [
                {
                    question: "Question 1",
                    choices: {
                        A: "Choice 1",
                        B: "Choice 2",
                        C: "Choice 3"
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
    ```

   You can also look at [arvic.js](js/modules/arvic.js) for reference.


3. Extend the `items` array to hold at least **10 multiple-choice questions** about
   *technology*, *application development*, or *zombies*. 
   
   Each item object should have a `question`, `choices`, and `correct` properties
   as shown below:

   ```javascript
   {
       question: "Question 1",
       choices: {
           A: "Choice 1",
           B: "Choice 2",
           C: "Choice 3"
       },
       correct: "A"
   }
   ```

4. Import your module to the [**store.js**](js/store.js) file.
   
   For example:

   ```javascript
   // modules
   import arvic from './modules/arvic.js';
   
   // import your .js file here (e.g. import john from './modules/john.js')
   import john from './modules/john.js';
   
   const store = Vuex.createStore({
       modules: {
           arvic,
   
           // include your module here (e.g. john)
           john,
       }
   });
   
   export default store;
   ```

### Testing
Open `index.html` in a web browser and test your quiz.


### Submission
1. ***Commit*** and ***Push*** changes to your fork.
2. Make a ***Pull Request*** to the original repository.
