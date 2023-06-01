<template>
    <div id="container"></div>
</template>

<script>
import * as THREE from 'three';
import { Text } from 'troika-three-text';

export default {
    data() {
        return {
            scene: null,
            camera: null,
            renderer: null,
            text: null
        };
    },
    mounted() {
        this.initThree();
    },
    beforeUnmount() {
        this.disposeThree();
    },
    methods: {
        initThree() {
            // create scene
            this.scene = new THREE.Scene();

            // create camera
            this.camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            );
            this.camera.position.z = 10;

            // create renderer
            this.renderer = new THREE.WebGLRenderer({ antialias: true });
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById("container").appendChild(this.renderer.domElement);

            // create light
            const light = new THREE.PointLight(0xffffff, 1);
            light.position.set(50, 50, 50);
            this.scene.add(light);

            // create text
            this.text = new Text();
            this.text.text = "nyc sound guy";
            this.text.fontSize = 2;
            this.text.position.y = 2;
            this.text.color = 0xff0000;
            this.scene.add(this.text);

            // update text rendering
            this.text.sync();

            // start animation loop
            this.animate();
        },
        animate() {
            // update text rotation
            if (this.text) {
                this.text.rotation.y += 0.01;
            }

            // render scene
            this.renderer.render(this.scene, this.camera);

            // request next frame
            requestAnimationFrame(this.animate);
        },
        disposeThree() {
            // stop animation loop
            cancelAnimationFrame(this.animate);

            // remove renderer
            document.getElementById("container").removeChild(this.renderer.domElement);

            // dispose text
            if (this.text) {
                this.text.dispose();
                this.scene.remove(this.text);
                this.text = null;
            }

            // dispose scene
            this.scene.dispose();
            this.scene = null;

            // dispose camera
            this.camera = null;

            // dispose renderer
            this.renderer.dispose();
            this.renderer = null;
        }
    }
};
</script>




<!--Cube between two circles with gravity - zax vs SD-->
<!--<script>-->
<!--import THREE from "three";-->
<!--import scene from "three/addons/offscreen/scene.js";-->


<!--export default {-->
<!--    name: 'SoundMixer',-->
<!--    props: {},-->
<!--    data() {-->
<!--        return {-->
<!--            text: 'Sound Mixer',-->
<!--            circles: [-->
<!--                {-->
<!--                    text: 'Sound Devices',-->
<!--                    color: '0x00ff00',-->
<!--                },-->
<!--                {-->
<!--                    text: 'Zaxcom',-->
<!--                    color: '0xff0000',-->
<!--                },-->
<!--            ],-->
<!--        };-->
<!--    },-->
<!--    mounted() {-->
<!--        // Create a scene-->
<!--        var scene = new THREE.Scene();-->

<!--        // Create a camera-->
<!--        var camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 1, 1100);-->
<!--        camera.position.z = 500;-->

<!--        // Create a renderer-->
<!--        var renderer = new THREE.WebGLRenderer();-->
<!--        renderer.setSize(innerWidth, innerHeight);-->
<!--        document.body.appendChild(renderer.domElement);-->

<!--        // Create a geometry-->
<!--        var geometry = new THREE.BoxGeometry(100, 100, 100);-->

<!--        // Create a material-->
<!--        var material = new THREE.MeshBasicMaterial({-->
<!--            color: 0x0000ff,-->
<!--        });-->

<!--        // Create a mesh-->
<!--        var mesh = new THREE.Mesh(geometry, material);-->
<!--        scene.add(mesh);-->

<!--        // Create text objects-->
<!--        for (var i = 0; i < this.circles.length; i++) {-->
<!--            var text = new THREE.Text(this.circles[i].text, 100);-->
<!--            text.position.x = 0;-->
<!--            text.position.y = 0;-->
<!--            text.position.z = 0;-->
<!--            scene.add(text);-->
<!--        }-->

<!--        // Create circles-->
<!--        for (var i = 0; i < this.circles.length; i++) {-->
<!--            var circle = new THREE.CircleGeometry(100, 32);-->

<!--            // Set the gravity of the circle-->
<!--            circle.gravity = 10;-->

<!--            // Create a material for the circle-->
<!--            var material = new THREE.MeshBasicMaterial({-->
<!--                color: this.circles[i].color,-->
<!--            });-->

<!--            // Create a mesh for the circle-->
<!--            var mesh = new THREE.Mesh(circle, material);-->
<!--            scene.add(mesh);-->
<!--        }-->

<!--        // Place the cube in between the circles-->
<!--        mesh.position.x = (this.circles[0].position.x + this.circles[1].position.x) / 2;-->
<!--        mesh.position.y = (this.circles[0].position.y + this.circles[1].position.y) / 2;-->
<!--        mesh.position.z = (this.circles[0].position.z + this.circles[1].position.z) / 2;-->

<!--        // Start the animation loop-->
<!--        requestAnimationFrame(this.animate);-->
<!--    },-->
<!--    methods: {-->
<!--        animate() {-->
<!--            // Update the camera-->
<!--            camera.lookAt(scene.position);-->

<!--            // Update the text on the cube-->
<!--            this.text = this.text.replace(/ /g, '');-->

<!--            // Update the circles-->
<!--            for (var i = 0; i < this.circles.length; i++) {-->
<!--                this.circles[i].text = this.text;-->
<!--            }-->

<!--            // Render the scene-->
<!--            renderer.render(scene, camera);-->

<!--            // Request the next animation frame-->
<!--            requestAnimationFrame(this.animate);-->
<!--        },-->
<!--    },-->
<!--};-->
<!--</script>-->
