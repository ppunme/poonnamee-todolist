<template>
  <div class="w-96 mt-8 mx-auto p-8">
    <p class="text-2xl font-bold">Login</p>
    <form @submit="loginHandle" class="mt-3">
      <div class="grid grid-cols-1 gap-6">
        <label class="block text-start">
          <span class="text-gray-700 font-semibold">Username</span>
          <input
            v-model="email"
            class="form-input"
            :class="[
              !validEmail && 'border-red-300 ring ring-red-200 ring-opacity-50',
              !validEmailForm &&
                'border-red-300 ring ring-red-200 ring-opacity-50',
            ]"
          />
          <p v-if="!validEmail" class="text-sm text-red-500 font-semibold">
            * Required field
          </p>
          <p v-if="!validEmailForm" class="text-sm text-red-500 font-semibold">
            * Invalid email address
          </p>
        </label>
        <label class="block text-start">
          <span class="text-gray-700 font-semibold">Password</span>
          <input
            type="password"
            v-model="password"
            class="form-input"
            :class="
              !validPassword &&
              'border-red-300 ring ring-red-200 ring-opacity-50'
            "
          />
          <p v-if="!validPassword" class="text-sm text-red-500 font-semibold">
            * Required field
          </p>
        </label>
      </div>
      <button type="submit" class="w-full btn btn-create mt-5">Login</button>
      <div
        v-html="error"
        class="mt-3 text-red-500 text-start font-semibold"
      ></div>
    </form>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "login-comp",
  props: {
    logIn: Function,
  },
  data() {
    return {
      email: null,
      password: null,
      error: null, // property for storing errors
      validEmail: true,
      validEmailForm: true,
      validPassword: true,
      validCredential: true,
    };
  },
  methods: {
    async loginHandle() {
      try {
        const result = this.validateForm(this.email, this.password);

        if (result === "success") {
          const response = await AuthenticationService.login({
            username: this.email,
            password: this.password,
          });

          if (response.status === 200) {
            if (response.data.token) {
              localStorage.setItem("token", JSON.stringify(response.data));
            }
            this.logIn();
            setTimeout(() => this.$router.push({ name: "todolist" }), 700);
          }
        }
      } catch (error) {
        // saving the response to the data property of this component
        this.error = error.response.data.message;
      }
    },
    validateForm(email, password) {
      //input validation
      if (!email && !password) {
        this.validEmail = false;
        this.validPassword = false;
        return;
      }

      if (!email) {
        this.validEmail = false;
        return;
      }

      if (!/\S+@\S+\.\S+/.test(email)) {
        this.validEmailForm = false;
        return;
      }

      if (!password) {
        this.validPassword = false;
        return;
      }

      return "success";
    },
  },
  watch: {
    email() {
      this.validEmail = true;
      this.validEmailForm = true;
    },
    password() {
      this.validPassword = true;
    },
  },
};
</script>

<style></style>
