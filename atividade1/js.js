var scene;
var camera;
var renderer;

var elementos= {}

var velocidade = 0.3;

var criaCirculo = function(){
  let geometria = new THREE.CircleGeometry(3, 10);

  let red = new THREE.Color(1,0,0);
  let green = new THREE.Color(0,1,0);
  let blue = new THREE.Color(0,0,1);
  let cores = [red,green,blue];




  let material = new THREE.MeshBasicMaterial({color: 0x2845ff});

  let circle = new THREE.Mesh(geometria, material);
  circle.position.x=-3
  elementos["circle1"] = circle;


  scene.add(circle);


};

var criaCone = function(){
  let geometria = new THREE.ConeGeometry(3, 4, 8);

  let red = new THREE.Color(1,0,0);
  

  let material = new THREE.MeshBasicMaterial({color: red});
  let cone = new THREE.Mesh(geometria, material);

  cone.position.x=3
  cone.position.y=10
  elementos["cone1"] = cone;

  scene.add(cone);

};



var init = function(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 100);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  camera.position.z = 100;
  camera.position.x = 0;
  camera.position.y = 0;

  criaCirculo();
  criaCone();

  animation();


};


var animation = function(){
  requestAnimationFrame(animation);

  elementos["circle1"].position.x-=velocidade;
  if(elementos["circle1"].position.x< -55){
    velocidade *=-1;

  }

  elementos["cone1"].position.x+=velocidade;
  if(elementos["cone1"].position.x< -50){
    velocidade *=-1;

  }

  renderer.render(scene, camera)

};



window.onload = this.init
