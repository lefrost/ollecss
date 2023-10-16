<script>
  const jq = window.$;
  import { onMount } from "svelte";
  import { Link } from "svelte-routing";
  import { root } from "../assets/js/paths.js";
  import Gist from "../components/Gist.svelte";
  import * as api from "../assets/js/api.js";
  export let id;

  let post;
  onMount(() => {
    api.getPost(id).then((data) => {
      post = data;
    });
  });
</script>

<div class="link  post__back"><Link to={root}>Go back</Link></div>

<div class="container  col--  col-centre--  post">
  {#if post}
    <div class="container  col--  post__text">
      <!-- <span
        >Here's how to add<br /><b>smooth/momentum scrolling</b><br />to your
        website in <i>60 seconds</i>.</span
      > -->
      <span>
        {@html post.title}
      </span>
    </div>

    {#if post.videoId}
      <iframe
        width="80%"
        height="120"
        src="https://www.youtube.com/embed/{post.videoId}"
        frameborder="0"
        title="video"
        allowfullscreen
      />
    {/if}

    {#if post.previewUrl}
      <div class="post__text">
        Here's the <a href={post.previewUrl} target="_blank" class="link"
          >preview</a
        >.
      </div>
    {/if}

    {#if post.gists}
      {#each post.gists as gist}
        <div class="container  col--">
          <div class="post__text">Codebin:</div>
          <div class="post__text  small--">{gist.description}</div>

          <Gist
            gistUrl="https://gist.github.com/lefrst/{gist.id}"
            id="bar"
          />
        </div>
      {/each}
    {/if}

    {#if post.credits}
      <div class="container  col--">
        <div class="post__text">Credits:</div>
        {#each post.credits as credit}
          <div class="container  col--  post__credit">
            <a
              href={credit.linkUrl}
              target="_blank"
              class="link  post__text  small--">{credit.linkText}</a
            >
            <span>{credit.description}</span>
          </div>
        {/each}
      </div>
    {/if}
  {/if}
</div>

<style lang="scss">
  @import "../assets/scss/all.scss";

  iframe {
    border-radius: 10px;
    box-shadow: $shadow;
  }

  .post {
    > * {
      margin-bottom: 100px;

      &:first-child {
        margin-top: 50px;
      }
    }
  }

  /* -- Back -- */

  .post__back {
    position: fixed;
    top: 30px;
    left: 30px;
    font-size: 12px;
    font-weight: bold;
    text-transform: lowercase;
  }

  /* -- Text -- */

  .post__text {
    font-size: 18px;

    &.small-- {
      font-size: 14px;
    }
  }

  @media (min-width: $bp-md) {
    .post__text {
      font-size: 30px;

      &.small-- {
        font-size: 18px;
      }
    }
  }

  /* -- Credit -- */

  .post__credit {
    padding-top: 20px;

    > span {
      font-size: 13px;
      opacity: 0.5;
      padding-top: 2px;
    }
  }
</style>
