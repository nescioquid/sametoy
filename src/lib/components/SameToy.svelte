<script>
  import AAndB from '$lib/components/AAndB.svelte'
  import DPad from '$lib/components/DPad.svelte'
  import Housing from '$lib/components/Housing.svelte'
  import Logo from '$lib/components/Logo.svelte'
  import Ignition from '$lib/components/Ignition.svelte'
  import Screen from '$lib/components/Screen.svelte'
  import Speaker from '$lib/components/Speaker.svelte'
  import Start from '$lib/components/Start.svelte'
</script>

<Housing>
  <!-- LEFT SIDE -->
  <div class="flex flex-col items-center gap-[6vh] flex-1">
    <Speaker class="flex-1" />
    <DPad class="flex-1" />
    <Ignition />
    <div class="flex-1"></div>
    <div class="flex-1"></div>
  </div>

  <!-- CENTER -->
  <div class="flex flex-col items-center justify-center gap-[3vh] flex-4">
    <Screen />
    <Logo />
  </div>

  <!-- RIGHT SIDE -->
  <div class="flex flex-col items-center gap-[6vh] flex-1">
    <Speaker class="flex-1" />
    <AAndB class="flex-1" />
    <Start class="flex-1" />
    <div class="flex-1"></div>
    <div class="flex-1"></div>
  </div>
</Housing>
