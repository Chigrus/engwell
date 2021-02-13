<script>
    export let advantages;
    import { isAdmin } from '../store.js';
    import BtnEdit from '../components/BtnEdit.svelte';
</script>

<style>
.content{
    float: left;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: center;
}

.advantage{
    position: relative;
    width: calc(100%/2);
    box-sizing: border-box;
    padding: 85px 60px 60px 60px;
    text-align: center;
    font-family: Carlito-Regular;
    font-size: 18px;
    line-height: 22px;
    color: #505050;
}

.advantage:nth-child(3),
.advantage:nth-child(4){
    padding-bottom: 40px;
}

.advantage::before{
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 64px;
    height: 64px;
    margin-left: -32px;
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: contain;
}

.advantage::after{
    content: '';
    position: absolute;
    bottom: 30px;
    left: 50%;
    width: 60%;
    height: 1px;
    margin-left: -30%;
    border-bottom: 1px dashed #9d4345;
}

.advantage:nth-child(3):after,
.advantage:nth-child(4):after{
    content: none;
}

.advantage:nth-child(1):before{
    background-image: url(/svg/advantages/1.svg);
}
.advantage:nth-child(2):before{
    background-image: url(/svg/advantages/2.svg);
}
.advantage:nth-child(3):before{
    background-image: url(/svg/advantages/3.svg);
}
.advantage:nth-child(4):before{
    background-image: url(/svg/advantages/4.svg);
}

.link{
    position: relative;
    float: right;
    color: #8d2326;
    font-family: Cambria;
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
}

.link::before{
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 2px;
    background-color: #8d2326;
}

.link::after{
    content: '';
    position: absolute;
    top: 8px;
    right: -24px;
    width: 20px;
    height: 20px;
    background-image: url(/svg/advantages/next.svg);
    background-position: left center;
    background-repeat: no-repeat;
    background-size: contain;
    transition: .2s;
}

.link:hover:after{
    transition: .2s;
    transform: rotate(90deg);
    transform-origin: center center;
}
</style>

<div class="content">
    {#each advantages as advantage}
        <div class="advantage edit">
            {@html advantage.text}
            {#if $isAdmin}<BtnEdit on:getDat datablock={advantage.text} idline={advantage.id} field={'text'} tedit={'light'} />{/if}
        </div>
    {/each}
    <a href="/" class="link">Хотите больше выгод? Жмите</a>
</div>