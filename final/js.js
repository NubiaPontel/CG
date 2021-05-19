var scene; 
var camera; 
var renderer; 



var init = function (){

	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x363636)


	camera = new THREE.PerspectiveCamera(
						40, // view angle
						window.innerWidth/window.innerHeight, //aspect ratio
						1, //near
						100 //far
					);


	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	camera.position.z = 50;
	camera.position.x = 0;
	camera.position.y = 1.7;


	renderer.render(scene, camera);

};

window.onload = this.init
