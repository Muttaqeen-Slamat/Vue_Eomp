<template>
    <div class="container ">
        <div class="row">
            <h1>Contact</h1>
        </div>
        <div class="row">
            <div class="col">
                <div>
                    <h2 class="text-decoration-underline">Reach me on:</h2>
                </div>
                <div id="ct">LinkedIn:</div>
                <a href="https://www.linkedin.com/in/muttaqeen-slamat-95209019b/" target="_blank"><i class="bi bi-linkedin"></i> Take me there</a>
                <div id="ct">GitHub:</div>
                <a href="https://github.com/Muttaqeen-Slamat" target="_blank"><i class="bi bi-github"></i> Take me there</a>
                <div id="ct">Email:</div>
                <a href="mailto:muttaqeens@gmail.com" target="_blank"><i class="bi bi-envelope"></i> muttaqeens@gmail.com</a>
                <div id="ct">Via Phone:</div>
                <a href="/"><i class="bi bi-telephone"></i> 081 286 7370</a>
            </div>


            <div class="col">
                <h2 class="text-decoration-underline">Submit form</h2>

                <form action="https://formspree.io/f/xpzvzgaj" method="POST">
                    <div>
                        <label>
                            Your Email:
                            <div>
                                <input class="p-3" type="email" name="email" placeholder="email@example.com" required>
                            </div>
                        </label>
                    </div>
                    <div class="mt-3 ">
                        <label>
                             Your Message:
                             <div>
                                 <input class="p-3" name="message" placeholder="Send Your Message" required>
                             </div>
                        </label>
                    </div>
  <!-- your other form fields go here -->
                    <button type="submit" class="my-3">Send</button>
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

input{
    border-radius: 25px;
}

a{
    color: black;
    text-decoration: none;
}

#ct{
    margin-top: 20px;
}

.container{
    margin-bottom: 10.1rem;
}
</style>