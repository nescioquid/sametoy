<script>
  import AAndB from '$lib/AAndB.svelte'
  import DPad from '$lib/DPad.svelte'
  import Logo from '$lib/Logo.svelte'
  import PowerOnOff from '$lib/PowerOnOff.svelte'
  import Screen from '$lib/Screen.svelte'
  import Start from '$lib/Start.svelte'
</script>

<div
  class="card flex-row gap-[3vh] items-center justify-center bg-purple-700 border-9 border-purple-800 rounded-4xl h-[80vh] w-[160vh] p-[6vh] pt-[9vh]"
>
  <!-- LEFT SIDE -->
  <div class="flex flex-col items-center gap-[12vh] w-1/6">
    <DPad />
    <Start />
  </div>

  <!-- CENTER -->
  <div class="flex flex-col items-center justify-center gap-[2vh] w-4/6">
    <Screen />
    <Logo />
  </div>

  <!-- RIGHT SIDE -->
  <div class="flex flex-col items-center gap-[6vh] w-1/6">
    <AAndB />
    <PowerOnOff />
  </div>
</div>
