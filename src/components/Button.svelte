<script>
    export let title;
</script>

<style>
.btn{
    display: inline-block;
    background-color: #8d2326;
    border: none;
    color: #fff;
    border-radius: 5px;
    padding: 15px 25px;
    text-transform: uppercase;
    font-size: 16px;
    font-family: Carlito-Regular;
    cursor: pointer;
    outline: none;
}

.btn:hover{
    background-color: #af383c;
}
</style>

<button class="btn" on:click>{title}</button>