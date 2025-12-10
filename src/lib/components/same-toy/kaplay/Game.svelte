<script>
  import { browser } from '$app/environment'
  import kaplay from 'kaplay'
  import { onMount } from 'svelte'

  let container // the div that will hold the canvas
  let k

  // Resize the canvas to match the container
  function resizeCanvas() {
    if (!k || !container) return
    const w = container.clientWidth
    const h = container.clientHeight

    // Kaplay v4000 has k.resize()
    if (typeof k.resize === 'function') {
      k.resize(w, h)
    }
  }

  onMount(() => {
    // Initialize KAPLAY inside the container
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

    // Get notified when KAPLAY canvas changes size
    k.onResize(() => {
      // Example: keep player centered on resize
      // player.pos = k.vec2(k.width() / 2, k.height() / 2);
      console.log('Kaplay resized:', k.width(), k.height())
    })

    // Initial resize sync
    resizeCanvas()
  })
</script>

<!-- Listen to window resizes -->
<svelte:window on:resize={resizeCanvas} />

<!-- This div will contain the Kaplay canvas -->
<div bind:this={container} class="w-full h-full overflow-hidden"></div>
