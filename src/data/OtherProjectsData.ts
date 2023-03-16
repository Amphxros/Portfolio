import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-7", "Aegis Engine", "img/projects/project-6-icon.png", `
    <div class="paragraph">
      <strong>Aegis Engine</strong> is the biggest project I've worked on.
      It's a custom 3D engine built from the ground up available on Windows and Linux.
      It's written on C++ and LUA. Users are able to write the game on LUA in a similar way it's on Unity and they are able to make their games with the assets they desire.
          <div class="paragraph">
            Main features :
            <ul>
            <li>Handling multilingual comunication (C++ to Lua)</li>
            <li>Creation of games using just Lua</li>
            
            </ul>

            <div class="notice">
            Source code available on <a href="https://github.com/Proyecto3Grupo02/Aegis" target="_blank">Github</a>.
            </div>
        </div>
    `, "#11a606", true, true),
  
    new ProjectData("project-10", "TASK", "img/projects/project-10-icon.png", `
    <div class="paragraph">
      <strong> TASK </strong> is a unity tool for recording and replaying input in the editor in a similar way to a TAS.
          <div class="paragraph">
            Main features :
            <ul>
            <li>Custom input system for keyboard and gamepads</li>
            <li>Serialiation of input along the time</li>
            <li> </li>
            </ul>
        </div>
    `, "#111121", false, false),
  
    new ProjectData("project-8", "Trails", "img/projects/project-7-icon.png", `
    <div class="paragraph">
      <strong>Trail </strong> is a unity tool for creating behaviour trees using a visual editor in Unity.
          <div class="paragraph">
            Main features :
            <ul>
            <li>using existing trees as subtrees</li>
            
            </ul>
        </div>
    `, "#111111", false, false),

    
];