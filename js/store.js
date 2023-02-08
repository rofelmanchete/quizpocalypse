// modules
import arvic from './modules/arvic.js';
import kayeangela from './modules/kayeangela.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...

const store = Vuex.createStore({
    modules: {
        arvic,
        kayeangela,
        // include your module here (e.g. john)
        // ...

    }
});

export default store;
