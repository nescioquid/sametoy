<script>
  import { onMount } from 'svelte'
  import { initKaplay } from '$lib/kaplay/kaplayConfig'
  import { OFFSET, SCALE_FACTOR } from '$lib/kaplay/constants'
  // import { game } from '$lib/kaplay/game'
  // import { createPlayer } from '$lib/kaplay/createPlayer'
  // import {  } from "$lib/";

  let container

  onMount(() => {
    const k = initKaplay(container)
    const { loadSprite, add, sprite, area, pos, z, scale, scene, go } = k

    loadSprite('brendan', '/sprites/brendan.png', {
      sliceX: 5,
      sliceY: 4,
    })

    scene('game', () => {
      let x = 6 * OFFSET
      let y = 3 * OFFSET

      const player = add([
        sprite('brendan', { frame: 10 }),
        area(),
        pos(x, y),
        z(1),
        scale(SCALE_FACTOR),
        // {
        //   speed: 200,
        //   direction: 'down',
        //   isMoving: false,
        //   target: vec2(0, 0), // overwritten right after
        //   moveDir: vec2(0, 0),
        // },
        // 'player',
      ])
    })

    go('game')
  })
</script>

<div bind:this={container} class="w-full h-full overflow-hidden"></div>
