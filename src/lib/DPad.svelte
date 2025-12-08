<script>
  import {
    ChevronUp,
    ChevronRight,
    ChevronDown,
    ChevronLeft,
  } from '@lucide/svelte'
</script>

<div class="relative w-35 h-35">
  <!-- Up -->
  <button title="Up"
    class="btn btn-circle btn-soft w-12 h-12 opacity-85 border-6 absolute top-0 left-1/2 -translate-x-1/2"
    ><ChevronUp class="h-8 w-8 opacity-50" />
  </button>

  <!-- Right -->
  <button title="Right"
    class="btn btn-circle btn-soft w-12 h-12 opacity-85 border-6 absolute top-1/2 right-0 -translate-y-1/2"
    ><ChevronRight class="h-8 w-8 opacity-50" />
  </button>

  <!-- Down -->
  <button title="Down"
    class="btn btn-circle btn-soft w-12 h-12 opacity-85 border-6 absolute bottom-0 left-1/2 -translate-x-1/2"
    ><ChevronDown class="h-8 w-8 opacity-50" />
  </button>

  <!-- Left -->
  <button title="Left"
    class="btn btn-circle btn-soft w-12 h-12 opacity-85 border-6 absolute top-1/2 left-0 -translate-y-1/2"
    ><ChevronLeft class="h-8 w-8 opacity-50" />
  </button>
</div>
