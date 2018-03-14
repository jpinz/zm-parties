import Home from '../components/Home.vue';
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';
import Error404 from '../components/Error404.vue';
import Dashboard from '../components/Dashboard.vue';
import Account from '../components/Account.vue';
import Party from '../components/Party.vue';
// This is where you add all your site routes
// Each route is set as an obect in the array
// For a the most basic route just set
// the path & component to load

export const routes = [{
  path: '',
  name: 'home',
  component: Home
},
  {
    path: '/sign-in',
    name: 'signIn',
    component: SignIn
  },
  {
    path: '/sign-up',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/parties',
    name: 'parties',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/party/:id',
    name: 'party',
    component: Party,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/404',
    name: '404',
    component: Error404
  },
  {
    path: '*',
    redirect: '/404'
  }
]
