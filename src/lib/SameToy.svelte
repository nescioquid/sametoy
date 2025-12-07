<script>
  export let title = 'SAME TOY ADVANCED'
</script>

<div class="flex justify-center p-6">
  <div class="card bg-purple-200 shadow-xl rounded-lg p-6 min-w-180">
    <!-- Screen -->
    <div
      class="bg-black rounded-lg min-h-120 flex items-center justify-center mb-4 border-4 border-gray-700"
    >
      <slot>
        <span class="text-green-400 font-mono font-bold text-5xl opacity-50">
          INSERT GAME
        </span>
      </slot>
    </div>

    <h2 class="text-center font-bold mb-4 tracking-widest text-m opacity-80">
      {title}
    </h2>

    <!-- Controls -->
    <div class="grid grid-cols-3 gap-4">
      <!-- D-pad -->
      <div class="col-span-1 flex items-center justify-center">
        <div class="relative w-16 h-16">
          <!-- Vertical -->
          <div
            class="absolute inset-x-5 top-0 bottom-0 bg-gray-700 rounded"
          ></div>
          <!-- Horizontal -->
          <div
            class="absolute inset-y-5 left-0 right-0 bg-gray-700 rounded"
          ></div>

          <!-- Center knob -->
          <div
            class="absolute inset-0 m-auto bg-gray-800 rounded-full w-4 h-4"
          ></div>
        </div>
      </div>

      <!-- A/B buttons -->
      <div class="col-span-2 flex items-center justify-around">
        <button class="btn btn-circle btn-error w-12 h-12 text-xs">A</button>
        <button class="btn btn-circle btn-error w-12 h-12 text-xs">B</button>
      </div>
    </div>

    <!-- Select / Start -->
    <div class="flex justify-center gap-6 mt-6">
      <button class="btn btn-xs btn-outline rounded-full px-4">SELECT</button>
      <button class="btn btn-xs btn-outline rounded-full px-4">START</button>
    </div>
  </div>
</div>
