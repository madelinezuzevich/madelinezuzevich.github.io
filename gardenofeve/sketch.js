 let ctrls = {
    //texture beneath water
    garden:"data:image/jpeg;base64,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"
 }

 //Defining the Room
      let model_settings = {
          folder: "https://models.babylonjs.com/", 
          file: "CornellBox/cornellBox.glb",
         color: {r:0, g:0, b:0},
          scale: 2,
          position: {x: 0, y: 1, z: 0},
          rotation: {x: 0, y:0, z: 0}
      }; 

                 let model_settings3 = {
          folder: "https://models.babylonjs.com/", 
          file: "fish.glb",
         color: {r:0, g:0, b:0},
          scale: 100,
          position: {x: -3, y: 0, z: 0},
          rotation: {x: 0, y: 0, z: 0}
      }; 


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
   
    var scene = new BABYLON.Scene(engine);

//Camera position
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

    // Scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // let tgt = model_settings.position; 
    // camera.setTarget(BABYLON.Vector3(tgt.x, tgt.y, tgt.z));

    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1.
    light.intensity = .8;

    //Importing the Room

    BABYLON.SceneLoader.ImportMesh(
        null,
         model_settings.folder,
        model_settings.file,
        scene,
        function (meshes) { 
            var mat = new BABYLON.StandardMaterial('colormat', scene);
            mat.diffuseColor = new BABYLON.Color3(model_settings.color.r, model_settings.color.g, model_settings.color.b); 
            meshes[0].StandardMaterial = mat; 
            meshes[0].position = new BABYLON.Vector3(model_settings.position.x, model_settings.position.y, model_settings.position.z); 
            meshes[0].rotation = new BABYLON.Vector3(model_settings.rotation.x, model_settings.rotation.y, model_settings.rotation.z);
            //meshes[0].rotation.x += MATH.PI/2; 
            meshes[0].scaling = new BABYLON.Vector3(model_settings.scale, model_settings.scale, model_settings.scale);
                     
    });
        //Importing the third object

         BABYLON.SceneLoader.ImportMesh(
        null,
         model_settings3.folder,
        model_settings3.file,
        scene,
        function (meshes) { 
            var mat = new BABYLON.StandardMaterial('colormat', scene);
            mat.diffuseColor = new BABYLON.Color3(model_settings2.color.r, model_settings2.color.g, model_settings2.color.b); 
            meshes[0].StandardMaterial = mat; 
            meshes[0].position = new BABYLON.Vector3(model_settings2.position.x, model_settings2.position.y, model_settings2.position.z); 
            meshes[0].rotation = new BABYLON.Vector3(model_settings2.rotation.x, model_settings2.rotation.y, model_settings2.rotation.z);
            //meshes[0].rotation.x += MATH.PI/2; 
            meshes[0].scaling = new BABYLON.Vector3(model_settings2.scale, model_settings2.scale, model_settings2.scale);
                     
    });

        //Creating the Skybox

var skyMaterial = new BABYLON.SkyMaterial("skyMaterial", scene);
skyMaterial.backFaceCulling = false;

var skybox = BABYLON.Mesh.CreateBox("skyBox", 1000.0, scene);
skybox.material = skyMaterial;
skyMaterial.turbidity = 2;
skyMaterial.luminance = 0.1;
skyMaterial.inclination = 0.3;


//Creating the Ground
    var groundTexture = new BABYLON.Texture(ctrls.seafloor, scene);
    groundTexture.vScale = groundTexture.uScale = 4.0;
    
    var groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
    groundMaterial.diffuseTexture = groundTexture;

var ground = BABYLON.Mesh.CreateGround("ground", 512, 512, 32, scene);
    ground.position.y = -1;
    ground.material = groundMaterial;

//Creating the Water

var waterMaterial = new BABYLON.WaterMaterial("water_material", scene);
waterMaterial.bumpTexture = new BABYLON.Texture("waterbump.png", scene); // Set the bump texture

ground.material = waterMaterial;
waterMaterial.addToRenderList(skybox);
waterMaterial.windForce = 10;
waterMaterial.waveHeight = .2;
waterMaterial.bumpHeight = 8;
waterMaterial.waveLength = -.1;

        //Creating the Garden Ground inside the Room

  var groundTexture = new BABYLON.Texture(ctrls.garden, scene);
    groundTexture.vScale = groundTexture.uScale = 4.0;
    
    var groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
    groundMaterial.diffuseTexture = groundTexture;


     var ground = BABYLON.MeshBuilder.CreateGround("ground", {width:7.8, height: 7.8}, scene);
     ground.position.y = 1.1;
     ground.position.x = 0;
     ground.position.z = -.3;
     ground.material = groundMaterial;



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