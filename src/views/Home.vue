


<template>
    <h1 class="tracking-light text-center text-2xl font-extrabold  text-yellow-500 sm:text-4xl lg:text-5xl">
    NYC Sound Guy
    </h1>

    <h1 class="tracking-light text-center text-2xl font-extrabold  text-blue-500 sm:text-4xl lg:text-5xl">
      Blog
    </h1>
    <div>
        <nav class="flex justify-around items-center bg-yellow-400 p-4">
            <router-link class="no-underline text-blue-500  hover:text-orange-600 transition-colors duration-300 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" to="/">Home</router-link>
            <router-link class="no-underline text-blue-500  hover:text-orange-600 transition-colors duration-300 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" to="/about">About</router-link>
            <router-link class="no-underline   text-blue-500 hover:text-orange-600 transition-colors duration-300 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" to="/contact">Contact</router-link>
            <a class="no-underline text-blue-500  hover:text-orange-600 transition-colors duration-300 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" href="https://www.nycsoundguy.com/">Visit</a>
        </nav>
        <div class="container mx-auto px-4 max-w-screen-2xl">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div class="bg-white shadow-lg rounded-lg p-4">
                    <img src="/sound1.jpeg" alt="sound person image from open source" class="w-full h-96 object-contain rounded-t-lg">
                    <h3 class="text-lg font-bold mt-2">Zaxcom</h3>
                    <p class="text-gray-600 text-sm">Zaxcom is the most like Apple in the film sound world.</p>
                    <router-link to="Zaxcom" class="text-blue-500 hover:underline">Read more</router-link>

                </div>
                <div class="bg-white shadow-lg rounded-lg p-4">
                    <img src="/sound2.jpeg" alt="sound person image from open source" class="w-full h-96 object-contain rounded-t-lg">
                    <h3 class="text-lg font-bold mt-2">Sound Devices</h3>
                    <p class="text-gray-600 text-sm">Sound Devices builds sturdy mixers and recorders</p>
                    <router-link to="SoundDevices" class="text-blue-500 hover:underline">Read more</router-link>
                </div>
                <div class="bg-white shadow-lg rounded-lg p-4">
                    <img src="/sound3.jpeg" alt="sound person image from open source" class="w-full h-96 object-contain rounded-t-lg">
                    <h3 class="text-lg font-bold mt-2">Ktek</h3>
                    <p class="text-gray-600 text-sm">Ktek is a major player in the boom pole world.</p>
                    <router-link to="Ktek" class="text-blue-500 hover:underline">Read more</router-link>
                </div>
                <div class="bg-white shadow-lg rounded-lg p-4">
                    <img src="/sound4.jpeg" alt="sound person image from open source" class="w-full h-96 object-contain rounded-t-lg">
                    <h3 class="text-lg font-bold mt-2">About NYC Sound Guy</h3>
                    <p class="text-gray-600 text-sm">Find Out What NYC Sound Guy is All About</p>
                    <router-link to="About" class="text-blue-500 hover:underline">Read more</router-link>
                </div>
                <div class="bg-white shadow-lg rounded-lg p-4">
                    <img src="/sound-cartoon1.jpeg" alt="sound person image from open source" class="w-full h-96 object-contain rounded-t-lg">
                    <h3 class="text-lg font-bold mt-2">A Fun NYC Sound Guy Page</h3>
                    <p class="text-gray-600 text-sm">Checkout out our page dedicated to FUN!</p>
                    <router-link to="Fun" class="text-blue-500 hover:underline">Read more</router-link>
                </div>
            </div>
        </div>


        <div class="mx-3 lg:mx-36">




            <div>
                <p class="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold"></p>
                <br />
                <p class="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold">
                    To visit NYC Sound Guy
                </p>


                <br />
                <p class="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold">
                  You can visit
                    <a href="https://www.nycsoundguy.com/" class="text-blue-500"> here</a>.
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
