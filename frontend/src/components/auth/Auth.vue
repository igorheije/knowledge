<template>
  <div class="auth-content">
      <div class="auth-modal">
          <img src="@/assets/logo.png" width="200" alt="Logo">
          <hr>
          <div class="auth-title">{{ showSignup ? 'Cadastro' : 'Login'}}</div>

          <input v-if="showSignup" v-model="user.name" placeholder="Nome" type="text">
          <input v-model="user.email" name="email" placeholder="Email" type="text">
          <input  v-model="user.password" name="password" placeholder="Senha"  type="password">
          <input v-if="showSignup" v-model="user.confirmPassword" placeholder="Confirme a Senha" type="password">

          <button v-if="showSignup" @click="signup">Registrar</button>
          <button v-else @click="signin">Entrar</button>

          <a href @click.prevent="showSignup = !showSignup">
              <span v-if="showSignup">Já tem cadastro? Acesse o Login!</span>
              <span v-else>Não tem cadastro? Registre-se aqui!</span>
          </a>
      </div>
  </div>
</template>

<script>
import { baseApiUrl, showError, userKey} from '@/global'
import axios from 'axios'
export default {
    name: 'Auth',
    data: function() {
        return{
            showSignup: false,
            user: {}
        }
    },
    methods: {
        signin() {
            axios.post(`${baseApiUrl}/signin`, this.user)
                .then(res => {
                this.$store.commit('setUser', res.data)
                localStorage.setItem(userKey, JSON.stringify(res.data))
                this.$router.push({path: '/'})
            })
            .catch(showError)
        },
        signup() {
            axios.post(`${baseApiUrl}/signup`, this.user)
                .then(res => {
                    this.$toasted.global.defaultSuccess()
                    this.user = {}
                    this.showSignup = false 
                })
                .catch(showError)
        }
    }
}
</script>

<style>
    .auth-content{
        height: 100%;
        display: flex;
        justify-content:center;
        align-items: center;
    }
    .auth-modal {
        background-color: white;
        width: 350px;
        padding: 35px;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);

        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .auth-title{
        font-size: 1.2rem;
        font-weight: 100;
        margin-top: 10px;
        margin-bottom: 15px;
    }
    .auth-modal input{
        border: 1px solid #888;
        margin-bottom: 15px;
        width: 100%;
        padding: 2px 8px;
        outline: none;
    }
    .auth-modal button{
        align-self: flex-end;
        background-color: #2460ae;
        color: #ffffff;
        padding: 5px 15px;
    }
    .auth-modal a{
        margin-top: 35px;
    }

    .auth-modal hr{
        border: 0;
        width: 100%;
        height: 1px;
        background-image: linear-gradient(to right, 
            rgba(120, 120, 120,0),
            rgba(120, 120, 120,0.75),
            rgba(120, 120, 120,0)
        )
    }
</style>