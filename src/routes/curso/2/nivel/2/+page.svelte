<script lang="ts">
	import './nivel2.css';
	import Nav from '$lib/navbar1/navbar.svelte';
	import Next from '$lib/button.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.classList.add('nivel-2');
	});
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Historia del Arte</title>
</svelte:head>

<Nav levelNumber={2} position="circle-1" />

<div class="container">
	<div class="text">
        <h1>El Arte Prehistórico</h1>
        <hr>
        <br>
        <p>El <strong>arte prehistórico</strong> es el tipo de arte que hicieron los primeros seres humanos hace miles de años, <strong>mucho antes de que existieran los libros o la escritura.</strong> Este arte incluye dibujos y pinturas en las paredes de las cuevas, esculturas y objetos decorativos. Usaban materiales naturales como tierra, plantas y minerales para crear colores y pintar animales, personas y símbolos.</p>
        <br>
        <p>En diferentes partes del mundo, como en las cuevas de <strong>Altamira</strong> en España y <strong>Chauvet</strong> en Francia, podemos encontrar estas pinturas antiguas. Estas cuevas eran como los <strong>"museos"</strong> de la prehistoria. Los dibujos suelen mostrar escenas de la vida cotidiana de estas personas, como cazando animales grandes como bisontes y ciervos, bailando alrededor del fuego, y celebrando rituales importantes para ellos. También hacían pequeñas esculturas de piedra o hueso, representando <strong>figuras humanas y animales</strong>, que quizás usaban como amuletos o juguetes.</p>
        <br>
        <p>El arte prehistórico es muy importante porque nos ayuda a entender cómo vivían y pensaban las personas hace miles de años. Aunque no sabemos exactamente por qué hacían estos dibujos, creemos que podrían haber sido para contar historias, expresar sus creencias, o incluso <strong>enseñar</strong> a otros.</p>
    </div>
	<div class="image">
		<img
			src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4WZCm3Ok5GfDGixoRraKa8yYdGl90uKMGig&s"
			alt=""
		/>
		<p>Pinturas rupestres de National Geographic</p>
	</div>
</div>

<a href="./3" data-sveltekit-reload data-sveltekit-preload-data="tap">
	<Next />
</a>
