//浏览器不识别 es6 的import 语法   需要webpack打包
import Vue from "../node_modules/vue/dist/vue"
import VueRouter from "../node_modules/vue-router/dist/vue-router"
import LoginForm from "./js/login"
import RegisterForm from "./js/regiser"
import "./css/base.css"  //webpack 默认只能打包js文件  如果要导入 css 文件的话需要安装插件

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {path: "/login", component: LoginForm},
    {path: "/register", component: RegisterForm}// -个路由规则
  ]
});
const vm = new Vue({
  el: "#app",
  router: router

});