<script>
    export let phone;
    let phonenumber = phone.replace(/[^+\d]/g, '');
</script>

<style>
.phone{
	font-family: Carlito-Bold;
	line-height: 1em;
	font-size: 18px;
	padding-top: 30px;
	text-decoration: none;
	color: #000;
	background-image: url(/svg/phone.svg);
	background-position: top center;
	background-repeat: no-repeat;
	background-size: 24px auto;
}
</style>

<a href="tel:{phonenumber}" class="phone">{phone}</a>