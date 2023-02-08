// modules
import arvic from './modules/arvic.js';
import elsie from './modules/elsie.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...

const store = Vuex.createStore({
    modules: {
        arvic,
        elsie,

        // include your module here (e.g. john)
        // ...

    }
});

export default store;
