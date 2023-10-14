const containerRoadmaps = document.querySelector("#DSAinCRoadmaps");
const containerVideoLectures = document.querySelector("#Video-Tutorials");
const containerNotes = document.querySelector("#Notes");
const containerQuestionSheet = document.querySelector("#Question-Sheet");
const containerContentCreators = document.querySelector("#Content-Creators");
const containerInterviewExperience = document.querySelector(
  "#Interview-Experinece"
);
const RoadmapsArray = [
  {
    Url: "http://graphicburger.com/mobile-game-gui/",
    Cost: "free",
    Description:
      "Cartoon user interface asset pack. It comes as a layered psd file.",
    Credits: "Graphic Burger.com",
  },
  {
    Url: "http://7soul1.deviantart.com/art/420-Pixel-Art-Icons-for-RPG-129892453",
    Cost: "free",
    Description: "Set of 420 RPG icons, free for commercial use.",
    Credits: "Devianart.com",
  },
  {
    Url: "http://www.gameartguppy.com/shop/",
    Cost: "free",
    Description: "GameartGuppy - Cheap 2D Assets",
    Credits: "GamerartGuppy",
  },
  {
    Url: "http://game-icons.net/",
    Cost: "free",
    Description: "Free icons for your games.",
    Credits: "GameIcon.net",
  },
  {
    Url: "http://iconmonstr.com/",
    Cost: "free",
    Description: "Another free icons resource for your games.",
    Credits: "iconmonstr.com",
  },
  {
    Url: "http://kenney.nl/assets",
    Cost: "free",
    Description: "Royalty free assets",
    Credits: "Kenney.nl",
  },
  {
    Url: "https://openclipart.org/",
    Cost: "free",
    Description: "Collection of free cliparts.",
    Credits: "OpenClipart.org",
  },
  {
    Url: "http://oryxdesignlab.com/",
    Cost: "free",
    Description: "Cheap high quality royalty free sprites",
    Credits: "oryxdesignlab.com",
  },
  {
    Url: "http://www.widgetworx.com/spritelib/",
    Cost: "free",
    Description: "A collection of static and animated graphic objects",
    Credits: "SpriteLib",
  },
  {
    Url: "http://finalbossblues.com/timefantasy/",
    Cost: "free",
    Description: "Lovely SNES-Looking RPG Assets",
    Credits: "Time Fantasy",
  },
  {
    Url: "https://www.blender-models.com/",
    Cost: "free",
    Description: "3D models, particle systems/effects",
    Credits: "Blender-models.com",
  },
  {
    Url: "https://github.com/nidorx/matcaps#matcaps",
    Cost: "free",
    Description: "A Huge library of matcap textures in PNG and ZMT",
    Credits: "Matcaps",
  },
  {
    Url: "https://poly.pizza/",
    Cost: "free",
    Description: "Searchable library of low poly creative commons 3D models",
    Credits: "Polly.Piza",
  },
  {
    Url: "http://www.reinerstilesets.de/",
    Cost: "free",
    Description: "A blog with free 2D and 3D graphics.",
    Credits: "reinerstilesets.de",
  },
  {
    Url: "https://www.3dmodelscc0.com/",
    Cost: "free",
    Description: "Public domain 3D models",
    Credits: "3dmodelscc0.com",
  },
  {
    Url: "https://gamesounds.xyz/",
    Cost: "free",
    Description: "Archive of all kinds of royalty-free game sounds.",
    Credits: "gamesounds.xyz",
  },
  {
    Url: "http://freepd.com/",
    Cost: "free",
    Description: "Public Domain Music",
    Credits: "freepd.com",
  },
  {
    Url: "http://www.freesfx.co.uk/",
    Cost: "free",
    Description: "Free sound effects",
    Credits: "www.freesfx.co.uk",
  },
  {
    Url: "http://www.freesound.org/",
    Cost: "free",
    Description: "Collaborative database of Creative Commons Licensed sounds",
    Credits: "www.freesound.org",
  },
  {
    Url: "https://github.com/Kavex/GameSounds",
    Cost: "free",
    Description: "Free sounds for any use",
    Credits: "Kavex",
  },
  {
    Url: "https://musopen.org/",
    Cost: "free",
    Description: "Royalty free music.",
    Credits: "Musopen",
  },
  {
    Url: "https://boxcat.bandcamp.com/album/nameless-the-hackers-rpg-soundtrack",
    Cost: "free",
    Description: "High-quality by BoxCat Games",
    Credits: "Nameless",
  },
  {
    Url: "http://raisedbeaches.com/octave/index.html",
    Cost: "free",
    Description: "Free library of UI sounds, handmade for iOS.",
    Credits: "Octave",
  },
  {
    Url: "http://www.pacdv.com/sounds/index.html",
    Cost: "free",
    Description: "Royalty free sounds collection.",
    Credits: "www.pacdv.com",
  },
  {
    Url: "http://soundbible.com/",
    Cost: "free",
    Description: "Royalty-free of sound effects under various licenses.",
    Credits: "soundbible.com",
  },
  {
    Url: "http://www.textures.com/",
    Cost: "free",
    Description: "A large collection of textures.",
    Credits: "www.textures.com",
  },
  {
    Url: "https://www.gamedevmarket.net/",
    Cost: "free",
    Description: "Connects indie game developers with talented asset creators.",
    Credits: "www.gamedevmarket.net",
  },
  {
    Url: "https://www.lotpixel.com/",
    Cost: "free",
    Description: "A huge assets library",
    Credits: "www.lotpixel.com",
  },
  {
    Url: "http://opengameart.org/",
    Cost: "free",
    Description:
      "A media repository intended for use with free software game projects.",
    Credits: "opengameart.org",
  },
  {
    Url: "http://www.plaintextures.com/",
    Cost: "free",
    Description: "Free high resolution textures, brushes and photos",
    Credits: "www.plaintextures.com",
  },
  {
    Url: "https://sketchfab.com/",
    Cost: "free",
    Description: "Publish & embed interactive 3D models.",
    Credits: "sketchfab.com",
  },
  {
    Url: "http://www.vecteezy.com/",
    Cost: "free",
    Description: "Free Vector Art.",
    Credits: "www.vecteezy.com",
  },
];
const VideoTutorials = [
  {
    Url: "http://liballeg.org/",
    Cost: "free",
    Description:
      " Allegro 4 & 5 are cross-platform, open source, game programming libraries",
    Credits: "Allegro",
  },
  {
    Url: "https://github.com/bladecoder/bladecoder-adventure-engine",
    Cost: "free",
    Description: "Classic point and click adventure game engine and editor.",
    Credits: "Bladecoder",
  },
  {
    Url: "http://box2d.org/",
    Cost: "free",
    Description: "A 2D Physics Engine for Games.",
    Credits: "box2d.org",
  },
  {
    Url: "https://github.com/netonjm/ChipmunkSharp",
    Cost: "free",
    Description: "C# implementation of the Chipmunk2D lib.",
    Credits: "Netojm",
  },
  {
    Url: "https://chipmunk-physics.net/",
    Cost: "free",
    Description: "A fast and lightweight 2D game physics library.",
    Credits: "chipmunk-physics.net",
  },
  {
    Url: "https://github.com/los-cocos/cocos",
    Cost: "free",
    Description:
      "Graphic library for games and multimedia, for python language",
    Credits: "Cocos-2d",
  },
  {
    Url: "http://cocos2d-x.org/",
    Cost: "free",
    Description:
      "A C++ OpenGL 2D and 3D game engine. Uses C++ but has JS and Lua bindings.",
    Credits: "Cocos2d-x.org",
  },
  {
    Url: "https://www.scirra.com/",
    Cost: "free",
    Description:
      "An HTML5 game maker, meaning you are not actually writing JavaScript. ",
    Credits: "Scirra.com",
  },
  {
    Url: "http://coquette.maryrosecook.com/",
    Cost: "free",
    Description: "A micro framework for JavaScript games.",
    Credits: "Coquette.maryrosecook.com",
  },
  {
    Url: "http://www.defold.com/",
    Cost: "free",
    Description: "2D game engine by King",
    Credits: "Defold.com",
  },
  {
    Url: "https://easyrpg.org/",
    Cost: "free",
    Description:
      "Role playing game creation tool compatible with RPG Maker 2000/2003 games",
    Credits: "easyrpg.org",
  },
  {
    Url: "https://github.com/ajhager/engi",
    Cost: "free",
    Description: "A multi-platform 2D game library for Go.",
    Credits: "Ajhager",
  },
  {
    Url: "http://impactjs.com/ejecta",
    Cost: "free",
    Description:
      "A Fast, Open Source JavaScript, Canvas & Audio Implementation for iOS.",
    Credits: "impactjs.com",
  },
  {
    Url: "https://www.yoyogames.com/",
    Cost: "free",
    Description: "Very good 2d engine if you are only interested in 2d",
    Credits: "www.yoyogames.com",
  },
  {
    Url: "http://azul3d.org/",
    Cost: "free",
    Description: "A 3D engine written in Go.",
    Credits: "azul3d.org",
  },
  {
    Url: "https://github.com/bkaradzic/bgfx",
    Cost: "free",
    Description: "Cross-platform, graphics API agnostic",
    Credits: "Bkaradzic",
  },
  {
    Url: "https://bevyengine.org/",
    Cost: "free",
    Description: "A data-driven game engine in the form of a Rust library.",
    Credits: "bevyengine.org",
  },
  {
    Url: "https://github.com/bulletphysics/bullet3",
    Cost: "free",
    Description: "Real-time physics simulation.",
    Credits: "Bulletphysics",
  },
  {
    Url: "https://libcinder.org/",
    Cost: "free",
    Description: "Library for professional-quality creative coding in C++.",
    Credits: "libcinder.org",
  },
  {
    Url: "https://github.com/Circular-Studios/Dash",
    Cost: "free",
    Description: "A free and open 3D game engine written in D.",
    Credits: "Circular-Studios",
  },
  {
    Url: "http://gameplay3d.io/",
    Cost: "free",
    Description: "2D + 3D game framework written in C++",
    Credits: "gameplay3d.io",
  },
  {
    Url: "https://playcanvas.com/",
    Cost: "free",
    Description: "A WebGL Game Engine with limited free",
    Credits: "playcanvas.com",
  },
  {
    Url: "https://github.com/Rajawali/Rajawali",
    Cost: "free",
    Description: "Android OpenGL ES 2.0/3.0 Engine",
    Credits: "Rajawali",
  },
  {
    Url: "https://developer.valvesoftware.com/wiki/Main_Page",
    Cost: "free",
    Description: "Valve's Flagship engine",
    Credits: "Developer.valvesoftware.com",
  },
  {
    Url: "http://threejs.org/",
    Cost: "free",
    Description: "Javascript 3D Library.",
    Credits: "threejs.org",
  },
  {
    Url: "https://www.unrealengine.com/",
    Cost: "free",
    Description: "The new game engine technology developed by Epic Games.",
    Credits: "www.unrealengine.com",
  },
];
const Notes = [
  {
    Url: "https://github.com/NickeManarin/ScreenToGif",
    Cost: "free",
    Description: "Record a selected area of your screen and save it as a Gif",
    Credits: "NickeManarin",
  },
  {
    Url: "http://dragonbones.effecthub.com/",
    Cost: "free",
    Description: "The Open Source 2D skeleton animation solution for Flash",
    Credits: "dragonbones.effecthub.com",
  },
  {
    Url: "http://gree.github.io/lwf/",
    Cost: "free",
    Description: "Lightweight SWF",
    Credits: "LWF",
  },
  {
    Url: "http://ardour.org/",
    Cost: "free",
    Description: "A multichannel digital audio workstation",
    Credits: "Ardour.org",
  },
  {
    Url: "http://sourceforge.net/projects/audacity/",
    Cost: "free",
    Description: "Cross-platform software for recording and editing sounds.",
    Credits: "Audacity",
  },
  {
    Url: "http://sfbgames.com/chiptone/",
    Cost: "free",
    Description: "Online sound effect generator",
    Credits: "Sfb Games",
  },
  {
    Url: "http://famitracker.com/",
    Cost: "free",
    Description: "Produce music for the NES/Famicom-systems",
    Credits: "Famitracker.com",
  },
  {
    Url: "http://jfxr.frozenfractal.com/",
    Cost: "free",
    Description: "A JavaScript port of the Bfxr sound effect generator.",
    Credits: "jfxr.frozenfractal.com",
  },
  {
    Url: "https://lmms.io/",
    Cost: "free",
    Description: "Digital audio workstation software",
    Credits: "lmms.io",
  },
  {
    Url: "http://www.drpetter.se/project_musagi.html",
    Cost: "free",
    Description: "Fairly large and sophisticated music editor and synthesizer",
    Credits: "www.drpetter.se",
  },
  {
    Url: "http://www.pulseboy.com/",
    Cost: "free",
    Description: "Web-based musical sequencer which only uses 8bit sounds and samples",
    Credits: "www.pulseboy.com",
  },
  {
    Url: "http://openmidiproject.osdn.jp/Sekaiju_en.html",
    Cost: "free",
    Description: "Open Source MIDI sequencer.",
    Credits: "openmidiproject.osdn.jp",
  },
  {
    Url: "http://pngmini.com/",
    Cost: "free",
    Description: "Mac OS X GUI for pngquant and other tools",
    Credits: "pngmini.com",
  },
  {
    Url: "https://github.com/adobe-photoshop/generator-assets",
    Cost: "free",
    Description: "Easy export layers to files.",
    Credits: "Adobe-photoshop",
  },
  {
    Url: "http://pnggauntlet.com/",
    Cost: "free",
    Description: "Smash PNGs for faster sites",
    Credits: "pnggauntlet.com",
  },
  {
    Url: "http://nukesaq88.github.io/guyPn/",
    Cost: "free",
    Description: "Simple PNG image file compression tool.",
    Credits: "guyPn",
  },
  {
    Url: "http://charas-project.net/index.php",
    Cost: "free",
    Description: "Charas is a charset generator for RPG Maker.",
    Credits: "charas-project.net",
  },
  {
    Url: "http://www.dundoc.com/",
    Cost: "free",
    Description: "Game Design starter Template",
    Credits: "www.dundoc.com",
  },
  {
    Url: "http://twinery.org/",
    Cost: "free",
    Description: "Open-source tool for telling interactive, nonlinear stories.",
    Credits: "Twinery.org",
  },
  {
    Url: "https://atom.io/",
    Cost: "free",
    Description: "Highly customizable open source text editor",
    Credits: "atom.io",
  },
  {
    Url: "https://notepad-plus-plus.org/",
    Cost: "free",
    Description: "Notepad replacement that supports several languages.",
    Credits: "notepad-plus-plus.org",
  },
  {
    Url: "http://www.sublimetext.com/",
    Cost: "free",
    Description: "Sophisticated text editor for code, markup and prose.",
    Credits: "www.sublimetext.com",
  },
  {
    Url: "http://www.autodesk.com/products/3ds-max/overview",
    Cost: "free",
    Description: "Industry modeling software",
    Credits: "www.autodesk.com",
  },
  {
    Url: "http://tilemap.co.uk/mappy.php",
    Cost: "free",
    Description: "Free tilemap editor.",
    Credits: "tilemap.co.uk",
  },
  {
    Url: "https://github.com/guillaumechereau/goxel",
    Cost: "free",
    Description: "Open source 3D voxel editor",
    Credits: "guillaumechereau",
  },
  {
    Url: "https://www.udacity.com/course/interactive-3d-graphics--cs291",
    Cost: "free",
    Description: "Interactive 3D Graphics by Google",
    Credits: "Udacity",
  },
  {
    Url: "https://instabug.com/platforms/unity",
    Cost: "free",
    Description: "Bug Reporting tool for Unity that enables beta users to send feedback in-app.",
    Credits: "instabug.com",
  },
];

