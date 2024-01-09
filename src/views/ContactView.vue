<template>
    <div class="container ">
        <div class="row">
            <h2 class="display-2">Contact</h2>
        </div>
        <div class="row">
            <div class="col">
                <h2>Reach me on:</h2>
                <p>LinkedIn:</p>
                <a href="https://www.linkedin.com/in/muttaqeen-slamat-95209019b/" target="_blank"><i class="bi bi-linkedin"></i></a>
                <p>Email:</p>
                <a href="mailto:muttaqeens@gmail.com" target="_blank"><i class="bi bi-envelope"></i> muttaqeens@gmail.com</a>
                <p>Via Phone:</p>
                <a href="" target="_blank"><i class="bi bi-telephone"></i> 081 286 7370</a>
            </div>
            <div class="col">
                <h2>Submit form</h2>

                <form action="https://formspree.io/f/xpzvzgaj" method="POST">
                    <label>
                        Your email:
                        <input type="email" name="email" placeholder="email@example.com" required>
                    </label>
                    <label>
                         Your message:
                        <textarea name="message" placeholder="Send Your Message" required></textarea>
                    </label>
  <!-- your other form fields go here -->
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>