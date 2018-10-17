import Vue from  'vue';
import VueRouter from 'vue-router';

const routes = [
   {
       path:'/' ,
       redirect:'/index'
   },
   { 
       path: '/index', 
       component: resolve => require(['./page/Index.vue'],resolve)
   },

   { 
       path: '/alert', 
       component: resolve => require(['./page/Alert.vue'],resolve)
   },

   { 
       path: '/rule', 
       component: resolve => require(['./page/Rule.vue'],resolve)
   },
   { 
       path: '/group', 
       component: resolve => require(['./page/Group.vue'],resolve)
   },
   { 
       path: '/machine/install', 
       component: resolve => require(['./page/Install.vue'],resolve)
   },

   { 
       path: '/machine/:tag', 
       component: resolve => require(['./page/Machine.vue'],resolve)
   },
   { 
       path: '/machine/detail/:uuid/:sub', 
       component: resolve => require(['./page/Detail.vue'],resolve)
   },
];

Vue.use(VueRouter);

export default new VueRouter({
    routes // （缩写）相当于 routes: routes
});

