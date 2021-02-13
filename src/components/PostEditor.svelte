<script>
    import Button from '../components/Button.svelte';
    import ButtonUploadFile from '../components/ButtonUploadFile.svelte';
    import Editor from 'cl-editor/src/Editor.svelte';
    import Cropper from "svelte-easy-crop";

    //let cropSize = {424, 490};
    let cropSize = {width: 424, height: 490};
    export let masspopup;
    export let urlI;

    let imgf, imgn, cropData;

    let dataMas = {};

	$: dataMas.id = masspopup.editid;
    $: dataMas.field = masspopup.editfield;
    $: dataMas.text = masspopup.edittext;

    function closePopup(){
        masspopup.popup = false;
        if(masspopup.image){
            imgf = masspopup.edittext;
        }
    }

    function saveImage() {
        const {x, y, width, height} = cropData;
        const img = new Image();
        img.src = imgf;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, x, y, width, height, 0, 0, width, height);
            document.body.appendChild(canvas);
            canvas.toBlob(blob => {
                fetch('/savedata?id=' + dataMas.id, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'image/jpeg'
                    },
                    body: blob
                }).then(response => response.json()).then(result => {
                    urlI = result.url;
                    closePopup();
                });
            }, 'image/jpeg');
        };
    }

    function saveData() {
        fetch('/savedata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: dataMas
            })
        })
        .then(response => response.json())
        .then(data => {
            //console.log(data)                
            closePopup();
            location.reload();
        });
    }

    function uploadClick(){
        console.log('1111111'); 
    }
</script>
<div class="glass" class:open={masspopup.popup}>
    <div class="popup">
     <div class="close" on:click="{closePopup}"></div>
     <div class="textline">
         {#if masspopup.popup}
             {#if masspopup.image}
                 <div class="imagefield">
                     <Cropper
                         image={imgf}
                         crop={{ x: 0, y: 0 }}
                         zoom={1}
                         {cropSize}
                         zoomSpeed={0.1}
                         on:cropcomplete={(event) => cropData = event.detail.pixels}
                     />
                 </div>
             {:else}
                 <Editor html={masspopup.edittext} actions={masspopup.type} on:change={(event) => { masspopup.edittext = event.detail; }} />
             {/if}     
         {/if}
     </div>
     <div class="line" class:img={masspopup.image}>
         {#if masspopup.image}
             <ButtonUploadFile title={'Загрузить'} bind:imgf bind:imgn firsturl={masspopup.edittext} />
             <div class="imglink">{window.location.href}{masspopup.edittext}</div> 
         {/if}
         <Button title="Сохранить" on:click={masspopup.image ? saveImage : saveData}/>
     </div>
    </div>
 </div>
<style>
.glass{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    display: none;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}

.glass.open{
    display: flex;
}

.popup{
    position: relative;
    width: calc(100% - 20px);
    max-width: 800px;
    height: auto;
    max-height: calc(100% - 40px);
    overflow-y: auto;
    background-color: #fff;
    border-radius: 3px;
    box-sizing: border-box;
    padding: 50px 20px 20px 20px;
}

.close{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 18px;
    height: 18px;
    cursor: pointer;
    background-image: url(/svg/cancel.svg);
}

.textline{
    float: left;
    width: 100%;
    display: flex;
    justify-content: center;
}

:global(.textline p){
    margin-bottom: 15px;
}

.line{
    float: left;
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.line.img{
    float: left;
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.imglink{
    margin: 0 10px;
}

.imagefield{
    position: relative;
    float: left;
    width: 100%;
    height: 530px;
    overflow: hidden;
}
</style>