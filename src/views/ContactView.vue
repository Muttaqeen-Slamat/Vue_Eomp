<template>
  <div class="container">
    <div class="row mt-3">
      <h1>Contact</h1>
    </div>
    <div class="row">
      <div class="col mt-5">
        <div>
          <h2 class="text-decoration-underline">Reach me on:</h2>
        </div>
        <div id="ct">LinkedIn:</div>
        <a
          href="https://www.linkedin.com/in/muttaqeen-slamat-95209019b/"
          target="_blank"><i class="bi bi-linkedin"></i> Take me there</a>
        <div id="ct">GitHub:</div>
        <a href="https://github.com/Muttaqeen-Slamat" target="_blank"><i class="bi bi-github"></i> Take me there</a>
        <div id="ct">Email:</div>
        <a href="mailto:muttaqeens@gmail.com" target="_blank"><i class="bi bi-envelope"></i> muttaqeens@gmail.com</a>
        <div id="ct">Via Phone:</div>
        <p href="/"><i class="bi bi-telephone"></i> 081 286 7370</p>
        <div id="ct">Location:</div>
        <p href="/"><i class="bi bi-geo-alt"></i>Cape Town, Athlone</p>
      </div>

      <div class="col mt-5">
        <h2 class="text-decoration-underline mb-3">Submit form</h2>

        <form
          @submit.prevent="submitForm"
          action="https://formspree.io/f/xpzvzgaj"
          method="POST"
          ref="form">
          <div>
            <label>
              Your Email:
              <div>
                <input
                  v-model="email"
                  class="p-3"
                  type="email"
                  name="email"
                  placeholder="email@example.com"/>
              </div>
            </label>
          </div>
          <div class="mt-3">
            <label>
              Your Message:
              <div>
                <input
                  v-model="message"
                  class="p-3"
                  name="message"
                  placeholder="Send Your Message"/>
              </div>
            </label>
          </div>
          <button type="submit" class="my-3">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      message: "",
    };
  },
  methods: {
    // my custom validation message function
    submitForm() {
      if (!this.email.trim() || !this.message.trim()) {
        alert(
          "It seems you have not filled in the required text areas to send a message. Please enter your email and your message for it to be valid. Thank you."
        );
        return;
      }
      this.$refs.form.submit();
    },
  },
};
</script>

<style scoped>
input {
  border-radius: 25px;
}

a {
  color: black;
  text-decoration: none;
}

#ct {
  margin-top: 20px;
}

.container {
  margin-bottom: 10.1rem;
  height: 70vh;
}
</style>
