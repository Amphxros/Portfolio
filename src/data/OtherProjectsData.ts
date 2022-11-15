import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-7", "Aegis Engine", "img/projects/project-6-icon.png", `
    <div class="paragraph">
      <strong>Aegis Engine</strong> is a 3D game engine built from scratch with C++ and Lua.
          <div class="paragraph">
            Main features :
            <ul>
            <li>Handling multilingual comunication (C++ to Lua)</li>
            <li>Creation of games using just Lua</li>
            </ul>
        </div>
    `, "#11a606", true, true),

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