<script>
  import { browser } from '$app/environment'
  import kaplay from 'kaplay'
  import { onMount } from 'svelte'

  import { power } from '$lib/power.svelte'

  let container // div that holds kaplay
  let k // kaplay instance

  // Resize the canvas to match the container
  function resizeCanvas() {
    if (!k || !container) return
    const w = container.clientWidth
    const h = container.clientHeight

    if (typeof k.resize === 'function') {
      k.resize(w, h)
    }
  }

  // Initialize game when component mounts (only happens when poweredOn === true)
  $effect(() => {
    if (!power.onOff) return

    // Initialize KAPLAY engine
    k = kaplay({
      root: container,
      width: container.clientWidth,
      height: container.clientHeight,
      global: false,
      letterbox: false,
    })

    // Load assets
    k.loadSprite('bean', '/sprites/bean.png')

    // Create player
    const player = k.add([
      k.pos(container.clientWidth / 2, container.clientHeight / 2),
      k.sprite('bean'),
    ])

    // Movement logic
    const speed = 250

    const moveUp = () => player.move(0, -speed)
    const moveLeft = () => player.move(-speed, 0)
    const moveDown = () => player.move(0, speed)
    const moveRight = () => player.move(speed, 0)

    // Interaction logic
    const aButton = () => k.addKaboom(player.pos)
    const bButton = () => k.addKaboom(player.pos)
    const startButton = () => k.addKaboom(player.pos)

    const handlers = {
      w: moveUp,
      a: moveLeft,
      s: moveDown,
      d: moveRight,
      up: moveUp,
      left: moveLeft,
      down: moveDown,
      right: moveRight,
      x: aButton,
      z: bButton,
      enter: startButton,
    }

    k.onKeyDown((key) => handlers[key]?.())

    // Kaplay resize listener
    k.onResize(() => {
      // Example: keep player centered on resize
      // player.pos = k.vec2(k.width() / 2, k.height() / 2);
      console.log('Kaplay resized:', k.width(), k.height())
    })

    // Initial resize sync
    resizeCanvas()

    // NOTE: Intentionally leaving in possible undocumented state by allowing KAPLAY to be initialized multiple times without being destroyed.

    // Attempt #1:
    
    //   return () => {
      //     k?.destroy?.()
      //     k = null
      //   }
      
    })

  // Attempt #2:

  // onDestroy(() => {
  //   k?.destroy?.()
  //   k = null
  // })
</script>

<!-- Listen to window resizes -->
<svelte:window on:resize={resizeCanvas} />

<!-- Kaplay canvas container -->
<div bind:this={container} class="w-full h-full overflow-hidden"></div>
