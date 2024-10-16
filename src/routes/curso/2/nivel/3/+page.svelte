<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement | null = null;
	let ctx: CanvasRenderingContext2D | null = null;
	let selectedColor = "#FFD700"; // Amarillo por defecto
	let colors = ['#FF5733', '#33FF57', '#3357FF', '#FFD700'];
	let pixelSize = 20; // Tamaño del píxel
	let isDrawing = false;

	onMount(() => {
		canvas = document.querySelector("canvas");
		ctx = canvas!.getContext("2d");

		if (canvas && ctx) {
			canvas.width = 500;
			canvas.height = 500;
			drawGrid();
		}
	});

	const drawGrid = () => {
		if (!ctx || !canvas) return;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.strokeStyle = "#ccc";
		for (let x = 0; x < canvas.width; x += pixelSize) {
			for (let y = 0; y < canvas.height; y += pixelSize) {
				ctx.strokeRect(x, y, pixelSize, pixelSize);
			}
		}
	};

	const startDraw = (e: MouseEvent) => {
		if (!ctx) return;
		isDrawing = true;
		fillPixel(e.offsetX, e.offsetY, selectedColor);
	};

	const draw = (e: MouseEvent) => {
		if (!isDrawing || !ctx) return;
		fillPixel(e.offsetX, e.offsetY, selectedColor);
	};

	const fillPixel = (x: number, y: number, color: string) => {
		const gridX = Math.floor(x / pixelSize) * pixelSize;
		const gridY = Math.floor(y / pixelSize) * pixelSize;
		ctx!.fillStyle = color;
		ctx!.fillRect(gridX, gridY, pixelSize, pixelSize);
	};

	const stopDraw = () => (isDrawing = false);

	const clearCanvas = () => drawGrid();

	const saveImage = () => {
		const link = document.createElement("a");
		link.download = "pixel-art.png";
		link.href = canvas!.toDataURL();
		link.click();
	};
</script>

<main>
	<section class="toolbar">
		<div class="actions">
			<button class="eraser" on:click={() => (selectedColor = "#fff")}>Borrador</button>
			<button on:click={clearCanvas}>Limpiar todo</button>
			<button on:click={saveImage}>Guardar</button>
		</div>

		<canvas
			on:mousedown={startDraw}
			on:mousemove={draw}
			on:mouseup={stopDraw}
			on:mouseleave={stopDraw}
		></canvas>

		<div class="colors">
			{#each colors as color}
				<div 
					class="color" 
					style="background-color: {color}" 
					on:click={() => (selectedColor = color)}
				></div>
			{/each}
			<label class="color">
				<input 
					type="color" 
					class="color-picker" 
					bind:value={selectedColor} 
				/>
			</label>
		</div>
		
	</section>
</main>

<style>
	main {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	background-color: #fafafa;
	padding: 20px;
	height: 100vh;
}

/* Coloca los botones a la izquierda del canvas */
.toolbar {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 20px;
}

/* Botones en columna a la izquierda */
.actions {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

/* Lienzo centrado entre las barras laterales */
canvas {
	border: 1px solid #000;
	cursor: crosshair;
}

/* Colores en columna a la derecha */
.colors {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.color {
	width: 30px;
	height: 30px;
	border-radius: 50%;
	cursor: pointer;
	border: 2px solid transparent;
	position: relative;
}

.color:hover {
	border-color: #000;
}

/* Input de color invisible pero funcional dentro del círculo */
.color-picker {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	cursor: pointer;
}

/* Estilos de los botones */
button {
	padding: 8px 12px;
	cursor: pointer;
	border: none;
	background-color: #007bff;
	color: white;
	border-radius: 4px;
	transition: background-color 0.3s;
}

button:hover {
	background-color: #0056b3;
}

</style>