<template>
    <div>
        <p>Given user name and password:</p>
    
        <!-- NOTE: Here we hard-coded username and password, on your own page this should probably be connected to two inputs for username + password -->
        <button class="bg-blue-200 rounded-md" @click="mySignInHandler( { username: 'jsmith', password: 'hunter2', role:'admin' })">Sign in</button>
    </div>
</template>
<script setup lang="ts">
definePageMeta({ auth: false })
const { signIn } = useSession()
const mySignInHandler = async ({ username, password, role }: { username: string, password: string, role:string }) => {
    const { error, url } = await signIn('credentials', { username, password, role, redirect: false ,  callbackUrl: 'http://localhost:3000/protected'})
    if (error) {
        // Do your custom error handling here
        alert('You have made a terrible mistake while entering your credentials')
    } else {
        // No error, continue with the sign in, e.g., by following the returned redirect:
      
        return navigateTo(url, { external: true })
    }
}
</script>