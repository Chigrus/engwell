<script>
    import { createEventDispatcher } from 'svelte';

    export let datablock = '';
    export let idline = '';
    export let field = '';
    export let tedit = '';
    export let timage = false;

    let ted = [];

    switch (tedit) {
        case 'full':
            ted = ['undo', 'redo', 'b', 'i', 'u', 'h1', 'h2', 'p','ol', 'ul','a','strike', 'sup', 'sub','viewHtml'];
            break;
        case 'light':
            ted = ['undo', 'redo', 'b', 'i', 'u', 'sup', 'sub', 'viewHtml'];
            break;
        default:
            ted = ['undo', 'redo', 'viewHtml'];
    }

    const dispatch = createEventDispatcher();

    function clickFn() {
        dispatch('getDat', {
            editid: idline,
            editfield: field,
            edittext: datablock,
            type: ted,
            image: timage,
            popup: true
        });
    }
</script>

<style>
.btn{
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background-image: url(/svg/pencil.svg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    cursor: pointer;
    display: none;
}
</style>

<span class="btn" on:click="{clickFn}"></span>