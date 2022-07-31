<template>
  <div class="w-80 sm:w-96 mx-auto pt-10">
    <p class="text-center text-2xl font-bold">Login</p>
    <form @submit="loginHandle" class="mt-3">
      <div class="grid grid-cols-1 gap-6">
        <label class="block">
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
          <p v-if="!validEmail" class="text-sm text-red-500 font-semibold pt-1">
            * Required field
          </p>
          <p
            v-if="!validEmailForm"
            class="text-sm text-red-500 font-semibold pt-1"
          >
            * Invalid email address
          </p>
        </label>
        <label class="block">
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
          <p
            v-if="!validPassword"
            class="text-sm text-red-500 font-semibold pt-1"
          >
            * Required field
          </p>
        </label>
      </div>
      <button type="submit" class="w-full h-12 btn btn-create mt-5">
        <div v-if="isLoading">
          <BeatLoader color="#ffffff" />
        </div>
        <div v-if="!isLoading">Login</div>
      </button>
      <div v-if="error">
        <div
          v-html="error"
          class="mt-3 text-sm text-red-700 bg-red-200 rounded-lg p-3"
        ></div>
      </div>
    </form>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import BeatLoader from "vue-spinner/src/BeatLoader.vue";

export default {
  name: "login-comp",
  components: {
    BeatLoader,
  },
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
      isLoading: null,
    };
  },
  methods: {
    async loginHandle() {
      try {
        const result = this.validateForm(this.email, this.password);

        if (result === "success") {
          this.isLoading = true;
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
        this.isLoading = false;
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
