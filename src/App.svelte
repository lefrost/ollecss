<script>
  import { Router, Route } from "svelte-routing";
  import { root } from "./assets/js/paths.js";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Landing from "./pages/Landing.svelte";
  import Post from "./pages/Post.svelte";
</script>

<Router primary={false}>
  <Header />

  <div class="main">
    <Route path={root}>
      <Landing />
    </Route>

    <Route path="{root}p/:id" let:params>
      <Post id={params.id} />
    </Route>
  </div>

  <Footer />
</Router>

<style lang="scss">
  @import "./assets/scss/all.scss";

  .main {
    @include wrapper;
    padding: $wrapper-gutter 0;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    position: relative;
  }
</style>
