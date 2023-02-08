// modules
import arvic from './modules/arvic.js';

// import your .js file here (e.g. import john from './modules/john.js')
import allyson from './modules/allyson.js';

const store = Vuex.createStore({
    modules: {
        arvic,

        // include your module here (e.g. john)
        allyson,

    }
});

export default store;
