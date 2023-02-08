// modules
import arvic from './modules/arvic.js';

import jogi from './modules/jogi.js';
// import your .js file here (e.g. import john from './modules/john.js')
// ...

const store = Vuex.createStore({
    modules: {
        arvic,

        // include your module here (e.g. john)
        // ...
        jogi,

    }
});

export default store;
