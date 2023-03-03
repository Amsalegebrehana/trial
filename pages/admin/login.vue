<template>
<div class="items-center justify-center w-screen h-screen bg-white">
    <NuxtLink :to="`/`">
    <div class="flex flex-row">

        <img src="../../assets/images/eegtslogo.png" class="w-16 m-6" />
        <h1 class="text-2xl my-auto">EEGTS</h1>
    </div>
    </NuxtLink>
    <div class="flex flex-row h-full">
        <div class="w-1/2">
            <img src="../../assets/images/undraw_Onboarding_re_6osc.png" class="m-10 ml-16 mx-auto " />
        </div>
        <div class="w-1/2 h-full items-center align-middle my-auto ">
            <div class="w-8/12 mt-32 justify-center mx-auto">
            
                <div class="intro-x mt-8">
         
          
                    <div class="input-group mt-4 w-96">
                        <div class="input-group-text">
                            <Icon name="material-symbols:alternate-email" class="w-4 h-4"></Icon>
                        </div>
                        <input  type="text"  class="form-control bg-slate-100" placeholder="Email"  v-model="userInfo.email">
                        
                    </div>
               
                    <div class="input-group mt-4 w-96">
                        <div class="input-group-text"><Icon name="material-symbols:alternate-email" class="w-4 h-4"></Icon></div>
                        <input :type="showPassword ? 'text' : 'password'" class="form-control bg-slate-100" placeholder="Password"  v-model="userInfo.password" >
                        <div v-on:click="togglePassword()" class="input-group-text">
                            <Icon v-if="showPassword" name="ri:eye-line" class="w-4 h-4 text-slate-500"></Icon>
                        <Icon v-else name="ri:eye-close-line" class="w-4 h-4 text-slate-500"></Icon>
                    </div>
                    </div>

                </div>
                <!-- <div class="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
                    <div></div>
                    <a href="" class="ml-auto">Forgot Password?</a>
                </div> -->
         
                
                    <button @click="mySignInHandler({ email: userInfo.email, password: userInfo.password, role: 'admin' })" class="bg-primary rounded-xl w-5/12 text-white py-3 px-4 text-center mt-8">
                        Sign In
                    </button>
              
            </div>
            
    </div>
    </div>
 

</div>
</template>
<script setup lang="ts">
definePageMeta({ auth: false })
const isLoading = ref(false);
const _error = ref(null);
const showPassword = ref(false);
const togglePassword =() => {
                showPassword.value = !showPassword.value;
            };
const userInfo =  {
                email: '',
                password: ''
            };

const { signIn } = useSession()
const mySignInHandler = async ({ email, password, role }: { email: string, password: string, role: string }) => {
    const { error, url } = await signIn('credentials', { email, password, role, redirect: false, callbackUrl: 'http://localhost:3000/admin/pools' })
    if (error) {
        // TODO : error handling and form validation
        alert('You have made a terrible mistake while entering your credentials')
    } else {
        return navigateTo(url, { external: true })
    }
}

</script>