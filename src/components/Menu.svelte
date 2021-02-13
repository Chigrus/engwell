<script>
    export let menu;

    function menuClick(id){
        menu.forEach(function(item, i) {
            item.active = false;
        });
        menu[id-1].active = true;
    }
</script>

<style>
.menu{
    height: 100%;
}
.list{
    float: left;
    width: 100%;
    height: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
}
.item{
    position: relative;
    float: left;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 20px;
}
.item.active::before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: #8d2326;
}
.link{
    font-size: 16px;
    color: #646464;
    text-decoration: none;
    font-family: Carlito-Regular;
}
.link:hover{
    color: #8d2326;
}
.item.active .link{
    color: #8d2326;
}
</style>

<nav class="menu">
    <ul class="list">
        {#each menu as item}
            <li class="item" class:active={item.active}>
                <a href="#{item.url}" class="link" on:click|preventDefault={() => menuClick(item.position)}>{item.title}</a>
            </li>
        {/each}
    </ul>
</nav>