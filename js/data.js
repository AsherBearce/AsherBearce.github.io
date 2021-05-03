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
    },
    "Volumetric Rendering In Unity 3D": {
        "desc": 'A project exploring volumetric rendering techniques in Unity, in this case to create fluffy clouds.',
        "github": "https://github.com/AsherBearce/UnityClouds",
        "date": "6/12/2020",
        "creator": "Asher Bearce",
        "shortDesc": "After writing my 3D smoke simulation, I wanted to explore a little more about volumetric rendering, this time geared more towards some-what realistic looking clouds.",
        "longDesc": [
            "The goal with this project was to learn a bit more about shaders in Unity. I also wanted to get more practice creating Compute Shaders, which is a way to use the GPU to speed up some very repetitive work, which can be a huge performance boost in some situations. Lastly, I wanted to play around with writing scripts for the Unity Editor so I may be able to implement this into another one of my projects, if I so choose.",
            "^[Screenshots/Clouds/Screenshot1.png]",
            "As you can see from the above screenshot, the achieved effect looks pretty nice. I'm quite happy with how light and fluffy the clouds looked. I achieved this effect by combining both Perlin and Worley noise. Worley noise creates some nice sphere-like shapes, while the perlin noise gives it some nice texture.",
            "For the actual rendering, I'm using a technique called ray-marching. Where effectively you take a ray going from the camera and move along it in small increments, sampling from the cloud texture generated by the noise functions along the ray, and doing some math with that. Unlike my last implementation of volumetric materials, you can control where the clouds render by the use of an axis aligned bounding box, or AABB, to contain it. Using an AABB to constrain the bounds of the clouds actuall offers a nice optimization, so now we only have to march along rays that intersect the bounding box, instead of doing it for every pixel on the screen. Not only that but now the clouds can be rendered from much farther away as I actually know where the clouds start and end.",
            "^[Screenshots/Clouds/ScreenshotCloudGeo.png]",
            "The clouds can also interact with the scene geometry as well, which in my opinion looks very cool. This means that there's some potential to instead use this for variable density fog in something like say a horror game. This effect was achieved by using the depth buffer to tell where along a certain pixel there's geometry, if any.",
            "The editor part of this is pretty bare bones, but it does have the ability to change various settings about the perlin noise map, such as the amplitude, octaves, frequency, etc. In the future, I'd like to expand the editor a little more in some way to give a bit more control over the noise. The noise maps are also calculated using the GPU, and stored in a 3D texture for the ray marching shader to use."
        ]
    },
    "A Simple Chess Game In Unity 3D": {
        "desc": 'A local multiplayer game of chess developed in Unity. Mostly done as a learning project to learn about game development in Unity',
        "github": "https://github.com/AsherBearce/ChessGame",
        "date": "6/7/2020",
        "creator": "Asher Bearce",
        "shortDesc": "This is a very simple 3D chess game using the Unity game engine.",
        "longDesc": [
            "There's not too much to say about this project to be perfectly honest, it's just a simple game of chess with some basic features implemented for an okay user experience. This project was done very much as a learning project to learn more about the Unity Engine.",
            "This project as of writing this isn't finished. There's quite a lot that isn't implemented, as well as a couple bugs. However for my purposes, it seemed good enough.",
            "^[Screenshots/Chess/Screen1.png]",
            "In the above screenshot, you can see a game being played. The bright cyan pieces you can see on the board are the options of where a player can move a selected piece, in this case, the knight on g1. Every piece is represented in a 2D array which represents the board, and implements a method that will return a list of all possible moves that piece can make based on the current board configuration. This makes writing an algorithm to compile all possible moves available to one side pretty simple. Just loop through every square on the board and get the list of possible moves if the piece is a certain color and add it to another big list.",
            "However, getting the list of possible moves for one piece can be a bit tricky in some circumstances. One of the rules of chess is that a player cannot put themselves into check, which is to say that a player can't make a move that would let their opponent capture their king on the next move. This can make things rather complicated, as now for one single piece, it has to look into the future for every possible move and determine if it's corresponding king is in check or not. That involves looking at all the opponents possible moves as well.",
            "^[Screenshots/Chess/ScreenCheckMate.png]",
            "The game also obviously supports win detection, as seen in the above screenshot. Detecting a checkmate is pretty trivial, just look at all the possible moves of the current player, and if every possible move is check, then we know the current player has been checkmated. The game also supports stalemate, which is detected by seeing if the list of possible moves is empty. However, this is the only draw condition the game handles right now. There's no button to draw the game, nor have I implemented a way to detect a draw by repetition.",
            "^[Screenshots/Chess/ScreenshotCastling.png]",
            "Lastly, the game also supports special moves that require special conditions, such as castling and en passant. For castling, the conditions are that both the king and rook can't have moved at all, and there can't be any pieces in between them. The solution I came up with for being able to check those conditions is to keep track of every piece's last move. If there was no last move, then the piece hasn't moved yet in the game. For en passant, a pawn that has traveled 2 squares on the last move can be taken if there's an opposite colored pawn to the left or right of it. Again, this is a matter of checking a potential pawns last move, which we decided to record when we implemented castling.",
            "Overall I'm mostly happy with the way this project turned out. If I was to go back and finish it, I'd probably add online multiplayer, a working settings menu, as well as some enhanced visual assets."
        ]
    },
    "A Toy Operating System in x64 Assembly and C": {
        "desc": 'A mostly for-fun project exploring operating system development and low-level programming.',
        "github": "https://github.com/AsherBearce/AbstractOs",
        "date": "10/18/2020",
        "creator": "Asher Bearce",
        "shortDesc": "This project is a really simple x64 operating system written with a custom bootloader, and kernel. Everything is written from scratch.",
        "longDesc": [
            "I wanted to make this project to learn more about low level programming and how operating systems worked. I wrote everything from scratch, including the boot loader.",
            "^[Screenshots/OS/OSKeyboardDriver.jpg]",
            "Unfortunately, there's not too much to show visually for this, as most of it so far has been driver programming, and general system stuff. The screenshot above is a picture of a much earlier version of my OS running in an emulator called QEMU, and on screen you can see a very rudimentary text editor I wrote to test the keyboard driver I wrote.",
            "At some point in the future, I plan to make this a DOS-like operating system, with a command line, file system, executable files, and a simple programming language. The process of actually getting this to work has been pretty difficult to say the least. The most difficult part has been debugging, as there's no error messages I can see on screen when I go to test the operating system. The only indication of a problem that I have is the emulator turns off repeatedly. One thing that I definitely should do is work on making some debugger tools once I have a more sophisticated kernel working.",
            "Another pretty difficult part of working on this was the build process, as it is very customized and pretty specific. One thing that I plan on creating are some code generation tools that can help write C and Assembly code."
        ]
    },
    /**"A Infinite Voxel World Using Marching Cubes": {
        "desc": 'An ongoing project that implements infinite terrain generated by the marching cubes algorithm.',
        "github": "",
        "date": "4/30/21",
        "creator": "Asher Bearce",
        "shortDesc": "",
        "longDesc": ""
    },**/
};