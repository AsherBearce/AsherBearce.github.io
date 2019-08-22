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
            "Screenshots/console-render/Cube.JPG",
            "Here we see a screenshot of a rotating cube with randomly assigned triangle colors. This model was mainly to test the renderer for debugging purposes.",
            "https://via.placeholder.com/600x560",
            "At this point, the rasterizer has many bugs and is still quite slow. However, I'm mostly happy with the way this turned out. I think the biggest hits in performance come from having to dither the screen color, and perhaps the triangle rasterization algorithm I'm using is rather crude."
        ]
    },
    "Asher Cool Project 2": {
        "desc": `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        "github": "https://github.com/AsherBearce/something",
        "date": "mm/dd/yyyy",
        "creator": "Asher Bearce",
        "shortDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        "longDesc": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ",
            "https://via.placeholder.com/468x600",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            "https://via.placeholder.com/600x560",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur "
        ]
    },
    "Asher Cool Project 3": {
        "desc": `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        "github": "https://github.com/AsherBearce/something",
        "date": "mm/dd/yyyy",
        "creator": "Asher Bearce",
        "shortDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        "longDesc": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ",
            "https://via.placeholder.com/468x600",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            "https://via.placeholder.com/600x560",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur "
        ]
    },
    "Asher Cool Project 4": {
        "desc": `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        "github": "https://github.com/AsherBearce/something",
        "date": "mm/dd/yyyy",
        "creator": "Asher Bearce",
        "shortDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        "longDesc": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ",
            "https://via.placeholder.com/468x600",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            "https://via.placeholder.com/600x560",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur "
        ]
    }
};