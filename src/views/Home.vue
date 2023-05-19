


<template>
    <div>
        <div class="mx-3 lg:mx-36">
            <h1 class="tracking-light text-center text-2xl font-extrabold text-blue-500 sm:text-4xl lg:text-5xl">
                The art of the cCean Install
            </h1>

            <img
                    class="h-1/2 w-1/2 mx-auto my-auto"
                    src="../../public/vite.svg"
                    alt="Studio by Warren Hansen"
            />

            <div>
                <p class="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold"></p>
                <br />
                <p class="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold">
                    To do it:
                </p>
                <nav>
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                    <router-link to="/contact">Contact</router-link>
                    <router-link to="/blog">Blog</router-link>
                </nav>
                <br />
                <p class="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold">
                    For the vue docs, you can visit
                    <a href="https://vuejs.org/" class="text-blue-500"> here</a>.
                </p>
                <p class="text-center text-lg font-extrabold tracking-tight text-yellow-500 sm:text-2xl lg:text-4xl">
                    Go back
                    <router-link
                            to="/"
                            class="text-center text-6xl font-extrabold tracking-tight text-blue-500 sm:text-xl lg:text-4xl"
                    >
                        Home
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style ></style>
