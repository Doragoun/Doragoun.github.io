function init() {
  var $ = go.GraphObject.make;
  
  var myDiagram =
    $(go.Diagram, "myDiagramDiv",
      {
        "undoManager.isEnabled": true,
        layout: $(go.TreeLayout, {
          angle: 0,
          arrangement: go.TreeLayout.ArrangementVertical,
          nodeSpacing: 40,
          layerSpacing: 40,
          alternateAngle: 270,
          alternateAlignment: go.TreeLayout.AlignmentBus,
          alternateNodeIndent: 20,
          alternateNodeIndentPastParent: 1,
          alternateNodeSpacing: 20,
          alternateLayerSpacing: 40
        }),
        "clickCreatingTool.archetypeNodeData": {
          name: "Nuevo Nodo",
          source: "imagen_predeterminada.jpg",
          description: "Descripción del nuevo nodo"
        },
        initialContentAlignment: go.Spot.Center
      });

  myDiagram.nodeTemplate =
    $(go.Node, "Horizontal",
      $(go.Shape, "Circle",
        { width: 8, height: 8, fill: "red", portId: "left", fromLinkable: true, toLinkable: false }),
      $(go.Panel, "Auto",
        { width: 100, height: 100, background: "white" },
        $(go.Shape, "Rectangle", { fill: "white", stroke: "black", strokeWidth: 1 }),
        $(go.Picture, { width: 95, height: 95, margin: 5, background: "white" },
          new go.Binding("source", "source"))
      ),
      $(go.Panel, "Auto",
        { height: 100, width: 125, background: "black" },
        $(go.Shape, "Rectangle", { fill: "black", stroke: "black", strokeWidth: 1 }),
        $(go.TextBlock,
          { margin: 5, stroke: "white", font: "bold 14px sans-serif" },
          new go.Binding("text", "name"))
      ),
     /* $(go.Panel, "Auto",
        { width: 180, height: 100, background: "gray" },
        $(go.Shape, "Rectangle", { fill: "gray", stroke: "black", strokeWidth: 1, portId: "right", fromLinkable: false, toLinkable: true }),
        $(go.TextBlock,
          {
            margin: 5,
            stroke: "white",
            font: "bold 14px sans-serif",
            textAlign: "Center",
            editable: true
          },
          new go.Binding("text", "description"))
      ),*/
      $(go.Shape, "Circle",
        { width: 8, height: 8, fill: "red", portId: "right", fromLinkable: false, toLinkable: true })
    );

  myDiagram.linkTemplate =
    $(go.Link,
      { routing: go.Link.AvoidsNodes, toEndSegmentLength: 20, toShortLength: 2 },
      $(go.Shape, { strokeWidth: 2, stroke: "black" })
    );

  var nodeDataArray = [
    { key: 0, name: "Xubuntu", source: "./image/Xubuntu.png", description: "2", parent: 9},
    { key: 1, name: "Kubuntu", source: "./image/kubuntu.jpg", description: "1", parent:4},
    { key: 2, name: "Suse", source: "./image/Suse.png", description: "0",parent:10},
    { key: 3, name: "Arch Linux", source: "./image/Arch_Linux.png", description: "2", parent: 7},
    { key: 4, name: "Ubuntu", source: "./image/Ubuntu.png", description: "1", parent: 5},
    { key: 5, name: "DEBIAN", source: "./image/Debian.png", description:"2", parent: 7},
    { key: 6, name: "RED HAT", source: "./image/Red_Hat.png", description:"3",parent: 7},
    { key: 7, name: "Linux", source: "./image/Linux.png", description:"2", parent: 8},
    { key: 8, name: "GNU", source: "https://upload.wikimedia.org/wikipedia/commons/8/83/The_GNU_logo.png", description: "Es el padre de Linux"},
    { key: 9, name: "Linux Mint", source: "./image/Linux_Mint.png", description:"2", parent: 4},
    { key: 10, name: "Slack Ware", source: "./image/slackware.jpg" , description:"2", parent: 7},
  ];

  myDiagram.model = new go.TreeModel(nodeDataArray);
}


init();
