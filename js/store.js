// modules
import arvic from './modules/arvic.js';

import rommel from './modules/rommel.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...

const store = Vuex.createStore({
    modules: {
        arvic,
        rommel,

        // include your module here (e.g. john)
        // ...

    }
});

export default store;
