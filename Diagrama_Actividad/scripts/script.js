function init() {
  var $ = go.GraphObject.make;
  
  var myDiagram =
    $(go.Diagram, "myDiagramDiv",
      {
        "undoManager.isEnabled": true,
        layout: $(go.TreeLayout, {
          angle: 180,
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
        { width: 8, height: 8, fill: "green", portId: "left", fromLinkable: true, toLinkable: false }),
      $(go.Panel, "Auto",
        { width: 50, height: 50, background: "white" },
        $(go.Shape, "Rectangle", { fill: "white", stroke: "black", strokeWidth: 1 }),
        $(go.Picture, { width: 40, height: 40, margin: 5, background: "white" },
          new go.Binding("source", "source"))
      ),
      $(go.Panel, "Auto",
        { height: 50, width: 85, background: "black" },
        $(go.Shape, "Rectangle", { fill: "black", stroke: "black", strokeWidth: 1 }),
        $(go.TextBlock,
          { margin: 5, stroke: "white", font: "bold 14px sans-serif" },
          new go.Binding("text", "name"))
      ),
      $(go.Panel, "Auto",
        { width: 45, height: 50, background: "blue" },
        $(go.Shape, "Rectangle", { fill: "blue", stroke: "black", strokeWidth: 1, portId: "right", fromLinkable: false, toLinkable: true }),
        $(go.TextBlock,
          {
            margin: 5,
            stroke: "white",
            font: "bold 14px sans-serif",
            textAlign: "center",
            editable: true
          },
          new go.Binding("text", "description"))
      ),
      $(go.Shape, "Circle",
        { width: 8, height: 8, fill: "green", portId: "right", fromLinkable: false, toLinkable: true })
    );

  myDiagram.linkTemplate =
    $(go.Link,
      { routing: go.Link.AvoidsNodes, toEndSegmentLength: 20, toShortLength: 2 },
      $(go.Shape, { strokeWidth: 2, stroke: "black" })
    );

  var nodeDataArray = [
    { key: 0, name: "Karmine Corp", source: "/imagenes/Karmine_Corp.png", description: "2", parent: 8  },
    { key: 1, name: "FunPlus Phoenix", source: "/imagenes/FunPlus_Phoenix.png", description: "0", parent: 8 },
    { key: 2, name: "Gen.G", source: "/imagenes/Gen.G_Esports.png", description: "2", parent: 9},
    { key: 3, name: "LOUD", source: "/imagenes/LOUD.png", description: "1", parent: 9 },
    { key: 4, name: "EDward Gaming", source: "/imagenes/EDward_Gaming.png", description: "2", parent:10 },
    { key: 5, name: "PAPER REX", source: "/imagenes/Paper_Rex.png", description: "1", parent:10 },
    { key: 6, name: "Sentinels", source: "/imagenes/Sentinels.png", description: "2", parent: 11 },
    { key: 7, name: "Team Heretics", source: "/imagenes/Team_Heretics.png", description: "1", parent: 11},
    { key: 8, name: "Karmine Corp", source: "/imagenes/Karmine_Corp.png", description: "0", parent: 12},
    { key: 9, name: "Gen.G", source: "/imagenes/Gen.G_Esports.png", description: "2", parent: 13},
    { key: 10, name: "EDward Gaming", source: "/imagenes/EDward_Gaming.png", description: "1", parent: 13},
    { key: 11, name: "Sentinels", source: "/imagenes/Sentinels.png", description:"2", parent: 12},
    { key: 12, name: "Sentinels", source: "/imagenes/Sentinels.png", description:"3", parent: 14},
    { key: 13, name: "Gen.G", source: "/imagenes/Gen.G_Esports.png", description:"2", parent: 14},
    { key: 14, name: "Sentinels", source: "/imagenes/Sentinels.png", description: ""}
  ];

  myDiagram.model = new go.TreeModel(nodeDataArray);
}

init();
