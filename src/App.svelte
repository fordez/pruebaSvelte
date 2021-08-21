<script>
  import About from "./components/About.svelte";
  import Text from "./components/Text.svelte";
  import Person from "./components/Person.svelte";
  import Skills from "./components/Skills.svelte";
  import Input from "./components/Input.svelte";
  import Photo from "./components/Photo.svelte";
  import ButtonCount from "./components/ButtonCount.svelte";

  export let name;
  export let lastName;
  let svelteLogo = "https://arepa.s3.amazonaws.com/svelte-logo.png";

  let data = {
    name: "Fernando",
    lastName: "Ordoñez",
    ege: 31,
  };
</script>

<main>
  <h1>{name} {lastName}</h1>
  <About />
  <Text anotherText="Hola!" />
  <Person {...data} />
  <Skills />
  <Input />
  <ButtonCount />
  <Photo />
  <img src={svelteLogo} alt="svelte" />
</main>

<style>
  :global(body) {
    background-color: #f2eee2;
    color: #0084;
  }

  :global(:root) {
    --theme-color: purple;
  }

  :global(body.dark-mode) {
    background-color: #1d3040;
    color: #bfc2c7;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  main img {
    width: 30%;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
