<script>
  export let name = "World";
</script>

<div class="Input">
  <input type="text" bind:value={name} />
  <p>Hola {name}!</p>
</div>
