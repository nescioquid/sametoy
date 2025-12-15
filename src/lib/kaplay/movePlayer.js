import { getKaplay } from '$lib/kaplay/kaplayConfig'
import { OFFSET } from '$lib/kaplay/constants'

export function attachPlayerMoves(player) {
  const k = getKaplay()
  const { vec2, onUpdate, dt, isKeyDown, onKeyPress } = k

  // initialize movement state if not present
  player.speed ??= 200
  player.direction ??= 'down'
  player.isMoving ??= false
  player.target ??= vec2(player.pos)
  player.moveDir ??= vec2(0, 0)

  // --- Movement updater ---
  onUpdate('player', () => {
    // --- If not moving & holding the facing direction key → move ---
    if (!player.isMoving) {
      const key = player.direction
      if (isKeyDown(key)) {
        tryMove(key, dirVecFromKey(key))
      }
    }

    if (player.isMoving) {
      const step = player.moveDir.scale(player.speed * dt())
      const next = player.pos.add(step)

      // reached (or passed) target tile?
      if (
        (player.moveDir.x > 0 && next.x >= player.target.x) ||
        (player.moveDir.x < 0 && next.x <= player.target.x) ||
        (player.moveDir.y > 0 && next.y >= player.target.y) ||
        (player.moveDir.y < 0 && next.y <= player.target.y)
      ) {
        // snap to tile
        player.pos = player.target.clone()
        player.isMoving = false

        // face animation
        player.play(
          'face' +
            player.direction.charAt(0).toUpperCase() +
            player.direction.slice(1)
        )

        // auto-continue if key still held
        const key = player.direction
        if (isKeyDown(key)) {
          tryMove(key, dirVecFromKey(key))
        }
      } else {
        player.pos = next
      }
    }
  })

  // --- Try to move 1 tile ---
  function tryMove(dirName, dirVec) {
    if (player.isMoving) return

    player.direction = dirName
    player.play('go' + capitalize(dirName))

    const targetX = player.pos.x + dirVec.x * OFFSET
    const targetY = player.pos.y + dirVec.y * OFFSET

    // collision check hook goes here

    player.target = vec2(targetX, targetY)
    player.moveDir = dirVec
    player.isMoving = true
  }

  function handleDirectionalPress(dirName, dirVec) {
    if (player.isMoving) return

    // turn without moving
    if (player.direction !== dirName) {
      player.direction = dirName
      player.play('face' + capitalize(dirName))
      return
    }

    // already facing → move
    tryMove(dirName, dirVec)
  }

  onKeyPress('up', () => handleDirectionalPress('up', vec2(0, -1)))
  onKeyPress('left', () => handleDirectionalPress('left', vec2(-1, 0)))
  onKeyPress('down', () => handleDirectionalPress('down', vec2(0, 1)))
  onKeyPress('right', () => handleDirectionalPress('right', vec2(1, 0)))

  // helpers
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  function dirVecFromKey(key) {
    return key === 'up'
      ? vec2(0, -1)
      : key === 'left'
      ? vec2(-1, 0)
      : key === 'down'
      ? vec2(0, 1)
      : // key === 'right'
        vec2(1, 0)
  }
}
