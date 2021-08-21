<script>
  import Button from "./Button.svelte";
  let someText = "Implentacion de chatbot con IA";
  let count = 0;
  let styles = { darkMode: false };
  function handleClick() {
    count += 1;
  }

  function toggle() {
    styles.darkMode = !styles.darkMode;
    window.document.body.classList.toggle("dark-mode");
  }
</script>

<div class="About" />

{#if !styles.darkMode}
  <p>{someText}</p>
{:else}
  <p>
    <span>Hola modo oscuro</span>
  </p>
{/if}

<Button text="Click" {count} on:click={handleClick} />
<Button text="DarkMode" on:click={toggle} />

<style>
  p {
    color: var(--theme-color);
  }
</style>
