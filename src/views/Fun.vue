<template>
    <div id="app">
<!--        <h1>{{ count }}</h1>-->
<!--        <button @click="increment">+</button>-->
<!--        <button @click="decrement">-</button>-->
        <!-- A div element to mount the Three.js renderer -->
        <div id="three-container"></div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { Text } from 'troika-three-text'

export default {
    setup() {
        // reactive state
        const count = ref(0)

        // functions that mutate state and trigger updates
        function increment() {
            count.value++
        }

        function decrement() {
            count.value--
        }

        // expose to template and other options API hooks
        return {
            count,
            increment,
            decrement
        }
    },
    mounted() {
        // create a Three.js scene, camera, renderer, and a light
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.getElementById('three-container').appendChild(renderer.domElement)
        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(0, 0, 1)
        scene.add(light)

        // create a Text instance and add it to the scene
        const text = new Text()
        text.text = 'NYC Sound Blog is Sooo Fun!'
        text.fontSize = 0.2
        text.position.z = -2
        text.color = 0x9966FF
        // use a depth material to make the font more 3D
        text.depthMaterial = new THREE.MeshDepthMaterial()
        text.depthOffset = -0.01
        // set the glyphGeometryDetail to 4 for more detail
        text.glyphGeometryDetail = 4
        scene.add(text)

        // call the sync method on the Text instance to update the rendering
        text.sync()

        // animate the scene
        function animate() {
            requestAnimationFrame(animate)
            // rotate the text by one degree per frame
            text.rotation.y += Math.PI / 180
            renderer.render(scene, camera)
        }

        animate()

        // store the scene and renderer in the component instance for cleanup
        this.scene = scene
        this.renderer = renderer
    },
    unmounted() {
        // dispose the scene and renderer when the component is unmounted
        this.scene.dispose()
        this.renderer.dispose()
    }
}
</script>
