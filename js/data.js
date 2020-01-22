// you can add tabs here as your website gets bigger
const topBarTabs = [{
        "name": "Home",
        "url": "./index.html"
    }
];

// this is just json data of all the projects that you can edit at any time
const projects = {
    "Windows Command Prompt Rasterizer": {
        "desc": `This is a project that creates methods to rasterize 3D models in the windows command prompt in real time, written in C++. Supports .obj files and texture mapping.`,
        "github": "https://github.com/AsherBearce/Console-Rendering",
        "date": "08/22/2019",
        "creator": "Asher Bearce",
        "shortDesc": "A software rasterizer written in C++ for the windows command prompt.",
        "longDesc": [
            "This is a small software rasterizer I wrote to work in the windows command prompt. No external libraries were used, other than some of the standard libraries for manipulating windows in C++. This rasterizer supports perspective correct texture mapping, .obj files vertex colors, and even small fragment-shader like programs.",
            "A lot of this project consisted of finding ways around the technical limitations of the command prompt. One of those limitations being the fact that the command prompt uses only four bits for colors. This means that only around 16 different colors are available. To get around this limitation, I implemented Flyod-Steinberg dithering to help the output of the rasterization look smoother, and appear to have more color capabilities. The big downside with this is that it slows down the rasterization considerably.",
            "^[Screenshots/console-render/Cube.JPG]",
            "Here we see a screenshot of a rotating cube with randomly assigned triangle colors. This model was mainly to test the renderer for debugging purposes.",
            "^[Screenshots/console-render/monkey_smooth.JPG]",
            "At this point, the rasterizer has many bugs and is still quite slow. However, I'm mostly happy with the way this turned out. I think the biggest hits in performance come from having to dither the screen color, and perhaps the triangle rasterization algorithm I'm using is rather crude."
        ]
    },
    "Real Time 3D Smoke Simulation": {
        "desc": `A small project built in the Unity game engine that simulates smoke in real time using parallel computing.`,
        "github": "https://github.com/AsherBearce/AudioVisualizer",
        "date": "10/17/2019",
        "creator": "Asher Bearce",
        "shortDesc": "This is a small real time smoke simulation set to music built in Unity, using the power of parallel computing.",
        "longDesc": [
            "This project was mainly to learn about shaders within Unity, as well as to just make something that's visually appealing. I also wanted to play around with techniques for rendering volumetric materials. In this case I used a technique called \"ray-marching\".",
            "Getting the volumetric rendering working was fairly easy, as a lot of reference existed online for it. The actual simulation, however, was a different story. There wasn't much reference except for technical papers on the subject of computational fluid dynamics.",
            "^[Screenshots/smoke-simulation/Capture.JPG]",
            "I was able to find enough resources to be able to get my simulation working, but not without many problems along the way. I also thought it would be a nice touch to set the smoke emission to some music, and add nice color effects.",
            "YT[https://www.youtube.com/watch?v=apeDLKOxUlk]",
            "Overall, I'm very happy with the way this turned out. I also learned quite a bit about parallel computing on a GPU, and how it can be used in Unity. In the future, I plan on taking the rendering shader that I wrote to create a tool that allows game developers to use volumetric rendering in their games."
        ]
    }
};