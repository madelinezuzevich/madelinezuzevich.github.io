 let ctrls = {
    //Texture for Light Storm
    metal:"data:image/jpeg;base64,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"
}
 
 //Define Cloth 1
      let model_settings = {
          folder: "https://models.babylonjs.com/", 
          file: "clothFolds.glb",
         color: {r:0, g:0, b:0},
          scale: 70,
          position: {x: 3, y: 0, z: 300},
          rotation: {x: 0, y:4, z: 0}
      };

          //Define Cloth 2
                 let model_settings4 = {
          folder: "https://models.babylonjs.com/", 
          file: "clothFolds.glb",
         color: {r:0, g:0, b:0},
          scale:20,
          position: {x: 50, y: 1, z: 0},
          rotation: {x: 4, y: 3, z: 0}
      }; 

             //Define Cloth 3
                 let model_settings5 = {
          folder: "https://models.babylonjs.com/", 
          file: "clothFolds.glb",
         color: {r:0, g:0, b:0},
          scale: 30,
          position: {x: -50, y: 1, z: 0},
          rotation: {x: 0, y: 0, z: 0}
      }; 

               //Define Cloth 4
                 let model_settings6 = {
          folder: "https://models.babylonjs.com/", 
          file: "clothFolds.glb",
         color: {r:0, g:0, b:0},
          scale: 40,
          position: {x: -50, y: 1, z: -20},
          rotation: {x: 0, y: 0, z: 0}
      }; 

                     //Define Cloth 5
                 let model_settings8 = {
          folder: "https://models.babylonjs.com/", 
          file: "clothFolds.glb",
         color: {r:0, g:0, b:0},
          scale: 4,
          position: {x: 30, y: 1, z: -60},
          rotation: {x: 0, y: 0, z: 0}
      }; 

                     //Define Solar System
                 let model_settings7 = {
          folder: "https://models.babylonjs.com/", 
          file: "solar_system.glb",
         color: {r:0, g:0, b:0},
          scale: 3,
          position: {x: 0, y: 8, z: -30},
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
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 2, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // let tgt = model_settings.position; 
    // camera.setTarget(BABYLON.Vector3(tgt.x, tgt.y, tgt.z));

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 1;

     // Skybox
    var skybox = BABYLON.Mesh.CreateBox("skyBox", 1000.0, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/TropicalSunnyDay", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.disableLighting = true;
    skybox.material = skyboxMaterial;

    //Import Cloth 1

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

          //Import Cloth 2

         BABYLON.SceneLoader.ImportMesh(
        null,
         model_settings4.folder,
        model_settings4.file,
        scene,
        function (meshes) { 
            var mat = new BABYLON.StandardMaterial('colormat', scene);
            mat.diffuseColor = new BABYLON.Color3(model_settings4.color.r, model_settings4.color.g, model_settings4.color.b); 
            meshes[0].StandardMaterial = mat; 
            meshes[0].position = new BABYLON.Vector3(model_settings4.position.x, model_settings4.position.y, model_settings4.position.z); 
            meshes[0].rotation = new BABYLON.Vector3(model_settings4.rotation.x, model_settings4.rotation.y, model_settings4.rotation.z);
            //meshes[0].rotation.x += MATH.PI/2; 
            meshes[0].scaling = new BABYLON.Vector3(model_settings4.scale, model_settings4.scale, model_settings4.scale);
                     
    });

          //Import Cloth 3

         BABYLON.SceneLoader.ImportMesh(
        null,
         model_settings5.folder,
        model_settings5.file,
        scene,
        function (meshes) { 
            var mat = new BABYLON.StandardMaterial('colormat', scene);
            mat.diffuseColor = new BABYLON.Color3(model_settings5.color.r, model_settings5.color.g, model_settings5.color.b); 
            meshes[0].StandardMaterial = mat; 
            meshes[0].position = new BABYLON.Vector3(model_settings5.position.x, model_settings5.position.y, model_settings5.position.z); 
            meshes[0].rotation = new BABYLON.Vector3(model_settings5.rotation.x, model_settings5.rotation.y, model_settings5.rotation.z);
            //meshes[0].rotation.x += MATH.PI/2; 
            meshes[0].scaling = new BABYLON.Vector3(model_settings5.scale, model_settings5.scale, model_settings5.scale);
                     
    });

          //Import Cloth 4

         BABYLON.SceneLoader.ImportMesh(
        null,
         model_settings6.folder,
        model_settings6.file,
        scene,
        function (meshes) { 
            var mat = new BABYLON.StandardMaterial('colormat', scene);
            mat.diffuseColor = new BABYLON.Color3(model_settings6.color.r, model_settings6.color.g, model_settings6.color.b); 
            meshes[0].StandardMaterial = mat; 
            meshes[0].position = new BABYLON.Vector3(model_settings6.position.x, model_settings6.position.y, model_settings6.position.z); 
            meshes[0].rotation = new BABYLON.Vector3(model_settings6.rotation.x, model_settings6.rotation.y, model_settings6.rotation.z);
            //meshes[0].rotation.x += MATH.PI/2; 
            meshes[0].scaling = new BABYLON.Vector3(model_settings6.scale, model_settings6.scale, model_settings6.scale);
                     
    });

          //Import Cloth 5

         BABYLON.SceneLoader.ImportMesh(
        null,
         model_settings8.folder,
        model_settings8.file,
        scene,
        function (meshes) { 
            var mat = new BABYLON.StandardMaterial('colormat', scene);
            mat.diffuseColor = new BABYLON.Color3(model_settings8.color.r, model_settings8.color.g, model_settings8.color.b); 
            meshes[0].StandardMaterial = mat; 
            meshes[0].position = new BABYLON.Vector3(model_settings8.position.x, model_settings8.position.y, model_settings8.position.z); 
            meshes[0].rotation = new BABYLON.Vector3(model_settings8.rotation.x, model_settings8.rotation.y, model_settings8.rotation.z);
            //meshes[0].rotation.x += MATH.PI/2; 
            meshes[0].scaling = new BABYLON.Vector3(model_settings8.scale, model_settings8.scale, model_settings8.scale);
                     
    });
          //Import Solar System

         BABYLON.SceneLoader.ImportMesh(
        null,
         model_settings7.folder,
        model_settings7.file,
        scene,
        function (meshes) { 
            var mat = new BABYLON.StandardMaterial('colormat', scene);
            mat.diffuseColor = new BABYLON.Color3(model_settings7.color.r, model_settings7.color.g, model_settings7.color.b); 
            meshes[0].StandardMaterial = mat; 
            meshes[0].position = new BABYLON.Vector3(model_settings7.position.x, model_settings7.position.y, model_settings7.position.z); 
            meshes[0].rotation = new BABYLON.Vector3(model_settings7.rotation.x, model_settings7.rotation.y, model_settings7.rotation.z);
            //meshes[0].rotation.x += MATH.PI/2; 
            meshes[0].scaling = new BABYLON.Vector3(model_settings7.scale, model_settings7.scale, model_settings7.scale);
                     
    });

        //Create Metallic Ground
    var groundTexture = new BABYLON.Texture(ctrls.metal, scene);
    groundTexture.vScale = groundTexture.uScale = 4.0;
    
    var groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
    groundMaterial.diffuseTexture = groundTexture;

var ground = BABYLON.Mesh.CreateGround("ground", 512, 512, 32, scene);
    ground.position.y = -1;
    ground.material = groundMaterial;

        //Create Light Storm Using Water
    var waterMesh = BABYLON.Mesh.CreateGround("waterMesh", 512, 512, 32, scene, false);
    water = new BABYLON.WaterMaterial("water", scene, new BABYLON.Vector2(1024, 1024));
    water.backFaceCulling = true;
    water.bumpTexture = new BABYLON.Texture("textures/waterbump.png", scene);
    water.windForce = 150;
    water.waveHeight = 0.2;
    water.bumpHeight = 8;
    water.waveLength = 100;
    water.colorBlendFactor = 0;
    water.addToRenderList(skybox);
    water.addToRenderList(ground);
    waterMesh.material = water;

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