import store from './store.js';

const app = Vue.createApp({
    data() {
        return {
            app: {
                name: 'QuizPocalypse'
            },
            modules: null,
            active : {
                module  : null,
                profile : null,
                items   : null,
                finished: false,
                score   : 0
            },
            quizModal: {
                id: 'quiz-modal',
                el: null
            },
            query: ''
        }
    },

    computed: {
        allAnswered() {
            let bool = true;
            if(this.active.items) {
                for(let i=0; i<this.active.items.length; i++) {
                    if(this.active.items[i].selected === '') {
                        bool = false;
                        break;
                    }
                }
            }
            return bool;
        },
        searchedModules() {
            if(!this.modules)
                return [];
            const term = this.query.toLowerCase().trim();
            return this.modules.filter(module =>
                module.profile.username.toLowerCase().includes(term) || module.profile.fullName.toLowerCase().includes(term)
            );
        }
    },

    methods: {
        // show or hide quiz modal
        showQuizModal(shown) {
            if(shown)
                this.quizModal.el.show(null);
            else
                this.quizModal.el.hide();
        },

        // show quiz
        showQuiz(module) {
            this.active.module = module;

            // populate active.items
            this.active.items = this.$store.getters[`${module}/items`];
            for(let i=0; i<this.active.items.length; i++) {
                this.active.items[i].selected = '';
            }

            // populate active.profile
            this.active.profile = this.$store.getters[`${module}/profile`];

            // reset values
            this.active.finished = false;
            this.active.score = 0;

            this.showQuizModal(true);
        },

        // hide quiz
        hideQuiz() {
            this.showQuizModal(false);
        },

        // submit quiz
        submitQuiz() {
            if(confirm("Are you ready to submit your answers?")) {
                // count score
                for(let i=0; i<this.active.items.length; i++) {
                    const item = this.active.items[i];
                    if(item.correct === item.selected)
                        this.active.score += 1;
                }
                this.active.finished = true;
            }
        }
    },

    created() {
        // populate modules
        const modules = [];
        for(const key in this.$store._modules.root.state) {
            if(this.$store.getters[`${key}/items`]) {
                modules.push({
                    name: key,
                    profile   : this.$store.getters[`${key}/profile`],
                    totalItems: this.$store.getters[`${key}/items`].length,
                });
            }
        }
        this.modules = modules;
    },

    mounted() {
        // initialize quizModal
        const modal = document.getElementById(this.quizModal.id);
        this.quizModal.el = new bootstrap.Modal(modal);
        modal.addEventListener('hidden.bs.modal',  (event) => {
            this.active.module = null;
        });
    }
});

app.use(store).mount('#app');
