var scene;
var camera;
var renderer;

var elementos = [];

var velocidade = 0.07;


var criaMonstro = function (){
	let puppet=[];

	let red = 	new THREE.Color(1,0,0);
	let green = new THREE.Color(0,1,0);
	let blue = 	new THREE.Color(0,0,1);
	let cores = [red, green, blue];
	let materials = [
		new THREE.MeshBasicMaterial({color: blue}),
		new THREE.MeshBasicMaterial({color: blue}),
		new THREE.MeshBasicMaterial({color: blue}),
		new THREE.MeshBasicMaterial({color: blue}),
		new THREE.MeshBasicMaterial({color: green}),
		new THREE.MeshBasicMaterial({color: blue})
	];

	let tronco = new THREE.Mesh(new THREE.BoxGeometry(4, 7, 2), materials);
	puppet["tronco"] = tronco;

  let cabeca = new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32), new THREE.MeshBasicMaterial({color: red}));
	puppet["cabeca"] = cabeca;
	tronco.add(cabeca);
	cabeca.position.y=tronco.position.y+6;

  // braco direito
  //ombro direito
  let ombroD = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
	puppet["ombroD"] = ombroD;
	tronco.add(ombroD);
	ombroD.position.y= tronco.position.y+3;
	ombroD.position.x= tronco.position.y+3;

  //pivot do ombro direito
	let pivotOmbroD = new THREE.Group();
	puppet["pivotOmbroD"] = pivotOmbroD;
	ombroD.add(pivotOmbroD);

  //parte superior do braco direito
	let bracoD = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["bracoD"] = bracoD;
	pivotOmbroD.add(bracoD)
	bracoD.position.y-=1.9;

  //cotovelo direito
  let cotoveloD  = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
  puppet["cotoveloD"] = cotoveloD;
	tronco.add(cotoveloD);
  cotoveloD.position.y= tronco.position.y-0.6;
	cotoveloD.position.x= tronco.position.y+3;

  //pivot do cotovelo direito
  let pivotCotoveloD = new THREE.Group();
	puppet["pivotCotoveloD"] = pivotCotoveloD;
	cotoveloD.add(pivotCotoveloD);


  //pulso representa a parte inferior do braco, direito
  let pulsoD = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["pulsoD"] = pulsoD;
	pivotCotoveloD.add(pulsoD);
	pulsoD.position.y-=1.7;


  //braco esquerdo
  //ombro esquerdo
  let ombroE = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
	puppet["ombroE"] = ombroE;
  tronco.add(ombroE);
	ombroE.position.y= tronco.position.y+3;
	ombroE.position.x= tronco.position.y-3;

  //pivot do ombro esquerdo
  let pivotOmbroE = new THREE.Group();
	puppet["pivotOmbroE"] = pivotOmbroE;
	ombroE.add(pivotOmbroE);

  //parte superior do braco esquerdo
  let bracoE = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["bracoE"] = bracoE;
	pivotOmbroE.add(bracoE)
	bracoE.position.y-=1.9;

  //cotovelo esquerdo
  let cotoveloE  = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
  puppet["cotoveloE"] = cotoveloE;
	tronco.add(cotoveloE);
  cotoveloE.position.y= tronco.position.y-0.6;
	cotoveloE.position.x= tronco.position.y-3;

  //pivot do cotovelo esquerdo
  let pivotCotoveloE = new THREE.Group();
	puppet["pivotCotoveloE"] = pivotCotoveloE;
	cotoveloE.add(pivotCotoveloE);

  //parte inferior do braco esquerdo
  let pulsoE = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["pulsoE"] = pulsoE;
	pivotCotoveloE.add(pulsoE);
	pulsoE.position.y-=1.7;

  //perna direita
  //base da perna direita (bacia)
  let basePD = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
	puppet["basePD"] = basePD;
  tronco.add(basePD);
	basePD.position.y= tronco.position.y-4.3;
	basePD.position.x= tronco.position.y+1.5;

  //pivot para a base da perna direita
  let pivotBasePD = new THREE.Group();
	puppet["pivotBasePD"] = pivotBasePD;
	basePD.add(pivotBasePD);

  //coxa da perna direita
  let coxaD = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["coxaD"] = coxaD;
	pivotBasePD.add(coxaD)
	coxaD.position.y-=1.9;

  //joelho da perna direita
  let joelhoD = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
  puppet["joelhoD"] = joelhoD;
	tronco.add(joelhoD);
  joelhoD.position.y= tronco.position.y-8;
	joelhoD.position.x= tronco.position.y+1.5;

  //pivot para o joelho direito
  let pivotJoelhoD = new THREE.Group();
	puppet["pivotJoelhoD"] = pivotJoelhoD;
	joelhoD.add(pivotJoelhoD);

  //canela, parte inferior da perna direita
  let canelaD = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["canelaD"] = canelaD;
	pivotJoelhoD.add(canelaD)
	canelaD.position.y-=1.9;


  //perna esquerda

  let basePE = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
	puppet["basePE"] = basePE;
  tronco.add(basePE);
	basePE.position.y= tronco.position.y-4.3;
	basePE.position.x= tronco.position.y-1.5;

  //pivot da base esquerda
  let pivotBasePE = new THREE.Group();
	puppet["pivotBasePE"] = pivotBasePE;
	basePE.add(pivotBasePE);

  //parte superior da perna esquerda
  let coxaE = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["coxaE"] = coxaE;
	pivotBasePE.add(coxaE)
	coxaE.position.y-=1.9;

  //joelho da perna esquerda
  let joelhoE = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
  puppet["joelhoE"] = joelhoE;
  tronco.add(joelhoE);
  joelhoE.position.y= tronco.position.y-8;
  joelhoE.position.x= tronco.position.y-1.5;

  //pivot para o joelho esquerdo
  let pivotJoelhoE = new THREE.Group();
  puppet["pivotJoelhoE"] = pivotJoelhoE;
  joelhoE.add(pivotJoelhoE);

  //canela, parte inferior da perna esquerda
  let canelaE = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), new THREE.MeshBasicMaterial({color: red}));
  puppet["canelaE"] = canelaE;
  pivotJoelhoE.add(canelaE)
  canelaE.position.y-=1.9;


  elementos["puppet"] = puppet;
	scene.add(tronco);

};

