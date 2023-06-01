<template>
    <!-- A div element to mount the Three.js renderer -->
    <div id="three-container"></div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { Text } from 'troika-three-text'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'


export default {
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

        // create a fontLoader instance and load a custom font
        const fontLoader = new FontLoader()

        fontLoader.load(
            '/Utopia_Serif.json',
            (font) => {
                // create a textGeometry instance using the custom font
                const textGeometry = new TextGeometry('Font Loaded', {
                    font: font,
                })
                // create a mesh using the textGeometry and a material
                const textMesh = new THREE.Mesh(textGeometry, new THREE.MeshBasicMaterial())
                // add the textMesh to the scene
                scene.add(textMesh)
            }
        )

        // create a Text instance and add it to the scene
        const text = new Text()
        text.text = 'NYC Sound Blog is Sooo Fun!'
        text.font = '/utopia_seriff.ttf'
        text.fontSize = 0.2
        text.position.z = -2
        text.position.x = -1.5

        text.color = 0x9966FF
        // use a depth material to make the font more 3D
        text.depthMaterial = new THREE.MeshPhongMaterial({color: 0x000000, shininess: 100})
        text.depthOffset = -0.3
        // set the glyphGeometryDetail to 4 for more detail
        text.glyphGeometryDetail = 16
        scene.add(text)

        // call the sync method on the Text instance to update the rendering
        text.sync()

        // animate the scene
        function animate() {
            requestAnimationFrame(animate)
            // rotate the text by one degree per frame
            text.rotation.y += Math.PI / 180
            text.rotation.x += Math.PI / 180
            text.rotation.z += Math.PI / 90
            renderer.render(scene, camera)
        }

        animate()

        // store the scene and renderer in the component instance for cleanup
        this.scene = scene
        this.renderer = renderer

        // store the fontLoader and textMesh in the component instance for cleanup
        this.fontLoader = fontLoader
        this.textMesh = textMesh

    },
    unmounted() {
        // dispose the scene and renderer when the component is unmounted

        // dispose the fontLoader and textMesh when done
        this.fontLoader.dispose()
        this.textMesh.geometry.dispose()
        this.textMesh.material.dispose()

        this.scene.dispose()
        this.renderer.dispose()
    }
}
</script>
