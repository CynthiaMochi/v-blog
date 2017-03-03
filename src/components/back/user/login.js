import api from '../../../api/request.js';
import { mapActions } from 'vuex'

let userApi = api.user

export default {
    name: 'login',
    data() {
        return {
            username: '',
            password: ''
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
                vm.$store.dispatch('UserLogin', {
                    username: vm.username,
                    password: vm.password,
                })
            })
            .catch(err => {
                console.log(err)
                vm.$notify.open({content: '验证失败', type: 'danger'});
            })
        },
        toSignup() {
            // this?
            this.$router.push({
                path: '/signup'
            })
        }
    }
}
