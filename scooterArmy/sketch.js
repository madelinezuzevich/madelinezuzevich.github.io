let snowman = class {
    //instantiate a snowman
    constructor(name, height){
        this.name = name;
        this.height = height; 
    }
    build(x, z){
           // Our built-in 'sphere' shape.
    for(let i = 0; i < this.height *1.5; i+=1.5){
        var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", 
            {diameter: 2, segments: 32}, scene);
        sphere.position.y = 1 + i;
        sphere.position.x = x;
        sphere.position.z = z; 
    }

    }
}

let scooter = new snowman('Scooter', 3);
console.log(scooter);


var canvas = document.getElementById("renderCanvas");

var startRenderLoop = function (engine, canvas) {
    engine.runRenderLoop(function () {
        if (sceneToRender && sceneToRender.activeCamera) {
            sceneToRender.render();
        }
    });
}

var engine = null;
var scene = null;
var sceneToRender = null;
var createDefaultEngine = function() { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true,  disableWebGL2Support: false}); };
var createScene = function () {
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

        scooter.build(1, 1); 
             scooter.build(-1, 1); 
              scooter.build(1, -2);
               scooter.build(-1, -2);

 

    // Our built-in 'ground' shape.
    var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);

   //    var mat = new BABYLON.StandardMaterial("mat", scene);
   // mat.diffuseTexture = new BABYLON.Texture("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP47u6pKY4bdxFwSqgCwLhDiGOZ9VHbNf_fkw52sOBkURnWMDCgas895dEqdKDNlr-cX8&usqp=CAU", scene);
   //  sphere.material = mat;


    return scene;
};
        window.initFunction = async function() {
            
            
            var asyncEngineCreation = async function() {
                try {
                return createDefaultEngine();
                } catch(e) {
                console.log("the available createEngine function failed. Creating the default engine instead");
                return createDefaultEngine();
                }
            }

            window.engine = await asyncEngineCreation();
if (!engine) throw 'engine should not be null.';
startRenderLoop(engine, canvas);
window.scene = createScene();};
initFunction().then(() => {sceneToRender = scene                    
});

// Resize
window.addEventListener("resize", function () {
    engine.resize();
});