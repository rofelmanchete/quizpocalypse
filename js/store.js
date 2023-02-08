// modules
import arvic from './modules/arvic.js';
import edilyn from './modules/edilyn.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...

const store = Vuex.createStore({
    modules: {
        arvic,
        edilyn,

        // include your module here (e.g. john)
        // ...

    }
});

export default store;
