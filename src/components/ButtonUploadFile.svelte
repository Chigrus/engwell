<script>
    export let title="Загрузить";
    export let firsturl;
    export let imgf = firsturl;
    export let imgn;
    let  fileinput;

    function wertt(e){
        let image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
            imgf = e.target.result;
            imgn = image.name;
        };
    }
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

#btnUpload{
   display: none;
}
</style>

<button class="btn" on:click={()=>{fileinput.click();}}>{title}</button>
<input id="btnUpload" type="file" accept=".jpg, .jpeg, .png" on:change={wertt} bind:this={fileinput} />