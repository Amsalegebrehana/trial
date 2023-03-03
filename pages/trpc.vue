<script setup lang="ts">
definePageMeta({ middleware: 'is-admin' })
const { $client } = useNuxtApp()

// const hello = await $client.hello.useQuery({ text: 'client' })
const pools = await $client.pool.getPools.useQuery( )
</script>

<template>
  <div>
    <!-- As `superjson` is already pre-configured, we can use `time` as a `Date` object without further deserialization 🎉 -->
    <!-- tRPC Data: "{{ hello.data.value?.greeting }}" send at "{{ hello.data.value?.time.toLocaleDateString('en-EN') }}". -->
    <div v-if="pools!= null" >

      pools: <pre>{{ pools }}</pre>
    </div>
    <div v-else>
Loading...
    </div>
  </div>
</template>
