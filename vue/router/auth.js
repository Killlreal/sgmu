import router from './index.js'
import { mapGetters, mapActions } from "vuex";
import { encode, decode } from 'js-base64';

export default {
	data() {
        return {
        };
	},
	created(){
		this.fetchUser()
	},
	methods: {
		...mapActions([
			"REGISTER_USER",
    	]),
		async fetchUser(){
			console.log('try to fetch user');
			let url = '/personapi/user/'+this.$route.params.id
			await fetch(url,{
			  method: 'POST',
			})
			.then(response => response.json())
			.then(user => {
				localStorage.clear()
				localStorage.setItem('userId', user.id)
				this.REGISTER_USER(user)
				if (user.role == 'user'){
					router.push({ name: 'student'})
				} else if (user.role == 'reviewer'){
					router.push({ name: 'admin'})
				}
			});
		}
	}
}