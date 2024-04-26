function init() {
    if (window.goSamples) goSamples(); // init for these samples -- you don't need to call this
    var $ = go.GraphObject.make;

    myDiagram = new go.Diagram('myDiagramDiv', {
      LayoutCompleted: (e) => {
        e.diagram.nodes.each((n) => {
          var table = n.findObject('TABLE');
          if (table !== null && table.panel._updateScrollBar) table.panel._updateScrollBar(table);
        });
      },
    });

    // support mouse wheel scrolling of table when the mouse is in the table
    myDiagram.toolManager.doMouseWheel = function () {
      // method override requires function, not =>
      var e = this.diagram.lastInput;
      var tab = this.diagram.findObjectAt(e.documentPoint);
      while (tab !== null && !tab._updateScrollBar) tab = tab.panel;
      if (tab !== null) {
        var table = tab.findObject('TABLE');
        if (table) {
          var dir = e.delta > 0 ? -1 : 1;
          var incr = e.shift ? 5 : 1;
          tab._scrollTable(table, incr * dir);
          
        }
        tab._updateScrollBar(table);
        e.handled = true;
        return;
      }
      go.ToolManager.prototype.doMouseWheel.call(this);
    };

    myDiagram.nodeTemplate = $(go.Node,
      'Vertical',
      {
        selectionObjectName: 'SCROLLER',
        resizable: true,
        resizeObjectName: 'SCROLLER',
        portSpreading: go.PortSpreading.None,
      },
      new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
      $(go.TextBlock, { font: 'bold 14px sans-serif' }, new go.Binding('text', 'key')),
      $(go.Panel,
        'Auto',
        $(go.Shape, { fill: 'white' }),
        $('ScrollingTable',
          {
            name: 'SCROLLER',
            desiredSize: new go.Size(NaN, 60), // fixed width
            stretch: go.Stretch.Fill, // but stretches vertically
            defaultColumnSeparatorStroke: 'gray',
            defaultColumnSeparatorStrokeWidth: 0.5,
          },
          new go.Binding('TABLE.itemArray', 'items'),
          new go.Binding('TABLE.column', 'left', (left) => (left ? 2 : 0)),
          new go.Binding('desiredSize', 'size', go.Size.parse).makeTwoWay(go.Size.stringify),
          {
            'TABLE.itemTemplate': $(go.Panel,
              'TableRow',
              {
                defaultStretch: go.Stretch.Horizontal,
                fromSpot: go.Spot.LeftRightSides,
                toSpot: go.Spot.LeftRightSides,
                fromLinkable: true,
                toLinkable: true,
                height: 50,
              },
              new go.Binding('portId', 'name'),
              $(go.TextBlock, { column: 0 }, new go.Binding('text', 'name')),
              $(go.TextBlock, { column: 1 }, new go.Binding('text', 'value'))
            ),
            'TABLE.defaultColumnSeparatorStroke': 'gray',
            'TABLE.defaultColumnSeparatorStrokeWidth': 0.5,
            'TABLE.defaultRowSeparatorStroke': 'gray',
            'TABLE.defaultRowSeparatorStrokeWidth': 0.5,
            'TABLE.defaultSeparatorPadding': new go.Margin(1, 3, 0, 3),
          }
        )
      )
    );

    
    myDiagram.scale = 1.5;

    myDiagram.model = new go.GraphLinksModel({
      linkFromPortIdProperty: 'fromPort',
      linkToPortIdProperty: 'toPort',
      nodeDataArray: [
        {
          key: 'Espacio de direcciones Virtuales',
          left: true,
          loc: '-100 0',
          size: '150 270',
          items: [
            { name: '60Kñ46K', value: "X"},
            { name: '56Kñ60K', value: "X" },
            { name: '52Kñ56K', value: "X" },
            { name: '48Kñ52K', value: "X" },
            { name: '44Kñ48K', value: 7 },
            { name: '40Kñ44K', value: "X" },
            { name: '36Kñ40K', value: 5 },
            { name: '32Kñ36K', value: "X" },
            { name: '28Kñ32K', value: "X"},
            { name: '24Kñ28K', value: "X"},
            { name: '20Kñ24K', value: 3},
            { name: '16Kñ20K', value: 4},
            { name: '12Kñ20K', value: 0},
            { name: '8Kñ12K', value: 6},
            { name: '4Kñ8K', value: 1},
            { name: '0Kñ4k', value: 2},
          ],
        },
        {
          key: 'Direccion de Memoria Fisica',
          loc: '150 50',
          size: '150 130',
          items: [
            { name: '7', value: "28Kñ32K" },
            { name: '6', value: "24Kñ28K" },
            { name: '5', value: "20Kñ24K" },
            { name: '4', value: "16Kñ20K" },
            { name: '3', value: "12Kñ16K" },
            { name: '2', value: "8Kñ12K" },
            { name: '1', value: "4Kñ8K" },
            { name: '0', value: "04Kñk" },
          ],
        },
      ],
      linkDataArray: [
        { from: 'Espacio de direcciones Virtuales', fromPort: '44Kñ48K', to: 'Direccion de Memoria Fisica', toPort: '7'},
        { from: 'Espacio de direcciones Virtuales', fromPort: '8Kñ12K', to: 'Direccion de Memoria Fisica', toPort: '6' },
        { from: 'Espacio de direcciones Virtuales', fromPort: '36Kñ40K', to: 'Direccion de Memoria Fisica', toPort: '5' },
        { from: 'Espacio de direcciones Virtuales', fromPort: '16Kñ20K', to: 'Direccion de Memoria Fisica', toPort: '4' },
        { from: 'Espacio de direcciones Virtuales', fromPort: '20Kñ24K', to: 'Direccion de Memoria Fisica', toPort: '3' },
        { from: 'Espacio de direcciones Virtuales', fromPort: '0Kñ4k', to: 'Direccion de Memoria Fisica', toPort: '2' },
        { from: 'Espacio de direcciones Virtuales', fromPort: '4Kñ8K', to: 'Direccion de Memoria Fisica', toPort: '1' },
        { from: 'Espacio de direcciones Virtuales', fromPort: '12Kñ20K', to: 'Direccion de Memoria Fisica', toPort: '0' },
      ],
    });
  }
  window.addEventListener('DOMContentLoaded', init);