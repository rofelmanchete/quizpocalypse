// modules
import jc from './modules/jc.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...

const store = Vuex.createStore({
    modules: {
        jc,

        // include your module here (e.g. john)
        // ...

    }
});

export default store;
