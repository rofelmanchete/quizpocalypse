// modules
import arvic from './modules/arvic.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...
import kayeangela from './modules/kayeangela.js';
import joebe from './modules/joebe.js';
import john from './modules/john.js';

const store = Vuex.createStore({
    modules: {
        arvic,

        // include your module here (e.g. john)
        // ...
        kayeangela,
        joebe,
        john,
    }
});

export default store;
