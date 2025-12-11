<script>
  import { browser } from '$app/environment'
  import { onMount } from 'svelte'

  import createPlayer from '$lib/kaplay/player'
  import createKaplay from '$lib/kaplay/kaplay'

  let container
  let k

  $effect(() => {
    k = createKaplay(container)

    const player = createPlayer(
      k,
      container.clientWidth / 2,
      container.clientHeight / 2,
      'bean',
      '/sprites/bean.png'
    )
  })
</script>

<div bind:this={container} class="w-full h-full overflow-hidden"></div>
