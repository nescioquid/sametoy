<script>
  import { onMount } from 'svelte'
  import { initKaplay } from '$lib/kaplay/kaplayConfig'
  import { OFFSET, SCALE_FACTOR } from '$lib/kaplay/constants'
  import { loadPlayer, playerAnim } from '$lib/kaplay/loadPlayer'
  import { addPlayer } from '$lib/kaplay/addPlayer'

  let container

  onMount(() => {
    const k = initKaplay(container)
    const { loadSprite, add, sprite, area, pos, z, scale, scene, go } = k

    loadPlayer('brendan')

    scene('game', () => {
      addPlayer('brendan', 6, 3, 'south')

      // loadPlayer('brendan')
      //   .then(() => loadMap('bedroom'))
      //   .then((map) => {
      //     addMap(map)
      //     addPlayer('brendan', 6, 4)
      //   })
    })

    go('game')
  })
</script>

<div bind:this={container} class="w-full h-full overflow-hidden"></div>
