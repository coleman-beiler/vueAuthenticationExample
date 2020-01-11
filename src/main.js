import Vue from 'vue'
import App from './App'
import router from './router'
import Keycloak from 'keycloak-js'

let initOptions = {}
let keycloak = null;
// Get configuration for keycloak (location of your Vue Config Server)
// Once we've gotten the message, we are good to start up.
fetch('http://localhost:8082/api/vue/v1/config',{
  method: 'GET'
}).then(val => val.json())
.then(data => {
  initOptions = data;
  keycloak = Keycloak(initOptions);
  this.startup();
});

Vue.config.productionTip = false

export function startup() {

  keycloak.init({ onLoad: initOptions.onLoad }).success((auth) => {
    console.log("AUTH: "+auth);
    if(!auth) {
      console.log("not authenticated.");
      window.location.reload();
    } else {
      console.log("we are authenticated.");
    }

    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })

    localStorage.setItem("vue-token", keycloak.token);
    localStorage.setItem("vue-refresh-token", keycloak.refreshToken);

    console.log(keycloak);

    setTimeout(() => {
      this.refreshToken();
    }, 60000)

  }).error(()=> {
    console.log("error has occurred");
  });
}

export function refreshTokenTimeout() {
  console.log("waiting");
  setTimeout(() => {
    this.refreshToken();
  }, 100000);
}

export function refreshToken() {
  keycloak.updateToken().success((refreshed)=>{
    console.log(refreshed)
    if(refreshed) {
      console.log("token refreshed!!");
    } else {
      console.log("no refresh");
    }
    this.refreshTokenTimeout();
  });
}


