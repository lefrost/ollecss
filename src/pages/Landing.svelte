<script>
  import { onMount } from "svelte";
  import { Link } from "svelte-routing";
  import { root } from "../assets/js/paths.js";
  import * as api from "../assets/js/api.js";

  let posts;

  onMount(() => {
    api.getPosts().then((data) => {
      posts = data;
    });
  });
</script>

<div class="container  row-centre--  landing__hello">
  <img
    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/waving-hand_1f44b.png"
  />
  <div class="container  col--">
    <span>Okay.</span>
    <span>I made this little site for the</span>
    <a
      href="https://www.youtube.com/channel/UCBDopo8825exbqCH4N-nv5A"
      target="_blank"
      class="link">ollecss YouTube channel.</a
    >
    <span>You can find every tutorial here.</span>
  </div>
</div>

<div class="container  row-wrap--  row-centre--">
  {#if posts}
    {#each posts as post}
      <Link to="{root}p/{post.id}">
        <img src={post.thumbnailUrl} alt="" class="landing__card" />
      </Link>
    {/each}
  {/if}
</div>

<style lang="scss">
  @import "../assets/scss/all.scss";

  /* -- Hello -- */

  .landing__hello {
    padding: 50px 0 100px;

    > div {
      padding-left: 50px;
      font-size: 20px;

      > span {
        &:not(:first-child) {
          padding-top: 15px;
        }

        &:first-child {
          font-size: 30px;
          font-weight: bold;
        }
      }
    }
  }

  /* -- Card -- */

  .landing__card {
    width: 320px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: $shadow;
    position: relative;
    top: 0;
    @include swish;
    transition-property: box-shadow, opacity, top;

    &:hover {
      top: -10px;
      box-shadow: $shadow-push-down;
      opacity: 0.8;
    }
  }
</style>
