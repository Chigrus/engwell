<script>
    export let prices;
    import { isAdmin } from '../store.js';
    import BtnEdit from '../components/BtnEdit.svelte';
</script>

<style>
    .content{
        float: left;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 50px;
    }
    .block{
        width: calc(100%/4 - 20px);
        background-color: #fff;
        margin: 10px;
        box-sizing: border-box;
        border-radius: 10px 10px 5px 5px;
    }
    .title{
        position: relative;
        float: left;
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        padding: 0 30px;
        background-color: #9d4345;
        border-radius: 5px 5px 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        color: #fff;
        font-family: Cambria;
        line-height: 0.9em;
        text-align: center;
    }
    .textprices{
        position: relative;
        float: left;
        width: 100%;
        box-sizing: border-box;
        padding: 25px;
        padding-bottom: 10px;
    }
    :global(.textprices ul){
        padding: 0;
        margin: 0;
        list-style-type: none;
    }
    :global(.textprices ul li){
        position: relative;
        float: left;
        width: 100%;
        box-sizing: border-box;
        padding-left: 20px;
        font-size: 14px;
        line-height: 18px;
        text-transform: uppercase;
        font-family: Carlito-Regular;
    }
    :global(.textprices ul li::before){
        content: '';
        position: absolute;
        top: 4px;
        left: 0;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #9d4345;
    }
    :global(.textprices p){
        position: relative;
        float: left;
        display: flex;
        width: 100%;
        margin: 5px 0 10px 0;
        justify-content: center;
    }
    :global(.textprices p::before){
        content: '';
        position: absolute;
        z-index: 0;
        left: 15%;
        bottom: 15px;
        width: 70%;
        border-bottom: 1px dashed #9d4345;
    }
    :global(.textprices p b){
        position: relative;
        z-index: 1;
        color: #9d4345;
        font-size: 22px;
        font-family: Cambria;
        background-color: #fff;
        padding: 0 10px;
    }
    :global(.textprices i){
        text-transform: none;
        font-size: 14px;
    }
</style>

<div class="content">
    {#each prices as price}
        <div class="block">
            <div class="title edit">
                {@html price.title}
                {#if $isAdmin}<BtnEdit on:getDat datablock={price.title} idline={price.id} field={'title'} tedit={'light'} />{/if}
            </div>
            <div class="textprices edit">
                {@html price.text}
                {#if $isAdmin}<BtnEdit on:getDat datablock={price.text} idline={price.id} field={'text'} tedit={'full'} />{/if}
            </div>
        </div>
    {/each}  
</div>