const InsertHtml = `
<section class="Resources-list" >
<a target="_blank" href="$\{Url}" class="linked">
  <div class="Listitem">
    <div class="Source">
      <img src="../../Images/URL.png" alt="" class="link" />
      <p class="Discript">$\{Description}</p>
      <p class="free-paid" id="\${Cost}">\${Costp}</p>
    </div>
    <div class="Discription-of-list">
      <p class="credits">$\{Credits}</p>
    </div>
  </div>
</a>
</section>
`;

RoadmapsArray.forEach((link) => {
  const html = InsertHtml;
  const Url = link.Url;
  const Description = link.Description;
  const Cost = link.Cost;
  const Costp = link.Cost;
  const Credits = link.Credits;
  const Replaced = html
    .replace(/\${Url}/g, Url)
    .replace(/\${Description}/g, Description)
    .replace(/\${Cost}/g, Cost)
    .replace(/\${Costp}/g, Cost.charAt(0).toUpperCase())
    .replace(/\${Credits}/g, Credits);
  containerRoadmaps.insertAdjacentHTML("beforeend", Replaced);
});
VideoTutorials.forEach((link) => {
  const html = InsertHtml;
  const Url = link.Url;
  const Description = link.Description;
  const Cost = link.Cost;
  const Credits = link.Credits;
  const Replaced = html
    .replace(/\${Url}/g, Url)
    .replace(/\${Description}/g, Description)
    .replace(/\${Cost}/g, Cost)
    .replace(/\${Costp}/g, Cost.charAt(0).toUpperCase() + Cost.slice(1))
    .replace(/\${Credits}/g, Credits);
  containerVideoLectures.insertAdjacentHTML("beforeend", Replaced);
});

Notes.forEach((link) => {
  const html = InsertHtml;
  const Url = link.Url;
  const Description = link.Description;
  const Cost = link.Cost;
  const Credits = link.Credits;
  const Replaced = html
    .replace(/\${Url}/g, Url)
    .replace(/\${Description}/g, Description)
    .replace(/\${Cost}/g, Cost)
    .replace(/\${Costp}/g, Cost.charAt(0).toUpperCase() + Cost.slice(1))
    .replace(/\${Credits}/g, Credits);
  containerNotes.insertAdjacentHTML("beforeend", Replaced);
});
