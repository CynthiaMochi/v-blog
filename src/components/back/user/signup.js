import api from '../../../api/request.js';
import { mapActions } from 'vuex'
let userApi = api.user

export default {
    name: 'signup',
    data() {
        return {
            username: '',
            password: '',
            passwordCheck: ''
        }
    },
    methods: {
        onSubmit() {
            let vm = this;

            this.$validator.validateAll().then(success => {

                if (!success) {
                    vm.$notify.open({content: '验证失败', type: 'danger'});
                    return;
                }
                vm.$store.dispatch('UserSignup', {
                    username: vm.username,
                    password: vm.password,
                })
            })
            .catch(err => {
                console.log(err)
                vm.$notify.open({content: '验证失败', type: 'danger'});            })
        },

        toLogin() {
            this.$router.push({
                path: '/login'
            })
        }

    },

    mounted() {
        // this.$validator.setLocale('');
    }

}
