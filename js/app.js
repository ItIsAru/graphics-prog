//This is a test commit.
//scene camera and renderer set up
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
60, 
window.innerWidth/ window.innerHeight, 
0.1, 
1000); 
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);  

//shape is sphere...starting color white
let geometry = new THREE.SphereGeometry();
let material = new THREE.MeshBasicMaterial({color: "#ffffff"});
let sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

//movement base variables
camera.position.z=10;
let xMotion = 0.1
let yMotion = 0.1
sphere.position.x = 0
sphere.position.y = 0
function animate() {
    requestAnimationFrame(animate);
    //sphere base motion
    sphere.rotation.x += 0.05;
    sphere.rotation.y += 0.05;
    sphere.position.x = sphere.position.x + xMotion;
    sphere.position.y = sphere.position.y + yMotion;
    renderer.render(scene, camera);
    
    //decided to designate color each side
    //x axis conditional boundaries with color
    if (sphere.position.x >=10.5){
        xMotion *= -1;
        sphere.material.color.set("#d8e0BB");  //yellow
    }    else if (sphere.position.x <= -10.5) {
        xMotion *= -1;
        sphere.material.color.set("#b6cec7");  //green
    }

    //y axis conditional boundaries with color
    if (sphere.position.y >=4.6) {
        yMotion *= -1;
        sphere.material.color.set("#86a3c3"); //blue
    }    else if (sphere.position.y <= -4.6) {
        yMotion *= -1;
        sphere.material.color.set("#7268a6"); //purple

    }   
}
//run the sphere
animate();