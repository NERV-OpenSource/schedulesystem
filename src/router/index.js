import Vue from 'vue';
import Router from 'vue-router';
<<<<<<< Updated upstream
import Login from '../components/Login';
import Home from '../components/Home';


Vue.use(Router);


export default new Router({
    routes:[
        {
            path: "/",
            redirect:{
                name: "Login"
            }
=======
import Login from '@/components/Login';
import Home from '@/components/Home'

Vue.use(Router);

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
>>>>>>> Stashed changes
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
<<<<<<< Updated upstream
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
       
=======
        }
>>>>>>> Stashed changes
    ]
})