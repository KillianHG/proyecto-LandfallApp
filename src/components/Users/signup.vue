<template>
  <div class="form">

    <div class="inner-content">

      <h1>Crea una cuenta</h1>

      <form>
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="25"
          label="Nombre y Apellido"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="nickname"
          :error-messages="nameErrors"
          :counter="25"
          label="Nickname"
          required
          @input="$v.nickname.$touch()"
          @blur="$v.nickname.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field type="password"
                      v-model="password"
                      :error-messages="passwordErrors"
                      label="Contraseña"
                      required
                      @input="$v.password.$touch()"
                      @blur="$v.password.$touch()"
        ></v-text-field>
        <v-layout row>
          <v-flex xs12>
            <v-text-field
              name="confirmPassword"
              label="Confirmar Contraseña"
              id="confirmPassword"
              v-model="confirmPassword"
              type="password"
              :rules="[comparePasswords]"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-checkbox
          v-model="checkbox"
          :error-messages="checkboxErrors"
          label="Do you agree?"
          required
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox>
        <v-btn @click="submit">Submit</v-btn>
        <v-btn @click="clear">Clear</v-btn>
      </form>

    </div>

  </div>
</template>
<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email, minLength } from 'vuelidate/lib/validators'

  export default {
    name: 'signup',
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(25) },
      nickname: { required, maxLength: maxLength(25) },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, minLength: minLength(6) },
      checkbox: {
        checked (val) {
          return val
        }
      }
    },

    data: () => ({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      checkbox: false
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 25 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        if (!this.$v.nickname.$dirty) return errors
        !this.$v.nickname.maxLength && errors.push('Nickname must be at most 25 characters long')
        !this.$v.nickname.required && errors.push('Nickname is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.minLength && errors.push('Must be minimum 6 characters password')
        !this.$v.password.required && errors.push('Password is required')
        return errors
      },
      comparePasswords () {
        return this.password !== this.confirmPassword ? "Password don't match" : true
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.nickname = ''
        this.email = ''
        this.password = ''
        this.confirmPassword = ''
        this.checkbox = false
      }
    }
  }
</script>

<style lang="scss">


  .form{
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/img/mtg-singup.jpg");
    background-position-y: 2%;
    background-position-x: 10%;
    background-size: cover;
    width: 100%;
    height: 700px;

    .inner-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80%;
      background-color: rgba(1, 1, 1, 0.75);
      border-radius: 12px;
      padding: 10px;

      h1 {
        border-bottom: 1px solid white;
        width: 100%;
        text-align: center;
        margin-bottom: 25px;
      }

      form {
        width: 100%;
      }

    }

  }

  @media (min-width: 100px) and (max-width: 1023px) {
    .form{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-image: url("../../assets/img/mtg-singup.jpg");
      background-position-y: 2%;
      background-position-x: 10%;
      background-size: cover;
      width: 100%;
      height: 700px;


      h1 {
        border-bottom: 1px solid white;
        width: 60%;
        text-align: center;
        margin-bottom: 25px;
      }

      form {
        width: 60%;
      }
    }
  }

</style>
