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
    { key: 0, name: "Xubuntu", source: "https://www.linuxadictos.com/wp-content/uploads/Xubuntu_logo.svg_-830x830.png", description: "2", parent: 9},
    { key: 1, name: "Kubuntu", source: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Kubuntu_logo.svg", description: "1", parent:4},
    { key: 2, name: "Suse", source: "https://education.hpe.com/assets/images/SUSE_logo-green.png", description: "0",parent:10},
    { key: 3, name: "Arch Linux", source: "https://www.muylinux.com/wp-content/uploads/2012/03/Arch-Linux.png", description: "2", parent: 7},
    { key: 4, name: "Ubuntu", source: "https://imageio.forbes.com/blogs-images/jasonevangelho/files/2018/07/ubuntu-logo.jpg?format=jpg&height=900&width=1600&fit=bounds", description: "1", parent: 5},
    { key: 5, name: "DEBIAN", source: "https://www.chip.de/ii/6/1/8/2/2/1/4/debian-logo-vertical-ae0babd339367d29.gif", description:"2", parent: 7},
    { key: 6, name: "RED HAT", source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Red_Hat_logo.svg/640px-Red_Hat_logo.svg.png", description:"3",parent: 7},
    { key: 7, name: "Linux", source: "https://hostings.ar/wp-content/uploads/2023/11/Linux-Logo-1996-present.png", description:"2", parent: 8},
    { key: 8, name: "GNU", source: "https://upload.wikimedia.org/wikipedia/commons/8/83/The_GNU_logo.png", description: "Es el padre de Linux"},
    { key: 9, name: "Linux Mint", source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Linux_Mint_logo_without_wordmark.svg/2048px-Linux_Mint_logo_without_wordmark.svg.png", description:"2", parent: 4},
    { key: 10, name: "Slack Ware", source: "https://www.muylinux.com/wp-content/uploads/2011/04/slackware-13.37.jpg" , description:"2", parent: 7},
  ];

  myDiagram.model = new go.TreeModel(nodeDataArray);
}


init();
