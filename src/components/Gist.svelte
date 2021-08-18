<script>
  export let gistUrl = "";
  const jq = window.$;
  //   new ClipboardJS(".post__code-button");
  import { onMount } from "svelte";

  let frame;
  onMount(() => {
    frame.srcdoc = `<script src='${gistUrl}.js'><${""}/script>`;

    frame.addEventListener("load", (ev) => {
      test();
      const new_style_element = document.createElement("style");
      new_style_element.textContent =
        "body { margin: 0; }" +
        "body::-webkit-scrollbar { width: 4px; }" +
        "body::-webkit-scrollbar-thumb { background-color: white; }" +
        ".gist .gist-file { border-radius: 0; margin: 0; }" +
        ".gist .gist-data { border-radius: 0; }" +
        ".gist .gist-meta { border-radius: 0; }" +
        ".gist .gist-data {  }";
      ev.target.contentDocument.head.appendChild(new_style_element);
    });

    function test() {
      //   jq(".post__code-button").attr(
      //     "data-clipboard-text",
      //     jq(".gist__frame")
      //       .contents()
      //       .find(".gist-data")
      //       .text()
      //       .trim()
      //       .replace(/(?:\r\n|\r|\n){2}/g, "")
      //   );
      //   console.log(jq(".post__code-button").data("clipboard-text"));
      //   console.log(jq(".gist__frame").contents().find(".gist-data"));
    }
  });
</script>

<div class="container  col--">
  <iframe
    src="about:blank"
    bind:this={frame}
    title="Gist"
    class="gist__frame"
  />
</div>
<!-- <button class="post__code-button" data-clipboard-target="#bar"> Copy </button> -->

<!-- <button class="post__code-button" data-clipboard-text=""> Copy </button> -->
<style lang="scss">
  @import "../assets/scss/all.scss";

  div {
    width: 300px;
    height: 500px;
    overflow: hidden;
    border-radius: 10px;
    margin-top: 20px;
  }

  @media (min-width: $bp-md) {
    div {
      width: 700px;
    }
  }

  iframe {
    border: 0;
    align-self: stretch;
    height: 100%;
    // width: calc(100% + 18px);
  }

  //   .post__code-button {
  //     margin-top: -40px;
  //     margin-right: 20px;
  //     align-self: flex-end;
  //     z-index: 1;
  //   }
</style>
