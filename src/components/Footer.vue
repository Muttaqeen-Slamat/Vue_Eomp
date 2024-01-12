<template>
    <div class="container-fluid footer">
        <div class="row">
            <p class="lead">
                Muttaqeen's Portfolio &copy;
                <span>{{ currYear }}</span>
            </p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'FooterComp',
        data(){
            return{
                currYear: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>

.footer{
    background-color: #E4E2DD;
}

</style>