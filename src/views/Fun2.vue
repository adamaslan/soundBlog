<template>
  <div >
<div id="three-container">

     </div>
  </div>
</template>

<script>
/* eslint-disable */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/* eslint-enable */
export default {



  mounted() {
    const scene = new THREE.Scene()

    // const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000)

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.x = 4
    camera.position.y = 2
    camera.position.z = 15

    scene.add(camera)


    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.getElementById('three-container').appendChild(renderer.domElement)



    const group = new THREE.Group();
 scene.add(group)


    const plane = new THREE.Mesh(
        new THREE.PlaneGeometry( 10000, 10000 ),
        new THREE.MeshBasicMaterial( { color: 0xffffff, opacity: 0.5, transparent: true } )
    );
    plane.position.y = 1;
    plane.rotation.x = - Math.PI / 2;
    group.add( plane );

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(0, 0, 1)
    group.add(light)

    const ambientLight = new THREE.AmbientLight('#b9d5ff', 0.9)

    scene.add(ambientLight)


    // Bushes
    const bushGeometry = new THREE.SphereGeometry(1, 16, 16)
    const bushMaterial = new THREE.MeshStandardMaterial({ color: '#89c854' })

    const bush1 = new THREE.Mesh(bushGeometry, bushMaterial)
    bush1.castShadow = true
    bush1.scale.set(0.5, 0.5, 0.5)
    bush1.position.set(0.8, -2.5, 2.2)

    const bush2 = new THREE.Mesh(bushGeometry, bushMaterial)
    bush2.castShadow = true
    bush2.scale.set(0.25, 0.25, 0.25)
    bush2.position.set(4, -4, 2.1)

    const bush3 = new THREE.Mesh(bushGeometry, bushMaterial)
    bush3.castShadow = true
    bush3.scale.set(0.4, 0.4, 0.4)
    bush3.position.set(- 0.8, -6, 2.2)

    const bush4 = new THREE.Mesh(bushGeometry, bushMaterial)
    bush4.castShadow = true
    bush4.scale.set(0.15, 0.15, 0.15)
    bush4.position.set(- 3, -5, 2.6)

    group.add(bush1, bush2, bush3, bush4)

    const fog = new THREE.Fog('#262837', 1, 30)
    scene.fog = fog

    const graves = new THREE.Group()
    scene.add(graves)
    const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.1)

    for(let i = 0; i < 50; i++)
    {

      const angle = Math.random() * Math.PI * 2 // Random angle
      const radius = 3 + Math.random() * 6      // Random radius
      const x = Math.cos(angle) * radius        // Get the x position using cosinus
      const z = Math.sin(angle) * radius        // Get the z position using sinus

      // Create a new material with a random color
      const graveMaterial = new THREE.MeshStandardMaterial({ color: '#727272' })
      const randomColor = THREE.MathUtils.randInt(0, 0xffffff)
      graveMaterial.color.setHex(randomColor)

      // Create the mesh
      const grave = new THREE.Mesh(graveGeometry, graveMaterial)
      grave.castShadow = true

      // Position
      grave.position.set(x, -2, z)

      // Rotation
      grave.rotation.z = (Math.random() - 0.5) * 0.4
      grave.rotation.y = (Math.random() - 0.5) * 0.4

      // Add to the graves container
      graves.add(grave)
    }


    const loader = new GLTFLoader();
    // loader.setDRACOLoader( dracoLoader );
    loader.load(
        '/boompole.glb',
        function (gltf) {
         const model = gltf.scene;

          // position the model from the camera
          model.position.set(1, 5, -9);
          // model.scale.set(
          //     userPlatform(isInDesktop),
          //     userPlatform(isInDesktop),
          //     userPlatform(isInDesktop)
          // ); //model size
          model.castShadow = true;
          group.add(model);
        },
        undefined,
        function (error) {
          // console.error(error);
          // comment this for debugging
          this.$router.push('notfound');
        }
    );

    const loader1 = new GLTFLoader();
    // loader.setDRACOLoader( dracoLoader );
    loader.load(
        '/boompole.glb',
        function (gltf) {
          const model = gltf.scene;

          // position the model from the camera
          model.position.set(-3, 3, -1);
          // model.scale.set(
          //     userPlatform(isInDesktop),
          //     userPlatform(isInDesktop),
          //     userPlatform(isInDesktop)
          // ); //model size
          model.castShadow = true;
          group.add(model);
        },
        undefined,
        function (error) {
          // console.error(error);
          // comment this for debugging
          this.$router.push('notfound');
        }
    );


    const loader2 = new GLTFLoader();
    // loader.setDRACOLoader( dracoLoader );
    loader.load(
        '/nycsoundguy.glb',
        function (gltf) {
          const model = gltf.scene;

          // position the model from the camera
          model.position.set(-3, 5, 1);
          // model.scale.set(
          //     userPlatform(isInDesktop),
          //     userPlatform(isInDesktop),
          //     userPlatform(isInDesktop)
          // ); //model size
          model.castShadow = true;
          group.add(model);
        },
        undefined,
        function (error) {
          // console.error(error);
          // comment this for debugging
          this.$router.push('notfound');
        }
    );



    const container = document.getElementById('threejs-container');

     group.background = new THREE.Color( 0xbfe3dd );
   
    // helpers
    const controls = new OrbitControls(camera, renderer.domElement); // allow users to view around the model
    // controls.enablePan = false;
    controls.enableDamping = true; // adds a physic effect of "inertia" when spinning camera
    controls.maxPolarAngle = Math.PI / 2 - 0.3; // don't let user view below the ground, 0.3 is slightly above the base level
    controls.minDistance = 10; // don't let user zoom too close
    controls.maxDistance = 50; // don't let user zoom too far away

    controls.enableRotate = true;
    controls.rotateSpeed = 0.3; // set rotation speed of the mouse

    controls.autoRotate = true; // auto rotate
    controls.autoRotateSpeed = 1; // 30 seconds per orbit when fps is 60

    // grid helper
    const gridHelper = new THREE.GridHelper(400, 50); // add a grid
    // light helper
    const helper = new THREE.DirectionalLightHelper(light, 5);
    // scene.add( gridHelper );
    // scene.add( helper );

    const animate = () => {
      requestAnimationFrame(animate);

      // cube.rotation.x += 0.01;

      const width = window.innerWidth ;
      const height = window.innerHeight ;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      controls.update();
      renderer.render(scene, camera);
    };
    animate();


  }
};
</script>

