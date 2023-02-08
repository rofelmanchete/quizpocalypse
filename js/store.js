// modules
import arvic from './modules/arvic.js';
import peregrino from './modules/peregrino.js';
// import your .js file here (e.g. import john from './modules/john.js')
// ...

const store = Vuex.createStore({
    modules: {
        arvic,

        // include your module here (e.g. john)
        // ...
        peregrino,
    }
});

export default store;
