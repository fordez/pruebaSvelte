<script>
  import { count } from "../store/store";
  function handleClick() {
    count.update((n) => n + 1);
  }
</script>

<button on:click={handleClick()}>
  click {$count == 0 ? "" : $count}
</button>

<style>
  button {
    background-color: #f76027;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem;
    text-transform: uppercase;
    cursor: pointer;
  }
</style>
