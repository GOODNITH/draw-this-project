<script lang="ts">
	import './nivel1.css';
	import Nav from '$lib/navbar1/navbar.svelte';
	import Next from '$lib/button.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.classList.add('nivel-1');
	});
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Anatomia humana</title>
</svelte:head>

<Nav levelNumber={1} position="rombo-1" />

<div class="container">
	<div class="header">
		<h1>Vídeo: Introducción a la anatomia humana </h1>
	</div>
	<div class="video-container">
		<iframe
			title=""
			src="https://www.youtube.com/embed/ccwQKHjPHg0"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
</div>
<div class="video-link">
	<a href="https://www.example.com/video-link">Descargar el vídeo</a>
</div>

<a href="./2" data-sveltekit-reload data-sveltekit-preload-data="tap">
	<Next />
</a>
