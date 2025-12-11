import kaplay from 'kaplay'

export default function createKaplay(container) {
  return kaplay({
    root: container,
    width: container.clientWidth,
    height: container.clientHeight,
    global: false,
    letterbox: true,
    scale: 1,
  })
}
