<script>
    export let about;
    import { isAdmin } from '../store.js';
    import Button from '../components/Button.svelte';
    import BtnEdit from '../components/BtnEdit.svelte';
</script>

<div class="content">
    {#each about as aboutline}
        <div class="photo edit">
            <img src={aboutline.image} alt="Марина Науфиловна" />
            {#if $isAdmin}<BtnEdit on:getDat datablock={aboutline.image} idline={aboutline.id} field={'image'} timage={true} />{/if}
        </div>
        <div class="about">
                <div class="subtitle edit">
                    {@html aboutline.subtitle}
                    {#if $isAdmin}<BtnEdit on:getDat datablock={aboutline.subtitle} idline={aboutline.id} field={'subtitle'} tedit={'light'} />{/if}
                </div>
                <div class="title edit">
                    {@html aboutline.title}
                    {#if $isAdmin}<BtnEdit on:getDat datablock={aboutline.title} idline={aboutline.id} field={'title'} tedit={'light'} />{/if}
                </div>
                <div class="text edit">
                    {@html aboutline.text}
                    {#if $isAdmin}<BtnEdit on:getDat datablock={aboutline.text} idline={aboutline.id} field={'text'} tedit={'full'} />{/if}
                </div>
                <div class="info edit">
                    {@html aboutline.customfield}
                    {#if $isAdmin}<BtnEdit on:getDat datablock={aboutline.customfield} idline={aboutline.id} field={'customfield'} tedit={'light'} />{/if}
                </div>
            <div class="line"><Button title='Запись на урок' /></div>
        </div>
    {/each}
</div>

<style>
    .content{
        float: left;
        width: 100%;
        display: flex;
        box-sizing: border-box;
        padding: 0 90px;
    }
    .photo{
        position: relative;
        float: left;
        width: 424px;
    }
    
    .photo::before{
        content: '';
        position: absolute;
        z-index: 0;
        top: -60px;
        left: -70px;
        width: calc(100% - 20px);
        height: calc(100% - 40px);
        max-width: 390px;
        max-height: 438px;
        background-image: url(/svg/bgphotos.svg);
        background-repeat: repeat;
        background-position: top left;
        background-size: 60px 60px;
    }
    
    .photo img{
        position: relative;
        z-index: 1;
        max-width: 100%;
        height: auto;
        border-radius: 5px;
    }
    
    .about{
        float: left;
        width: calc(100% - 424px);
        box-sizing: border-box;
        padding-left: 90px;
    }
    
    .subtitle{
        position: relative;
        float: left;
        font-family: Carlito-Bold;
        font-size: 18px;
        text-transform: uppercase;
        color: #8d2326;
        box-sizing: border-box;
        padding-left: 70px;
        padding-right: 30px;
    }
    
    .subtitle::before{
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 50px;
        height: 1px;
        background-color: #8d2326;
        margin-top: -2px;
    }
    
    .title{
        position: relative;
        float: left;
        width: 100%;
        font-family: Cambria;
        font-size: 36px;
        line-height: 1.3em;
        font-weight: bold;
        margin-top: 15px;
    }
    
    .text{
        position: relative;
        float: left;
        width: 100%;
        font-family: Carlito-Regular;
        font-size: 18px;
        line-height: 1.3em;
        border-bottom: 1px solid rgba(0,0,0,0.1);
    }
    
    :global(.text p) {
        margin: 25px 0;
        line-height: 1.5em;
        color: #636363;
        text-align: justify;
    }
    
    .info{
        position: relative;
        float: left;
        width: 100%;
        text-align: right;
        margin: 15px 0;
        font-size: 16px;
        font-family: Cambria;
        text-transform: uppercase;
        color: #000;
    }
    
    .line{
        float: left;
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    
    :global(.edit:hover .btn){
        display: block;
    }
</style>