// setup loading page
// document.onreadystatechange = function () {
// 	var state = document.readyState
// 	if (state == 'interactive') {
// 		document.getElementById('threejsContainer').classList.add(hidden);
// 	}
// 	else if (state == 'complete') {
// 		setTimeout(function(){
// 			// document.getElementById('interactive');
// 			document.getElementById('loading').classList.add('hidden');
// 			document.getElementById('threejsContainer').classList.remove('hidden');
// 		},
// 		50);
// 	}
// };


<!--<template>-->
<!--  <div id="three-container"></div>-->
<!--</template>-->

<!--<script>-->
<!--import * as THREE from 'three'-->
<!--// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'-->

<!--import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'-->
<!--import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'-->
<!--// import typefaceFont from '/helvetiker_regular.typeface.json'-->

<!--/**-->
<!--* Base-->
<!--*/-->


<!--// Canvas-->
<!--const canvas = document.querySelector('canvas.webgl')-->

<!--// Scene-->
<!--const scene = new THREE.Scene()-->

<!--/**-->
<!--* Textures-->
<!--*/-->
<!--const textureLoader = new THREE.TextureLoader()-->
<!--const matcapTexture = textureLoader.load('/7.png')-->

<!--/**-->
<!--* Fonts-->
<!--*/-->
<!--const fontLoader = new FontLoader()-->

<!--fontLoader.load(-->
<!--'/helvetiker_regular.typeface.json',-->
<!--(font) =>-->
<!--{-->
<!--// Material-->
<!--const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })-->

<!--// Text-->
<!--const textGeometry = new TextGeometry(-->
<!--'Hello Three.js',-->
<!--{-->
<!--font: font,-->
<!--size: 0.5,-->
<!--height: 0.2,-->
<!--curveSegments: 12,-->
<!--bevelEnabled: true,-->
<!--bevelThickness: 0.03,-->
<!--bevelSize: 0.02,-->
<!--bevelOffset: 0,-->
<!--bevelSegments: 5-->
<!--}-->
<!--)-->
<!--textGeometry.center()-->

<!--const text = new THREE.Mesh(textGeometry, material)-->
<!--scene.add(text)-->

<!--}-->
<!--)-->

<!--/**-->
<!--* Sizes-->
<!--*/-->
<!--const sizes = {-->
<!--width: window.innerWidth,-->
<!--height: window.innerHeight-->
<!--}-->

<!--window.addEventListener('resize', () =>-->
<!--{-->
<!--// Update sizes-->
<!--sizes.width = window.innerWidth-->
<!--sizes.height = window.innerHeight-->

<!--// Update camera-->
<!--camera.aspect = sizes.width / sizes.height-->
<!--camera.updateProjectionMatrix()-->

<!--// Update renderer-->
<!--renderer.setSize(sizes.width, sizes.height)-->
<!--renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))-->
<!--})-->

<!--/**-->
<!--* Camera-->
<!--*/-->
<!--// Base camera-->
<!--const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)-->
<!--camera.position.x = 1-->
<!--camera.position.y = 1-->
<!--camera.position.z = 2-->
<!--scene.add(camera)-->

<!--// Controls-->
<!--// const controls = new OrbitControls(camera, canvas)-->
<!--// controls.enableDamping = true-->

<!--/**-->
<!--* Renderer-->
<!--*/-->
<!--const renderer = new THREE.WebGLRenderer({-->
<!--canvas: canvas-->
<!--})-->
<!--renderer.setSize(sizes.width, sizes.height)-->
<!--renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))-->

<!--/**-->
<!--* Animate-->
<!--*/-->
<!--const clock = new THREE.Clock()-->

<!--const tick = () =>-->
<!--{-->
<!--const elapsedTime = clock.getElapsedTime()-->

<!--// Update controls-->
<!--controls.update()-->

<!--// Render-->
<!--renderer.render(scene, camera)-->

<!--// Call tick again on the next frame-->
<!--window.requestAnimationFrame(tick)-->
<!--}-->

<!--tick()-->
<!--</script>-->