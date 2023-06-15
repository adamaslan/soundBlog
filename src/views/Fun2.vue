<template>
  <div >
<!--    div class="divCenter pt-20"-->
    <!-- <div id="loading" class="divCenter w-full mt-[15rem] animate-spin"></div> -->
    <div id="three-container">
<!--        class=""-->
<!--        :style="-->
<!--        windowWidth < 1280-->
<!--          ? null-->
<!--          : {-->
<!--              'padding-left': paddingValue - 50 + 'px',-->
<!--              'padding-right': paddingValue - 50 + 'px'-->
<!--            }-->
<!--      "-->
     </div>
  </div>
</template>

<script>
/* eslint-disable */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

/* eslint-enable */
export default {



  mounted() {
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.getElementById('three-container').appendChild(renderer.domElement)

    // let isInDesktop = window.innerWidth > 1148;
    // const userPlatform = (platform) => {
    //   return platform ? 5 : 3;
    // };

    //const scene = new THREE.Scene();
    // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    // const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);
    // camera.position.x = 30;
    // camera.position.y = 20;
    // camera.position.z = 30;
    // const light = new THREE.DirectionalLight(0xffffff, 1)
    // light.position.set(0, 0, 1)
    // scene.add(light)

    //loader
    // const dracoLoader = new DRACOLoader();
    // dracoLoader.setDecoderPath( 'js/libs/draco/gltf/' );

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

    const ambientLight = new THREE.AmbientLight('#b9d5ff', 0.3)
   
    scene.add(ambientLight)


    // Bushes
    const bushGeometry = new THREE.SphereGeometry(1, 16, 16)
    const bushMaterial = new THREE.MeshStandardMaterial({ color: '#89c854' })

    const bush1 = new THREE.Mesh(bushGeometry, bushMaterial)
    bush1.castShadow = true
    bush1.scale.set(0.5, 0.5, 0.5)
    bush1.position.set(0.8, 0.2, 2.2)

    const bush2 = new THREE.Mesh(bushGeometry, bushMaterial)
    bush2.castShadow = true
    bush2.scale.set(0.25, 0.25, 0.25)
    bush2.position.set(1.4, 0.1, 2.1)

    const bush3 = new THREE.Mesh(bushGeometry, bushMaterial)
    bush3.castShadow = true
    bush3.scale.set(0.4, 0.4, 0.4)
    bush3.position.set(- 0.8, 0.1, 2.2)

    const bush4 = new THREE.Mesh(bushGeometry, bushMaterial)
    bush4.castShadow = true
    bush4.scale.set(0.15, 0.15, 0.15)
    bush4.position.set(- 1, 0.05, 2.6)

    group.add(bush1, bush2, bush3, bush4)


    const loader = new GLTFLoader();
    // loader.setDRACOLoader( dracoLoader );
    loader.load(
        '/boompole.glb',
        function (gltf) {
          // loader.load( './src/assets/room/scene.gltf', function ( gltf ) {
          const model = gltf.scene;

          // position the model from the camera
          model.position.set(1, 1, 1);
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



    // const renderer = new THREE.WebGLRenderer();
    // renderer.setSize( window.innerWidth, window.innerHeight );

    // add to HTML viewer
    // const container = document.body;
     const container = document.getElementById('threejs-container');
    //container.appendChild( renderer.domElement ); // may need to change to append this on the right element

    // three js renderer and size on the element
    // const renderer = new THREE.WebGLRenderer({
    //   antialias: true,
    //   alpha: true
    // });
    // renderer.setSize(window.innerWidth, window.innerHeight)
    // renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.setSize( window.innerWidth, window.innerHeight );
    // renderer.outputEncoding = THREE.sRGBEncoding;
    // renderer.setSize(450, 450 / 2); // size
    // renderer.shadowMap.enabled = true;
    // renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    // container.appendChild(renderer.domElement);
    // renderer.setClearColor(0x000000, 0); // set transparent bg

    // attempt to add shadows
    // const pmremGenerator = new THREE.PMREMGenerator(renderer);

    // const scene = new THREE.Scene();
     group.background = new THREE.Color( 0xbfe3dd );
    // scene.environment = pmremGenerator.fromScene(
    //     new RoomEnvironment(),
    //     1
    // ).texture;

    // lightning and casting shadows
    // const light = new THREE.AmbientLight(0xFFFF00, 1); // soft white light
    // // light.position.set(15, 20, 0);
    // // light.target.position.set(0, 0, 0);
    // light.castShadow = true;
    //
    // light.shadow.mapSize.width = 512; // default
    // light.shadow.mapSize.height = 512; // default
     // light.shadowCameraLeft = -30;
    // light.shadowCameraRight = 30;
    // light.shadowCameraTop = 35;
    // light.shadowCameraBottom = -30;


    // group.add(light);
    // scene.add(light.target);

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