var init = function (){
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 150);

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	camera.position.z =80;
	camera.position.x = 0;
	camera.position.y = 2;

	criaMonstro();

  animation();

	document.addEventListener('keydown', apertouButao);
	document.addEventListener('keyup', soltouBotao);


};

var key_space = false;
var key_r = false;
var key_q = false;
var key_w = false;
var key_e = false;

var soltouBotao = function(e){

	if (e.keyCode == 82){
		key_r = false;
	}
	if (e.keyCode == 32){
		key_space = false;
	}
	if (e.keyCode == 81){
		key_q = false;
	}
	if (e.keyCode == 87){
		key_w = false;
	}
	if (e.keyCode == 69){
		key_e = false;
	}


}

var apertouButao =  function(e){
	console.log(e.keyCode);

	if (e.keyCode == 82){
		key_r = true;
	}
	if (e.keyCode == 32){
		key_space = true;
	}

	if (e.keyCode == 81){
		key_q = true;
	}

	if (e.keyCode == 87){
		key_w = true;
	}

	if (e.keyCode == 69){
		key_e = true;
	}


}

var velocidadeC = -0.03;
var velocidadeJ = 0.03;

var animation = function(){
  requestAnimationFrame(animation);

	if(key_w){ //cotovelo direito
		if (elementos["puppet"]["pivotCotoveloD"].rotation.x < -2.83 || elementos["puppet"]["pivotCotoveloD"].rotation.x > 0 )
			velocidadeC*=-1;
		elementos["puppet"]["pivotCotoveloD"].rotation.x += velocidadeC;

	}
	if(key_q){ //cotovelo esquerdo
		if (elementos["puppet"]["pivotCotoveloE"].rotation.x < -2.83 || elementos["puppet"]["pivotCotoveloE"].rotation.x > 0 )
			velocidadeC*=-1;
		elementos["puppet"]["pivotCotoveloE"].rotation.x += velocidadeC;

	}
	if(key_e){
		if (elementos["puppet"]["pivotJoelhoD"].rotation.x > 1.33 || elementos["puppet"]["pivotJoelhoD"].rotation.x < 0){
			velocidadeJ*=-1;
		}

		elementos["puppet"]["pivotJoelhoD"].rotation.x +=velocidadeJ;
		//console.log(elementos["puppet"]["pivotJoelhoD"].rotation.x);

	}
	if(key_r){
		if (elementos["puppet"]["pivotJoelhoE"].rotation.x > 1.33 || elementos["puppet"]["pivotJoelhoE"].rotation.x < 0){
			velocidadeJ*=-1;
		}

		elementos["puppet"]["pivotJoelhoE"].rotation.x +=velocidadeJ;
		

	}
	if(key_space){


	}
  renderer.render(scene, camera)

};



window.onload = this.init
