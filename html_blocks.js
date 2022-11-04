"use strict";

var htmlBlocks = [
  {
    type: "baseframe",
    message0: "document %1 header %2 %3 content %4 %5",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "head",
        check: "header",
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "body",
        check: "html",
      },
    ],
    colour: 0,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "html",
    message0: "document %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
        check: "document",
      },
    ],
    colour: 0,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "body",
    message0: "content %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
        check: "html",
      },
    ],
    previousStatement: "document",
    nextStatement: "document",
    colour: 0,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "head",
    message0: "header %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
        check: "header",
      },
    ],
    previousStatement: "document",
    nextStatement: "document",
    colour: 0,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "title",
    message0: "title %1",
    args0: [
      {
        type: "input_statement",
        name: "content",
        check: "html",
      },
    ],
    previousStatement: "header",
    nextStatement: "header",
    colour: 0,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "paragraph",
    message0: "paragraph %1",
    args0: [
      {
        type: "input_statement",
        name: "content",
        check: "html",
      },
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "plaintext",
    message0: "text %1",
    args0: [
      {
        type: "field_input",
        name: "content",
        text: "",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 330,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "division",
    message0: "division %1 %2",
    args0: [
      {
        type: "input_value",
        name: "NAME",
        check: "attribute",
      },
      {
        type: "input_statement",
        name: "content",
        check: "html",
      },
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "style",
    message0: "style =  %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "NAME",
        check: "css",
      },
    ],
    inputsInline: true,
    output: "attribute",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "color",
    message0: "text colour :  %1",
    args0: [
      {
        type: "field_colour",
        name: "NAME",
        colour: "#ff0000",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
  // {
  //   type: "bgcolour",
  //   message0: "background colour :  %1",
  //   args0: [
  //     {
  //       type: "field_colour",
  //       name: "NAME",
  //       colour: "#ff0000",
  //     },
  //   ],
  //   previousStatement: "css",
  //   nextStatement: "css",
  //   colour: 230,
  //   tooltip: "",
  //   helpUrl: "",
  // },
  {
    type: "background_options",
    message0: "background =  %1",
    args0: [
      {
        type: "input_statement",
        name: "BACKGROUND_OPTION",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "background_color",
    message0: "color	:  %1",
    args0: [
      {
        type: "field_colour",
        name: "NAME",
        colour: "#ff0000",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "background_transparent",
    message0: "transparent	:  %1",
    args0: [
      {
        type: "field_dropdown",
        name: "property",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "genericstyle",
    message0: "%1 : %2",
    args0: [
      {
        type: "field_input",
        name: "property",
        text: "property",
      },
      {
        type: "field_input",
        name: "value",
        text: "value",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "generictag",
    message0: "< %1 > %2 %3",
    args0: [
      {
        type: "field_input",
        name: "NAME",
        text: "tag",
      },
      {
        type: "input_value",
        name: "NAME",
        check: "attribute",
      },
      {
        type: "input_statement",
        name: "content",
        check: "html",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "more_attributes",
    message0: "%1 %2 %3",
    args0: [
      {
        type: "input_value",
        name: "NAME1",
        check: "attribute",
      },
      {
        type: "input_value",
        name: "NAME2",
        check: "attribute",
      },
      {
        type: "input_value",
        name: "NAME3",
        check: "attribute",
      },
    ],
    output: "attribute",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "genericattribute",
    message0: "%1  =  %2",
    args0: [
      {
        type: "field_input",
        name: "attribute",
        text: "attribute",
      },
      {
        type: "field_input",
        name: "value",
        text: "value",
      },
    ],
    inputsInline: true,
    output: "attribute",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "link",
    message0: "link to %1 %2 %3",
    args0: [
      {
        type: "field_input",
        name: "NAME",
        text: "target",
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
        check: "html",
      },
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "span",
    message0: "span %1 %2",
    args0: [
      {
        type: "input_value",
        name: "NAME",
        check: "attribute",
      },
      {
        type: "input_statement",
        name: "content",
        check: "html",
      },
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "image",
    message0: "image %1 or %2",
    args0: [
      {
        type: "field_input",
        name: "IMAGE",
        text: "URL",
      },
      {
        type: "field_input",
        name: "ALT",
        text: "alternative text",
      },
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "emphasise",
    message0: "emphasise %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "strong",
    message0: "important %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "headline",
    message0: "headline %1 %2 %3",
    args0: [
      {
        type: "field_dropdown",
        name: "NAME",
        options: [
          ["level 1", "h1"],
          ["level 2", "h2"],
          ["level 3", "h2"],
          ["level 4", "h4"],
          ["level 5", "h5"],
          ["level 6", "h6"],
        ],
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "linebreak",
    message0: "line break",
    previousStatement: null,
    nextStatement: null,
    colour: 330,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "horizontalbreak",
    message0: "topic break",
    previousStatement: null,
    nextStatement: null,
    colour: 330,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "unorderedlist",
    message0: "unordered list %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "NAME",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 330,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "orderedlist",
    message0: "ordered list %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "NAME",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 330,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "listelement",
    message0: "list item %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "inserted",
    message0: "inserted %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "deleted",
    message0: "deleted %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "super",
    message0: "superscript %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "sub",
    message0: "subscript %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "code",
    message0: "code %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "quote",
    message0: "quote %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "blockquote",
    message0: "blockquote %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "sample",
    message0: "sample output %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "keyboard",
    message0: "keyboard input %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "variable",
    message0: "variable %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "form",
    message0: "form %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "table",
    message0: "table %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
        check: "table",
      },
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 180,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "tablerow",
    message0: "row %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
        check: "tablerow",
      },
    ],
    previousStatement: "table",
    nextStatement: "table",
    colour: 180,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "tablecell",
    message0: "entry %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
        check: "html",
      },
    ],
    previousStatement: "tablerow",
    nextStatement: "tablerow",
    colour: 180,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "input_text",
    message0: "text input %1",
    args0: [
      {
        type: "field_input",
        name: "default",
        text: "",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "button",
    message0: "button %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "NAME",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "input",
    message0: "%1 input %2 %3",
    args0: [
      {
        type: "field_dropdown",
        name: "type",
        options: [
          ["text", "text"],
          ["email", "email"],
          ["number", "number"],
          ["password", "password"],
          ["checkbox", "checkbox"],
          ["radiobutton", "radio"],
          ["button", "button"],
          ["colour", "color"],
          ["date", "date"],
          ["local time", "datetime-local"],
          ["file", "file"],
          ["hidden", "hidden"],
          ["image", "image"],
          ["month", "month"],
          ["range", "range"],
          ["reset", "reset"],
          ["search", "search"],
          ["submit", "submit"],
          ["telephone number", "tel"],
          ["time", "time"],
          ["url", "url"],
          ["week", "week"],
        ],
      },
      {
        type: "field_input",
        name: "value",
        text: "",
      },
      {
        type: "input_value",
        name: "text",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "script",
    message0: "script %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "content",
        check: "code",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
  {
    type: "onclick",
    message0: "on click =  %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "NAME",
        check: "code",
      },
    ],
    inputsInline: true,
    output: "attribute",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "body_attributes",
    message0: "content %1 %2",
    args0: [
      {
        type: "input_value",
        name: "NAME",
        check: "attribute",
      },
      {
        type: "input_statement",
        name: "content",
        check: "html",
      },
    ],
    previousStatement: "document",
    nextStatement: "document",
    colour: 0,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
  },
];

var AframeBlocks = [
  /*{
  "type": "import_script",
  "message0": "Import:  %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "IMPORT",
      "options": [
        [
          "A-Frame",
          "https://aframe.io/releases/1.0.4/aframe.min.js"
        ],
        [
          "AR",
          "https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"
        ],  
          
        [
          "Inspector",
          "https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js"
        ],
        [
          "Event",
          "https://unpkg.com/aframe-event-set-component@5.0.0/dist/aframe-event-set-component.min.js"
        ],
        [
          "Extra",
          "https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.0/dist/aframe-extras.min.js"
        ],
         [
          "Particle System",
          "https://unpkg.com/aframe-particle-system-component@1.0.9/dist/aframe-particle-system-component.min.js"
        ],   
         [
          "Text Geometry",
          "https://unpkg.com/aframe-text-geometry-component@^0.5.0/dist/aframe-text-geometry-component.min.js"
        ],  
         [
          "Video",
          "AFRAME.registerComponent('play-pause', \n{ init: function () \n{ var myVideo = document.querySelector('#YOUR-VIDEO-ID'); var videoControls = document.querySelector('#videoControls'); this.el.addEventListener('click', function () { if (myVideo.paused) \n{ tmyVideo.play(); videoControls.setAttribute('src', '#pause'); }\n else \n{ myVideo.pause(); videoControls.setAttribute('src', '#play'); }\n });\n }\n });"
        ],
		[
          "Arrow",
          "js/arrow.js" // "http://unpkg.com/aframe-arrow-component" + primitive added
        ],
        [
          "Look At",
          "https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js" 
        ],
        [
          "Room",  
          "https://unpkg.com/aframe-room-component@%5E0.1.0/dist/aframe-room-component.min.js"
        ],
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": ""
},*/

  {
    type: "import_script",
    message0: "Import:  %1",
    args0: [
      {
        type: "field_dropdown",
        name: "IMPORT",
        options: [
          ["A-Frame", "js/aframe.min.js"],
          ["AR", "js/aframe-ar-nft.js"],

          ["Inspector", "js/aframe-inspector.min.js"],
          ["Event", "js/aframe-event-set-component.min.js"],
          ["Environment", "js/aframe-environment.min.js"],
          ["UI Widgets", "js/aframe-ui-widgets.min.js"],
          ["Teleport Controls", "js/aframe-teleport-controls.min.js"],
          [
            "Auto Detect Controllers",
            "js/aframe-gearvr-controls-component.min.js",
          ],
          [
            "Aframe Controller Cursor",
            "js/aframe-controller-cursor-component.js",
          ],
          ["Extra", "js/aframe-extras.min.js"],
          ["Particle System", "js/aframe-particle-system-component.min.js"],
          ["Text Geometry", "js/aframe-text-geometry-component.min.js"],
          ["Arrow", "js/arrow.js"],
          ["Look At", "js/aframe-look-at-component.min.js"],
          ["Room", "js/aframe-room-component.min.js"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "script_video_controll",
    message0: "Import video controll %1",
    args0: [
      {
        type: "field_input",
        name: "SRC",
        text: "YOUR-VIDEO-ID",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "script_video_controll_NEW",
    message0: "Import video controll %1",
    args0: [
      {
        type: "field_input",
        name: "SRC",
        text: "YOUR-VIDEO-ID",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "import_aframe",
    message0: "import url %1",
    args0: [
      {
        type: "field_input",
        name: "NAME",
        text: "https://aframe.io/releases/1.3.0/aframe.min.js",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "https://aframe.io",
  },

  {
    type: "scene_create",
    message0: "Scene id: %1 options %2 %3",
    args0: [
      {
        type: "field_input",
        name: "IDNAME",
        text: "default",
      },
      {
        type: "input_statement",
        name: "OPTNAME",
      },
      {
        type: "input_statement",
        name: "NAME",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "scene_opt",
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "POSROTSCALE",
        options: [
          ["Debug", "debug"],
          ["Embedded", "embedded"],
          ["Fog", "fog"],
          ["Keyboard shortcuts", "keyboard-shortcuts"],
          ["Inspector", "inspector"],
          ["Stats", "stats"],
          ["VR Mode UI", "vr-mode-ui"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "scene_create_AR",
    message0: "AR scene debugUIEnabled %1 %2 matrixCodeType %3 %4 %5",
    args0: [
      {
        type: "field_checkbox",
        name: "DEBUG",
        checked: false,
      },
      {
        type: "input_dummy",
      },
      {
        type: "field_input",
        name: "MATRIXCODE",
        text: "3x3",
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "NAME",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "scene_create_GPS",
    message0: "AR GPS %1 scene debugUIEnabled %2  %3",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "field_checkbox",
        name: "DEBUG",
        checked: false,
      },

      {
        type: "input_statement",
        name: "NAME",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "background_color",
    message0: "Background Color %1",
    args0: [
      {
        type: "field_colour",
        name: "NAME",
        colour: "#ffffff",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "camera_3d",
    message0: "Camera 3D %1",
    args0: [
      {
        type: "input_statement",
        name: "CAMERA3D",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 195,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "light_3d",
    message0: "Light  %1",
    args0: [
      {
        type: "input_statement",
        name: "LIGHT3D",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 195,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "link_3d",
    message0: "Link  %1",
    args0: [
      {
        type: "input_statement",
        name: "LINK3D",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 195,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "light3d_type",
    message0: "Type = %1",
    args0: [
      {
        type: "field_dropdown",
        name: "TYPE_LIGHT",
        options: [
          ["Ambient", "ambient"],
          ["Directional", "directional"],
          ["Hemisphere", "hemisphere"],
          ["Point", "point"],
          ["Spot", "spot"],
        ],
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "light3d_intenity",
    message0: "intensity %1",
    args0: [
      {
        type: "field_input",
        name: "LIGHT3DINTESITY",
        text: "0.5",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "camera_3d_child",
    message0: "%1 %2 Options: %3 %4 Child %5",
    args0: [
      {
        type: "field_dropdown",
        name: "DROPDOWN",
        options: [
          ["Camera", "camera"],
          ["Light", "light"],
          ["Link", "link"],
        ],
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "NAME",
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "CHILD",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 195,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "cursor3d",
    message0: "Cursor  %1",
    args0: [
      {
        type: "field_colour",
        name: "CURSOR3D",
        colour: "#ff0000",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "cursor3dHEX",
    message0: "Cursor #  %1",
    args0: [
      {
        type: "field_input",
        name: "CURSOR3DHEX",
        text: "ff0000",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "camera_cursor",
    message0: "Cursor Visible %1",
    args0: [
      {
        type: "field_checkbox",
        name: "CURSOREVISIBILE",
        checked: true,
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "camera_cursor_color",
    message0: "Cursor Color %1",
    args0: [
      {
        type: "field_colour",
        name: "NAME",
        colour: "#ff0000",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "camera_cursor_opacity",
    message0: "Cursor Opacity %1",
    args0: [
      {
        type: "field_input",
        name: "OPACITY",
        text: "0.5",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "camera_cursor_scale",
    message0: "Cursor Scale %1",
    args0: [
      {
        type: "field_input",
        name: "SCALE",
        text: "1",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "camera_name",
    message0: "Camera Name:  %1",
    args0: [
      {
        type: "field_input",
        name: "GPS_CAMERA",
        text: "gps-camera",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "camera_rotation_reader",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "ROTATION-READER",
        text: "rotation-reader",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "camera",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "CAMERA",
        text: "camera",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "look_controls",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "LOOK_CONTROLS",
        text: "look-controls",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "hide_on_enter_ar",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "HIDE_ON_ENTER_AR",
        text: "hide-on-enter-ar",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "wasd_fps",
    message0: "WASD (FPS) %1",
    args0: [
      {
        type: "field_dropdown",
        name: "WASD",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 195,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "assets_list",
    message0: "Define assets %1",
    args0: [
      {
        type: "input_statement",
        name: "assetslist",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 195,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "asset_item",
    message0: "define asset item %1 id: %2 src: %3",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "field_input",
        name: "IDNAME",
        text: "default",
      },
      {
        type: "field_input",
        name: "URL",
        text: "default",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "asset_video",
    message0: "define asset video %1 id: %2 src: %3 loop: %4",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "field_input",
        name: "IDNAME",
        text: "default",
      },
      {
        type: "field_input",
        name: "URL",
        text: "default",
      },
      {
        type: "field_checkbox",
        name: "Loop",
        checked: true,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "asset_img",
    message0: "define asset image %1 id: %2 src: %3",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "field_input",
        name: "IDNAME",
        text: "default",
      },
      {
        type: "field_input",
        name: "URL",
        text: "default",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "asset_audio",
    message0: "define asset audio %1 id: %2 src: %3",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "field_input",
        name: "IDNAME",
        text: "YOUR-AMBIENCE-SOUND",
      },
      {
        type: "field_input",
        name: "URL",
        text: "default",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "gltf_entity",
    message0: "gltf asset id: %1 class: %2 %3 child %4",
    args0: [
      {
        type: "field_input",
        name: "IDNAME",
        text: "default",
      },
      {
        type: "field_input",
        name: "CLASSNAME",
        text: "class",
      },
      {
        type: "input_statement",
        name: "CONTENT",
      },
      {
        type: "input_statement",
        name: "NAME",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "obj_entity",
    message0: "obj entity %1 %2 %3 mtl entity %4 %5",
    args0: [
      {
        type: "field_dropdown",
        name: "OBJDROP",
        options: [
          ["id", "#"],
          ["url", ""],
        ],
      },
      {
        type: "field_input",
        name: "OBJLINK",
        text: "default",
      },
      {
        type: "input_statement",
        name: "OBJNAME",
      },
      {
        type: "field_dropdown",
        name: "MTLDROP",
        options: [
          ["id", "#"],
          ["url", ""],
        ],
      },
      {
        type: "field_input",
        name: "MTLLINK",
        text: "default",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "extra_entity",
    message0: "model type %1 %2 entity %3 %4 %5",
    args0: [
      {
        type: "field_dropdown",
        name: "TYPEDROP",
        options: [
          ["dae", "dae"],
          ["fbx", "fbx"],
        ],
      },
      {
        type: "input_dummy",
      },
      {
        type: "field_dropdown",
        name: "SRCDROP",
        options: [
          ["id", "#"],
          ["url", ""],
        ],
      },
      {
        type: "field_input",
        name: "SRCLINK",
        text: "default",
      },
      {
        type: "input_statement",
        name: "NAME",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "need to import extras",
    helpUrl: "",
  },

  {
    type: "a-entity",
    message0: "Entity id: %1 options %2 Child %3",
    args0: [
      {
        type: "field_input",
        name: "IDNAME",
        text: "default",
      },
      {
        type: "input_statement",
        name: "NAME",
      },
      {
        type: "input_statement",
        name: "CONTENT",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "a-entity-env",
    message0: "Entity environment: %1 ",
    args0: [
      {
        type: "field_input",
        name: "ENV",
        text: "japan",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_text",
    message0: "Text:  %1",
    args0: [
      {
        type: "input_statement",
        name: "TEXT",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_text_value",
    message0: "Text:  %1",
    args0: [
      {
        type: "field_input",
        name: "VALUE",
        text: "Hello World!",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_color",
    message0: "Color:  %1",
    args0: [
      {
        type: "field_colour",
        name: "NAME",
        colour: "#ff0000",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_align",
    message0: "Align: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "NAME",
        options: [
          ["Center", "center"],
          ["Left", "left"],
          ["Right", "right"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_color_HEX",
    message0: "Color:  %1",
    args0: [
      {
        type: "field_input",
        name: "COLOR",
        text: "#212121",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_wrapcount",
    message0: "Wrap Count: %1",
    args0: [
      {
        type: "field_number",
        name: "WRAPCOUNT",
        value: 40,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_dimension",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "DIM",
        options: [
          ["width", "width"],
          ["height", "height"],
          ["depth", "depth"],
        ],
      },
      {
        type: "field_number",
        name: "DIMVALUE",
        value: 0,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_text_font",
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "DIM",
        options: [
          [
            "Cabin-Medium",
            "https://raw.githubusercontent.com/etiennepinchon/aframe-fonts/master/fonts/cabin/Cabin-Medium.json;",
          ],
          [
            "optimerBoldFont",
            "https://rawgit.com/mrdoob/three.js/dev/examples/fonts/optimer_bold.typeface.json;",
          ],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_shader",
    message0: "Shader:  %1",
    args0: [
      {
        type: "field_dropdown",
        name: "DIM",
        options: [
          ["msdf", "msdf"],
          ["Flat", "flat"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_geometry",
    message0: "Geometry:  %1",
    args0: [
      {
        type: "input_statement",
        name: "GEOMETRY",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_geometry_primitive",
    message0: "primitive: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "NAME",
        options: [
          ["Box", "box"],
          ["Plane", "plane"],
          ["Cone", "cone"],
          ["Octahedron", "octahedron"],
          ["Circle", "circle"],
          ["Ring", "ring"],
          ["Sphere", "sphere"],
          ["Cylinder", "cylinder"],
          ["Tetrahedron", "tetrahedron"],
          ["Torus", "torus"],
          ["TorusKnot", "torusKnot"],
          ["Triangle", "triangle"],
          ["Dodecahedron", "dodecahedron"],
          ["Icosahedron", "icosahedron"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_geometry_dimension",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "NAME",
        options: [
          ["width", "width"],
          ["height", "height"],
          ["depth", "depth"],
          ["radius", "radius"],

          ["radius-tubular", "radius-tubular"],
          ["segments-radial", "segments-radial"],
          ["arc", "arc"],
          ["p", "p"],
          ["q", "q"],
        ],
      },
      {
        type: "field_input",
        name: "VALUE",
        text: "auto",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_material",
    message0: "Material:  %1",
    args0: [
      {
        type: "input_statement",
        name: "MATERIAL",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_material_color",
    message0: "Color :  %1",
    args0: [
      {
        type: "field_colour",
        name: "COLOR",
        colour: "#ff0000",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_material_color_hex",
    message0: "Color :  %1",
    args0: [
      {
        type: "field_input",
        name: "COLOR",
        text: "#009900",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_material_visible",
    message0: "Visible :  %1",
    args0: [
      {
        type: "field_checkbox",
        name: "VISIBLE",
        checked: true,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "animation",
    message0: "Animation.%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "ANIMATION",
        options: [
          ["Property", "property"],
          ["From", "from"],
          ["To", "to"],
          ["Duration", "dur"],
        ],
      },
      {
        type: "field_input",
        name: "VALUE",
        text: "default",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_particle-system",
    message0: "Particle-System:  %1",
    args0: [
      {
        type: "input_statement",
        name: "PARTICEL",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "Need Particel System plugin",
    helpUrl: "",
  },

  {
    type: "entity_particle_system_preset",
    message0: "preset:  %1",
    args0: [
      {
        type: "field_dropdown",
        name: "PRESET",
        options: [
          ["Dust", "dust"],
          ["Snow", "snow"],
          ["Rain", "rain"],
          ["Default", "default"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_paticel_velocityvalue",
    message0: "velocityValue: %1",
    args0: [
      {
        type: "field_number",
        name: "VELOCITYVALUE",
        value: 0.2,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_particleCount",
    message0: "particleCount: %1",
    args0: [
      {
        type: "field_number",
        name: "PARTICELCOUNT",
        value: 10000,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_texture",
    message0: "texture: %1",
    args0: [
      {
        type: "field_input",
        name: "TEXTURE",
        text: "",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "import_model_gltf",
    message0: "gltf model url %1",
    args0: [
      {
        type: "field_input",
        name: "NAME",
        text: "https://3d.simulmech.com/VR/Aframe-blockly/japanese_classroom/scene.gltf",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "https://aframe.io",
  },

  {
    type: "import_model_obj",
    message0: "obj model url %1",
    args0: [
      {
        type: "field_input",
        name: "NAME",
        text: "https://3d.simulmech.com/VR/Aframe-blockly/Radeghieri_appartamento_ristrutturato.obj",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "https://aframe.io",
  },

  {
    type: "primitive",
    message0: "%1 ID: %2 %3 Visible %4 %5 %6 %7",
    args0: [
      {
        type: "field_dropdown",
        name: "DROPDOWN",
        options: [
          ["Box", "box"],
          ["Plane", "plane"],
          ["Cone", "cone"],
          ["Octahedron", "octahedron"],
          ["Circle", "circle"],
          ["Ring", "ring"],
          ["Sphere", "sphere"],
          ["Cylinder", "cylinder"],
          ["Tetrahedron", "tetrahedron"],
          ["Torus", "torus"],
          ["TorusKnot", "torusKnot"],
          ["Triangle", "triangle"],
          ["Dodecahedron", "dodecahedron"],
          ["Icosahedron", "icosahedron"],
        ],
      },
      {
        type: "field_input",
        name: "IDNAME",
        text: "primitive_name",
      },
      {
        type: "input_dummy",
      },
      {
        type: "field_checkbox",
        name: "VISIBLE",
        checked: true,
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "NAME",
      },
      {
        type: "input_dummy",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "primitive_child",
    message0: "%1 ID: %2 %3 Visible %4 %5 Options: %6 Child %7",
    args0: [
      {
        type: "field_dropdown",
        name: "DROPDOWN",
        options: [
          ["Box", "box"],
          ["Plane", "plane"],
          ["Cone", "cone"],
          ["Octahedron", "octahedron"],
          ["Circle", "circle"],
          ["Ring", "ring"],
          ["Sphere", "sphere"],
          ["Cylinder", "cylinder"],
          ["Tetrahedron", "tetrahedron"],
          ["Torus", "torus"],
          ["TorusKnot", "torusKnot"],
          ["Triangle", "triangle"],
          ["Dodecahedron", "dodecahedron"],
          ["Icosahedron", "icosahedron"],
        ],
      },
      {
        type: "field_input",
        name: "IDNAME",
        text: "primitive_name",
      },
      {
        type: "input_dummy",
      },
      {
        type: "field_checkbox",
        name: "VISIBLE",
        checked: true,
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "NAME",
      },

      {
        type: "input_statement",
        name: "CHILD",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 195,
    tooltip: "",
    helpUrl: "",
  },
  // Arrow primitive and its attributes
  {
    type: "arrow_primitive",
    message0: "arrow  %1 direction= X: %2 Y: %3 Z: %4 %5",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "field_number",
        name: "X",
        value: 1,
      },
      {
        type: "field_number",
        name: "Y",
        value: 0,
      },
      {
        type: "field_number",
        name: "Z",
        value: 0,
      },
      {
        type: "input_statement",
        name: "NAME",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 30,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "arrow_lengths",
    message0: "arrow  %1 : %2",
    args0: [
      {
        type: "field_dropdown",
        name: "ATTRIBUTE",
        options: [
          ["LENGTH", "length"],
          ["HEADLENGTH", "headlength"],
          ["HEADWIDTH", "headwidth"],
        ],
      },
      {
        type: "field_number",
        name: "NAME",
        value: 0,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 30,
    tooltip: "",
    helpUrl: "",
  },

  //
  {
    type: "color3d",
    message0: "Color = %1",
    args0: [
      {
        type: "field_colour",
        name: "COLOR3D",
        colour: "#ff0000",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "color3dHEX",
    message0: "Color: #  %1",
    args0: [
      {
        type: "field_input",
        name: "COLOR3DHEX",
        text: "ff0000",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "posrotscale_3d_OLD",
    message0: "%1 X :  %2 Y :  %3 Z :  %4",
    args0: [
      {
        type: "field_dropdown",
        name: "POSROTSCALE",
        options: [
          ["Position", "position"],
          ["Rotation", "rotation"],
          ["Scale", "scale"],
        ],
      },
      {
        type: "field_input",
        name: "POSROTSCALE_X",
        text: "0",
      },
      {
        type: "field_input",
        name: "POSROTSCALE_Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "POSROTSCALE_Z",
        text: "0",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "dimension_3d",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "DIMENSION",
        options: [
          ["width", "width"],
          ["height", "height"],
          ["depth", "depth"],
          ["radius", "radius"],

          ["radius-tubular", "radius-tubular"],
          ["segments-radial", "segments-radial"],
          ["arc", "arc"],
          ["p", "p"],
          ["q", "q"],
        ],
      },
      {
        type: "field_input",
        name: "DIMENSION_VALUE",
        text: "0",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "open_end3d",
    message0: "open-ended = %1",
    args0: [
      {
        type: "field_checkbox",
        name: "OPENEND",
        checked: true,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "side3d",
    message0: "Side: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "SIDE",
        options: [
          ["FRONT", "front"],
          ["BACK", "back"],
          ["DOUBLE", "double"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "href_3d",
    message0: "href = %1",
    args0: [
      {
        type: "field_input",
        name: "HREF",
        text: "index.html",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "image_3d",
    message0: "image = %1",
    args0: [
      {
        type: "field_input",
        name: "IMAGE",
        text: "image.jpg",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "title_3d",
    message0: "title = %1",
    args0: [
      {
        type: "field_input",
        name: "TITLE",
        text: "Home Page",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "videosphere360",
    message0: "Video360 src: %1 %2",
    args0: [
      {
        type: "field_input",
        name: "360_SRC",
        text: "url video",
      },
      {
        type: "input_statement",
        name: "360_Option",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "video_child",
    message0: " ID:%1 %2 Visible %3 %4 Options: %5 Child %6",
    args0: [
      {
        type: "field_input",
        name: "IDNAME",
        text: "video_name",
      },
      {
        type: "input_dummy",
      },
      {
        type: "field_checkbox",
        name: "VISIBLE",
        checked: true,
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "NAME",
      },

      {
        type: "input_statement",
        name: "CHILD",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "video_src",
    message0: "Video src: %1 %2",
    args0: [
      {
        type: "field_input",
        name: "360_SRC",
        text: "url video",
      },
      {
        type: "input_dummy",
        name: "360_Option",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "video_controller",
    message0:
      "Play/Pause src: %1 %2 Position:  X %3 Y %4 Z %5 %6 Scale:  X %7 Y %8 Z %9",
    args0: [
      {
        type: "field_input",
        name: "SRC",
        text: "play",
      },
      {
        type: "input_dummy",
      },
      {
        type: "field_number",
        name: "POSX",
        value: 0,
      },
      {
        type: "field_number",
        name: "POSY",
        value: -3,
      },
      {
        type: "field_number",
        name: "POSZ",
        value: 0,
      },
      {
        type: "input_dummy",
      },
      {
        type: "field_number",
        name: "SCALEX",
        value: 0.5,
      },
      {
        type: "field_number",
        name: "SCALEY",
        value: 0.5,
      },
      {
        type: "field_number",
        name: "SCALEZ",
        value: 1,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "video_controller_NEW",
    message0:
      "Play/Pause %1 Position:  X %2 Y %3 Z %4 %5 Scale:  X %6 Y %7 Z %8",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "field_number",
        name: "POSX",
        value: 0,
      },
      {
        type: "field_number",
        name: "POSY",
        value: -3,
      },
      {
        type: "field_number",
        name: "POSZ",
        value: 0,
      },
      {
        type: "input_dummy",
      },
      {
        type: "field_number",
        name: "SCALEX",
        value: 0.5,
      },
      {
        type: "field_number",
        name: "SCALEY",
        value: 0.5,
      },
      {
        type: "field_number",
        name: "SCALEZ",
        value: 1,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "videobutton",
    message0: "Video Controll",
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "hit_test_options",
    message0: "ar-hit-test =  %1",
    args0: [
      {
        type: "input_statement",
        name: "HIT_TEST_OPTION",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "hit_test_prop_enabled",
    message0: "enabled :  %1",
    args0: [
      {
        type: "field_dropdown",
        name: "property",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "hit_test_prop_target",
    message0: "target :  %1",
    args0: [
      {
        type: "field_input",
        name: "property",
        text: "null",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "hit_test_prop_src",
    message0: "src :  %1",
    args0: [
      {
        type: "field_input",
        name: "property",
        text: "",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "hit_test_prop_footprintDepth",
    message0: "footprintDepth	:  %1",
    args0: [
      {
        type: "field_input",
        name: "property",
        text: 0.1,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "hit_test_prop_type",
    message0: "type :  %1",
    args0: [
      {
        type: "field_dropdown",
        name: "property",
        options: [
          ["Footprint", "footprint"],
          ["Map", "map"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "hit_test_prop_mapSize",
    message0: "hit_test_prop_mapSize  x: %1  y: %2",
    args0: [
      {
        type: "field_input",
        name: "x",
        text: 0.5,
      },
      {
        type: "field_input",
        name: "y",
        text: 0.5,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "windows_motion_controls_options",
    message0: "windows motion controls =  %1",
    args0: [
      {
        type: "input_statement",
        name: "WINDOWS_MOTION_CONTROLS_OPTIONS",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "windows_motion_controls_pair",
    message0: "pair:  %1",
    args0: [
      {
        type: "field_input",
        name: "PAIR",
        text: "0",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "windows_motion_controls_model",
    message0: "mode: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "MODEL",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "windows_motion_controls_hideDisconnected",
    message0: "hideDisconnected: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "HIDE_DISCONNECTED",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "windows_motion_controls_hand",
    message0: "hand: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "HAND",
        options: [
          ["Right", "right"],
          ["Left", "left"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  // =================================================================================================================

  {
    type: "vive_controls_options",
    message0: "Vive Controls =  %1",
    args0: [
      {
        type: "input_statement",
        name: "VIVE_CONTROLS_OPTIONS",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "vive_controls_hand",
    message0: "hand: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "HAND",
        options: [
          ["Right", "right"],
          ["Left", "left"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "vive_controls_buttonColor",
    message0: "Button Color:  %1",
    args0: [
      {
        type: "field_colour",
        name: "BUTTON_COLOR",
        colour: "#FAFAFA",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "vive_controls_buttonHighlightColor",
    message0: "Button Highlight Color:  %1",
    args0: [
      {
        type: "field_colour",
        name: "BUTTON_HIGHLIGHT_COLOR",
        colour: "#22D1EE",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "vive_controls_model",
    message0: "model: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "MODEL",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "vive_controls_orientationOffset",
    message0: "Orientation Offset= X :  %1 Y :  %2 Z :  %3",
    args0: [
      {
        type: "field_input",
        name: "POSROTSCALE_X",
        text: "0",
      },
      {
        type: "field_input",
        name: "POSROTSCALE_Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "POSROTSCALE_Z",
        text: "0",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 270,
    tooltip: "",
    helpUrl: "",
  },

  // =================================================================================================================

  {
    type: "hand_controls_options",
    message0: "Hand Controls =  %1",
    args0: [
      {
        type: "input_statement",
        name: "HAND_CONTROLS_OPTIONS",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "hand_controls_hand",
    message0: "hand: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "HAND",
        options: [
          ["Right", "right"],
          ["Left", "left"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "hand_controls_color",
    message0: "Color:  %1",
    args0: [
      {
        type: "field_colour",
        name: "COLOR",
        colour: "white",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "hand_controls_handModelStyle",
    message0: "Hand Model Style: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "HAND_MODEL_STYLE",
        options: [
          ["Low Poly", "lowPoly"],
          ["High Poly", "highPoly"],
          ["Toon", "toon"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  // =================================================================================================================

  {
    type: "hand_tracking_controls_options",
    message0: "Hand Tracking Controls =  %1",
    args0: [
      {
        type: "input_statement",
        name: "HAND_TRACKING_CONTROLS_OPTIONS",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "hand_tracking_controls_hand",
    message0: "hand: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "HAND",
        options: [
          ["Right", "right"],
          ["Left", "left"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "hand_tracking_controls_modelColor",
    message0: "Model Color:  %1",
    args0: [
      {
        type: "field_colour",
        name: "MODEL_COLOR",
        colour: "white",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "hand_tracking_controls_handModelStyle",
    message0: "Model Style: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "HAND_MODEL_STYLE",
        options: [
          ["Mesh", "mesh"],
          ["Dots", "dots"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  // =================================================================================================================

  {
    type: "keyboard_shortcuts_options",
    message0: "Keyboard Shortcuts =  %1",
    args0: [
      {
        type: "input_statement",
        name: "KEYBOARD_SHORTCUTS_OPTIONS",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "keyboard_shortcuts_enterVR",
    message0: "Enter VR: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "ENTER_VR",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  // =================================================================================================================

  {
    type: "tracked_controls_options",
    message0: "Tracked Controls =  %1",
    args0: [
      {
        type: "input_statement",
        name: "Tracked_CONTROLS_OPTIONS",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "tracked_controls_armModel",
    message0: "Arm Model: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "ARM_MODEL",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "tracked_controls_autoHide",
    message0: "Auto Hide: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "AUTO_HIDE",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "tracked_controls_controller",
    message0: "Controller:  %1",
    args0: [
      {
        type: "field_input",
        name: "CONTROLLER",
        text: 0,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "tracked_controls_id",
    message0: "Id:  %1",
    args0: [
      {
        type: "field_input",
        name: "ID",
        text: "",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "tracked_controls_idPrefix",
    message0: "Id Prefix:  %1",
    args0: [
      {
        type: "field_input",
        name: "ID_PREFIX",
        text: "",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "tracked_controls_headElement",
    message0: "Head Element:  %1",
    args0: [
      {
        type: "field_input",
        name: "HEAD_ELEMENT",
        text: "",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "tracked_controls_hand",
    message0: "hand: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "HAND",
        options: [
          ["Right", "right"],
          ["Left", "left"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "tracked_controls_orientationOffset",
    message0: "Orientation Offset= X :  %1 Y :  %2 Z :  %3",
    args0: [
      {
        type: "field_input",
        name: "POSROTSCALE_X",
        text: "0",
      },
      {
        type: "field_input",
        name: "POSROTSCALE_Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "POSROTSCALE_Z",
        text: "0",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 270,
    tooltip: "",
    helpUrl: "",
  },

  // =================================================================================================================

  {
    type: "oculus_touch_controls_options",
    message0: "Oculus Touch Controls =  %1",
    args0: [
      {
        type: "input_statement",
        name: "OCULUS_TOUCH_CONTROLS_OPTIONS",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "oculus_touch_controls_hand",
    message0: "hand: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "HAND",
        options: [
          ["Right", "right"],
          ["Left", "left"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "oculus_touch_controls_model",
    message0: "model: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "MODEL",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "oculus_touch_controls_orientationOffset",
    message0: "Orientation Offset= X :  %1 Y :  %2 Z :  %3",
    args0: [
      {
        type: "field_input",
        name: "POSROTSCALE_X",
        text: "0",
      },
      {
        type: "field_input",
        name: "POSROTSCALE_Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "POSROTSCALE_Z",
        text: "0",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 270,
    tooltip: "",
    helpUrl: "",
  },

  // =================================================================================================================
  {
    type: "gearvr_controls",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "GEARVR_CONTROLS",
        text: "gearvr-controls",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "gearvr_controls_options",
    message0: "Gear VR Controls =  %1",
    args0: [
      {
        type: "input_statement",
        name: "GEARVR_CONTROLS_OPTIONS",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "gearvr_controls_hand",
    message0: "hand: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "HAND",
        options: [
          ["Right", "right"],
          ["Left", "left"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "gearvr_controls_buttonColor",
    message0: "Button Color:  %1",
    args0: [
      {
        type: "field_colour",
        name: "BUTTON_COLOR",
        colour: "#000000",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "gearvr_controls_buttonTouchedColor",
    message0: "Button Touched Color:  %1",
    args0: [
      {
        type: "field_colour",
        name: "BUTTON_FOCUS_TOUCHED_COLOR",
        colour: "#777777",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "gearvr_controls_buttonHighlightColor",
    message0: "Button Highlight Color:  %1",
    args0: [
      {
        type: "field_colour",
        name: "BUTTON_HIGHLIGHT_COLOR",
        colour: "#FFFFFF",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "gearvr_controls_model",
    message0: "model: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "MODEL",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "gearvr_controls_armModel",
    message0: "Arm Model: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "ARM_MODEL",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "gearvr_controls_orientationOffset",
    message0: "Orientation Offset= X :  %1 Y :  %2 Z :  %3",
    args0: [
      {
        type: "field_input",
        name: "POSROTSCALE_X",
        text: "0",
      },
      {
        type: "field_input",
        name: "POSROTSCALE_Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "POSROTSCALE_Z",
        text: "0",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 270,
    tooltip: "",
    helpUrl: "",
  },

  // =================================================================================================================
  {
    type: "daydream_controls",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "DAYDREAM_CONTROLS",
        text: "daydream-controls",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "daydream_controls_options",
    message0: "Daydream Controls =  %1",
    args0: [
      {
        type: "input_statement",
        name: "DAYDREAM_CONTROLS_OPTIONS",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "daydream_controls_hand",
    message0: "hand: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "HAND",
        options: [
          ["Right", "right"],
          ["Left", "left"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "daydream_controls_buttonColor",
    message0: "Button Color:  %1",
    args0: [
      {
        type: "field_colour",
        name: "BUTTON_COLOR",
        colour: "#000000",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "daydream_controls_buttonTouchedColor",
    message0: "Button Touched Color:  %1",
    args0: [
      {
        type: "field_colour",
        name: "BUTTON_FOCUS_TOUCHED_COLOR",
        colour: "#777777",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "daydream_controls_buttonHighlightColor",
    message0: "Button Highlight Color:  %1",
    args0: [
      {
        type: "field_colour",
        name: "BUTTON_HIGHLIGHT_COLOR",
        colour: "#FFFFFF",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "daydream_controls_model",
    message0: "model: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "MODEL",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "daydream_controls_armModel",
    message0: "Arm Model: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "ARM_MODEL",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "daydream_controls_orientationOffset",
    message0: "Orientation Offset= X :  %1 Y :  %2 Z :  %3",
    args0: [
      {
        type: "field_input",
        name: "POSROTSCALE_X",
        text: "0",
      },
      {
        type: "field_input",
        name: "POSROTSCALE_Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "POSROTSCALE_Z",
        text: "0",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 270,
    tooltip: "",
    helpUrl: "",
  },
  // =================================================================================================================

  {
    type: "teleport_controls_option",
    message0: "Teleport Controls =  %1",
    args0: [
      {
        type: "input_statement",
        name: "TELEPORT_CONTROL_OPTION",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "teleport_controls_cameraRig",
    message0: "Camera Rig:  %1",
    args0: [
      {
        type: "field_input",
        name: "TELEPORT_CONTROLS_CAMERARIG",
        text: "",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "teleport_controls_teleportOrigin",
    message0: "Teleport Origin:  %1",
    args0: [
      {
        type: "field_input",
        name: "TELEPORT_CONTROLS_ORIGIN",
        text: "",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "teleport_controls_type",
    message0: "type: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "TYPE",
        options: [
          ["Line", "line"],
          ["Parabolic", "parabolic"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "teleport_controls_button",
    message0: "Button: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "BUTTON",
        options: [
          ["Trackpad", "trackpad"],
          ["Trigger", "trigger"],
          ["Grip", "grip"],
          ["Menu", "menu"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "teleport_controls_collisionEntities",
    message0: "Collision Entities:  %1",
    args0: [
      {
        type: "field_input",
        name: "TELEPORT_CONTROLS_COLLISION_ENTITIES",
        text: "",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "teleport_controls_hitEntity",
    message0: "Hit Entity:  %1",
    args0: [
      {
        type: "field_input",
        name: "TELEPORT_CONTROLS_HIT_ENTITY",
        text: "",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "teleport_controls_hitCylinderColor",
    message0: "Hit Cylinder Color:  %1",
    args0: [
      {
        type: "field_colour",
        name: "TELEPORT_CONTROLS_HIT_CYLINDER_COLOR",
        colour: "#99ff99",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "teleport_controls_hitCylinderRadius",
    message0: "Hit Cylinder Radius:  %1",
    args0: [
      {
        type: "field_input",
        name: "TELEPORT_CONTROLS_HIT_CYLINDER_RADIUS",
        text: "0.25",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "teleport_controls_hitCylinderHeight",
    message0: "Hit Cylinder Height:  %1",
    args0: [
      {
        type: "field_input",
        name: "TELEPORT_CONTROLS_HIT_CYLINDER_HEIGHT",
        text: "0.3",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "teleport_controls_interval",
    message0: "Interval:  %1",
    args0: [
      {
        type: "field_input",
        name: "TELEPORT_CONTROLS_INTERVAL",
        text: "0",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "teleport_controls_curveHitColor",
    message0: "Curve Hit Color:  %1",
    args0: [
      {
        type: "field_colour",
        name: "TELEPORT_CONTROLS_CURVE_HIT_COLOR",
        colour: "#99ff99",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "teleport_controls_curveMissColor",
    message0: "Curve Miss Color:  %1",
    args0: [
      {
        type: "field_colour",
        name: "TELEPORT_CONTROLS_CURVE_MISS_COLOR",
        colour: "#ff0000",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "teleport_controls_curveNumberPoints",
    message0: "Curve Number Points:  %1",
    args0: [
      {
        type: "field_input",
        name: "TELEPORT_CONTROLS_CURVE_NUMBER_POINTS",
        text: "30",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "teleport_controls_curveLineWidth",
    message0: "Curve Line Width:  %1",
    args0: [
      {
        type: "field_input",
        name: "TELEPORT_CONTROLS_CURVE_LINE_WIDTH",
        text: "0.025",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "teleport_controls_curveShootingSpeed",
    message0: "Curve Shooting Speed:  %1",
    args0: [
      {
        type: "field_input",
        name: "TELEPORT_CONTROLS_CURVE_SHOOTING_SPEED",
        text: "5",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "teleport_controls_defaultPlaneSize",
    message0: "Default Plane Size:  %1",
    args0: [
      {
        type: "field_input",
        name: "TELEPORT_CONTROLS_DEFAULT_PLANE_SIZE",
        text: "100",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "teleport_controls_maxLength",
    message0: "Max Length:  %1",
    args0: [
      {
        type: "field_input",
        name: "TELEPORT_CONTROLS_MAX_LENGTH",
        text: "10",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "teleport_controls_landingMaxAngle",
    message0: "Landing Max Angle:  %1",
    args0: [
      {
        type: "field_input",
        name: "TELEPORT_CONTROLS_LANDING_MAX_ANGLE",
        text: "45",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "teleport_controls_startEvents",
    message0: "Start Events: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "START_EVENTS",
        options: [
          ["Teleport Start", "teleportstart"],
          ["Teleport End", "teleportend"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "teleport_controls_endEvents",
    message0: "End Events: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "END_EVENTS",
        options: [
          ["Teleport Start", "teleportstart"],
          ["Teleport End", "teleportend"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  // =================================================================================================================
  {
    type: "ui_button",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "UI_BUTTON",
        text: "ui-button",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "ui_button_option",
    message0: "UI Button =  %1",
    args0: [
      {
        type: "input_statement",
        name: "UI_BUTTON_OPTION",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "ui_button_color",
    message0: "UI Button Color:  %1",
    args0: [
      {
        type: "field_colour",
        name: "UI_BUTTON_COLOR",
        colour: "#960960",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "ui_button_pressedColor",
    message0: "UI Button Pressed Color:  %1",
    args0: [
      {
        type: "field_colour",
        name: "UI_BUTTON_PRESSED_COLOR",
        colour: "#FC2907",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "ui_button_baseColor",
    message0: "UI Button Base Color:  %1",
    args0: [
      {
        type: "field_colour",
        name: "UI_BUTTON_BASE_COLOR",
        colour: "#618EFF",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "ui_button_topY",
    message0: "UI Button Top Y:  %1",
    args0: [
      {
        type: "field_input",
        name: "UI_BUTTON_TOP_Y",
        text: "0.02",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "ui_button_pressedY",
    message0: "UI Button pressed Y:  %1",
    args0: [
      {
        type: "field_input",
        name: "UI_BUTTON_PRESSED_Y",
        text: "0.012",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "ui_button_base",
    message0: "UI Button Base:  %1",
    args0: [
      {
        type: "field_input",
        name: "UI_BUTTON_BASE",
        text: "",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "ui_button_top",
    message0: "UI Button Top:  %1",
    args0: [
      {
        type: "field_input",
        name: "UI_BUTTON_TOP",
        text: "",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "ui_button_pressed",
    message0: "UI Button pressed:  %1",
    args0: [
      {
        type: "field_input",
        name: "UI_BUTTON_PRESSED",
        text: "",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "ui_toggle",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "UI_TOGGLE",
        text: "ui-toggle",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "ui_toggle_option",
    message0: "UI Toggle =  %1",
    args0: [
      {
        type: "input_statement",
        name: "UI_TOGGLE_OPTION",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "ui_toggle_value",
    message0: "UI Toggle Value:  %1",
    args0: [
      {
        type: "field_input",
        name: "UI_TOGGLE_VALUE",
        text: "0",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "ui_slider",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "UI_SLIDER",
        text: "ui-slider",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "ui_slider_option",
    message0: "UI Slider =  %1",
    args0: [
      {
        type: "input_statement",
        name: "UI_SLIDER_OPTION",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "ui_slider_value",
    message0: "UI Slider Value:  %1",
    args0: [
      {
        type: "field_input",
        name: "UI_SLIDER_VALUE",
        text: "50",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "ui_slider_min",
    message0: "UI Slider Min Value:  %1",
    args0: [
      {
        type: "field_input",
        name: "UI_SLIDER_MIN",
        text: "0",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "ui_slider_max",
    message0: "UI Slider Max Value:  %1",
    args0: [
      {
        type: "field_input",
        name: "UI_SLIDER_MAX",
        text: "100",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "ui_rotary",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "UI_ROTARY",
        text: "ui-rotary",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  // =================================================================================================================
  {
    type: "auto_detect_controllers",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "AUTO_DETECT_CONTROLLERS",
        text: "auto-detect-controllers",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "auto_detect_controllers_option",
    message0: "Auto Detect Controllers =  %1",
    args0: [
      {
        type: "input_statement",
        name: "AUTO_DETECT_CONTROLLERS_OPTION",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "auto_detect_controllers_hand",
    message0: "hand: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "HAND",
        options: [
          ["Right", "right"],
          ["Left", "left"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "auto_detect_controllers_singlehand",
    message0: "Single Hand: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "SINGLE_HAND",
        options: [
          ["Right", "right"],
          ["Left", "left"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "auto_detect_controllers_model",
    message0: "model: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "MODEL",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "auto_detect_controllers_trackedcontrols",
    message0: "Tracked Controls: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "TRACKED_CONTROLS",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  // =================================================================================================================

  {
    type: "movement_controls",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "MOVEMENT_CONTROLS",
        text: "movement-controls",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "movement_controls_options",
    message0: "Movement Controls =  %1",
    args0: [
      {
        type: "input_statement",
        name: "MOVEMENT_CONTROLS_OPTIONS",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "movement_controls_enabled",
    message0: "enabled: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "ENABLED",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "movement_controls_controls",
    message0: "controls: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "CONTROLS",
        options: [
          ["Gamepad", "gamepad"],
          ["Keyboard", "keyboard"],
          ["Touch", "touch"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "movement_controls_fly",
    message0: "fly: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "FLY",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "movement_controls_constrainToNavMesh",
    message0: "Constrain To Nav Mesh: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "CONSTRAINTONAVMESH",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "movement_controls_speed",
    message0: "speed:  %1",
    args0: [
      {
        type: "field_input",
        name: "SPEED",
        text: "0.3",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "movement_controls_camera",
    message0: "camera:  %1",
    args0: [
      {
        type: "field_input",
        name: "CAMERA",
        text: "",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  // =================================================================================================================
  {
    type: "oculus_go_controls",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "OCULUS_GO_CONTROLS",
        text: "oculus-go-controls",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "oculus_go_controls_options",
    message0: "Oculus Go Controls =  %1",
    args0: [
      {
        type: "input_statement",
        name: "OCULUS_GO_CONTROLS_OPTIONS",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "oculus_go_controls_hand",
    message0: "hand: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "HAND",
        options: [
          ["Right", "right"],
          ["Left", "left"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "oculus_go_controls_buttonColor",
    message0: "Button Color:  %1",
    args0: [
      {
        type: "field_colour",
        name: "BUTTON_COLOR",
        colour: "#000000",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "oculus_go_controls_buttonTouchedColor",
    message0: "Button Touched Color:  %1",
    args0: [
      {
        type: "field_colour",
        name: "BUTTON_FOCUS_TOUCHED_COLOR",
        colour: "#777777",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "oculus_go_controls_buttonHighlightColor",
    message0: "Button Highlight Color:  %1",
    args0: [
      {
        type: "field_colour",
        name: "BUTTON_HIGHLIGHT_COLOR",
        colour: "#FFFFFF",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "oculus_go_controls_model",
    message0: "model: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "MODEL",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "oculus_go_controls_armModel",
    message0: "Arm Model: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "ARM_MODEL",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "oculus_go_controls_orientationOffset",
    message0: "Orientation Offset= X :  %1 Y :  %2 Z :  %3",
    args0: [
      {
        type: "field_input",
        name: "POSROTSCALE_X",
        text: "0",
      },
      {
        type: "field_input",
        name: "POSROTSCALE_Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "POSROTSCALE_Z",
        text: "0",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 270,
    tooltip: "",
    helpUrl: "",
  },

  // =================================================================================================================

  {
    type: "vive_focus_controls_options",
    message0: "Vive Focus Controls =  %1",
    args0: [
      {
        type: "input_statement",
        name: "VIVE_FOCUS_CONTROLS_OPTIONS",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "vive_focus_controls_hand",
    message0: "hand: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "HAND",
        options: [
          ["Right", "right"],
          ["Left", "left"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "vive_focus_controls_buttonTouchedColor",
    message0: "Button Touched Color:  %1",
    args0: [
      {
        type: "field_colour",
        name: "BUTTON_FOCUS_TOUCHED_COLOR",
        colour: "#777777",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "vive_focus_controls_buttonHighlightColor",
    message0: "Button Highlight Color:  %1",
    args0: [
      {
        type: "field_colour",
        name: "BUTTON_HIGHLIGHT_COLOR",
        colour: "#FFFFFF",
      },
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "vive_focus_controls_model",
    message0: "model: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "MODEL",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "vive_focus_controls_armModel",
    message0: "Arm Model: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "ARM_MODEL",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "vive_focus_controls_orientationOffset",
    message0: "Orientation Offset= X :  %1 Y :  %2 Z :  %3",
    args0: [
      {
        type: "field_input",
        name: "POSROTSCALE_X",
        text: "0",
      },
      {
        type: "field_input",
        name: "POSROTSCALE_Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "POSROTSCALE_Z",
        text: "0",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 270,
    tooltip: "",
    helpUrl: "",
  },

  // =================================================================================================================

  {
    type: "vr_mode_ui_options",
    message0: "VR mode UI =  %1",
    args0: [
      {
        type: "input_statement",
        name: "vr_mode_ui_OPTIONS",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "vr_mode_ui_enabled",
    message0: "enabled: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "ENABLED",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "vr_mode_ui_enterVRButton",
    message0: "Enter VR Button:  %1",
    args0: [
      {
        type: "field_input",
        name: "ENTER_VR_BUTTON",
        text: "",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "vr_mode_ui_enterARButton",
    message0: "Enter AR Button:  %1",
    args0: [
      {
        type: "field_input",
        name: "ENTER_AR_BUTTON",
        text: "",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "wasd_controls_options",
    message0: "WASD Controls =  %1",
    args0: [
      {
        type: "input_statement",
        name: "WASD_CONTROLS_OPTIONS",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "wasd_controls_acceleration",
    message0: "acceleration:  %1",
    args0: [
      {
        type: "field_input",
        name: "ACCELERATION",
        text: "65",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "wasd_controls_adInverted",
    message0: "adInverted: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "ADINVERTED",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "wasd_controls_enabled",
    message0: "enabled: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "ENABLED",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "wasd_controls_fly",
    message0: "fly: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "FLY",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "wasd_controls_wsInverted",
    message0: "wsInverted: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "WSINVERTED",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "wasd_controls_adAxis",
    message0: "adAxis: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "ADAXIS",
        options: [
          ["x", "x"],
          ["y", "y"],
          ["z", "z"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "wasd_controls_wsAxis",
    message0: "wsAxis: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "WSAXIS",
        options: [
          ["z", "z"],
          ["x", "x"],
          ["y", "y"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "animation_options",
    message0: "Animation =  %1",
    args0: [
      {
        type: "input_statement",
        name: "ANIMATION_OPTION",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "animation_multi",
    message0: "Animation__ %1 %2",
    args0: [
      {
        type: "field_input",
        name: "ANIMATIONNAME",
        text: "NAME",
      },
      {
        type: "input_statement",
        name: "ANIMATION_MULTI",
      },
    ],

    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "animation_propety",
    message0:
      "Property: %1 from:  X: %2 Y: %3 Z: %4 to:  X: %5 Y: %6 Z: %7 loop:  %8 dir:  %9 dur:  %10 easing:  %11",
    args0: [
      {
        type: "field_dropdown",
        name: "Option",
        options: [
          ["Position", "position"],
          ["Rotation", "rotation"],
          ["Scale", "scale"],
        ],
      },
      {
        type: "field_input",
        name: "FROM_X",
        text: "0",
      },
      {
        type: "field_input",
        name: "FROM_Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "FROM_Z",
        text: "0",
      },
      {
        type: "field_input",
        name: "TO_X",
        text: "0",
      },
      {
        type: "field_input",
        name: "TO_Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "TO_Z",
        text: "0",
      },
      {
        type: "field_dropdown",
        name: "LOOP",
        options: [
          ["true", "true"],
          ["fasle", "false"],
        ],
      },
      {
        type: "field_dropdown",
        name: "DIR",
        options: [
          ["alternate", "alternate"],
          ["false", "false"],
        ],
      },
      {
        type: "field_input",
        name: "DUR",
        text: "3000",
      },
      {
        type: "field_dropdown",
        name: "EASING",
        options: [
          ["easeInOutCubic", "easeInOutCubic"],
          ["linear", "easeInOutCubic", "easeInOutElastic"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "animation_property",
    message0:
      "Property: %1 From:  X: %2 Y: %3 Z: %4 to:  X: %5 Y: %6 Z: %7 Loop:  %8 Direction:  %9 Duration:  %10 Easing:  %11",
    args0: [
      {
        type: "field_dropdown",
        name: "Option",
        options: [
          ["Position", "position"],
          ["Rotation", "rotation"],
          ["Scale", "scale"],
          ["Color", "material.color"],
          ["Opacity", "opacity"],
        ],
      },
      {
        type: "field_input",
        name: "FROM_X",
        text: "0",
      },
      {
        type: "field_input",
        name: "FROM_Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "FROM_Z",
        text: "0",
      },
      {
        type: "field_input",
        name: "TO_X",
        text: "0",
      },
      {
        type: "field_input",
        name: "TO_Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "TO_Z",
        text: "0",
      },
      {
        type: "field_dropdown",
        name: "LOOP",
        options: [
          ["true", "true"],
          ["fasle", "false"],
        ],
      },
      {
        type: "field_dropdown",
        name: "DIR",
        options: [
          ["Normal", "normal"],
          ["Alternate", "alternate"],
          ["Reverse", "reverse"],
        ],
      },
      {
        type: "field_input",
        name: "DUR",
        text: "3000",
      },
      {
        type: "field_dropdown",
        name: "EASING",
        options: [
          ["Linear", "linear"],
          ["EaseInOutCubic", "easeInOutCubic"],

          ["EaseInOutElastic", "easeInOutElastic"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "animation_property_property",
    message0: "Property :  %1",
    args0: [
      {
        type: "field_dropdown",
        name: "property",
        options: [
          ["Position", "position"],
          ["Rotation", "rotation"],
          ["Scale", "scale"],
          ["Color", "material.color"],
          ["Opacity", "opacity"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "animation_opacity",
    message0: "From:  %1 %2 To:  %3",
    args0: [
      {
        type: "field_input",
        name: "FROM",
        text: "0",
      },
      {
        type: "input_dummy",
      },
      {
        type: "field_input",
        name: "TO",
        text: "1",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "animation_color",
    message0: "From:  %1 %2 To:  %3",
    args0: [
      {
        type: "field_colour",
        name: "FROM",
        colour: "#ccffff",
      },
      {
        type: "input_dummy",
      },
      {
        type: "field_colour",
        name: "TO",
        colour: "#3333ff",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "animation_property_from",
    message0: "From:  X:  %1 Y:  %2 Z:  %3",
    args0: [
      {
        type: "field_input",
        name: "FROM_X",
        text: "0",
      },
      {
        type: "field_input",
        name: "FROM_Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "FROM_Z",
        text: "0",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "animation_property_to",
    message0: "To:  X:  %1 Y:  %2 Z:  %3",
    args0: [
      {
        type: "field_input",
        name: "TO_X",
        text: "0",
      },
      {
        type: "field_input",
        name: "TO_Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "TO_Z",
        text: "0",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "animation_property_loop",
    message0: "Loop: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "LOOP",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "animation_property_dir",
    message0: "Direction:  %1",
    args0: [
      {
        type: "field_dropdown",
        name: "DIR",
        options: [
          ["Normal", "normal"],
          ["Alternate", "alternate"],
          ["Reverse", "reverse"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "animation_property_dur",
    message0: "Duration :  %1",
    args0: [
      {
        type: "field_input",
        name: "DUR",
        text: "0",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "animation_property_delay",
    message0: "Delay :  %1",
    args0: [
      {
        type: "field_input",
        name: "DELAY",
        text: "1000",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "animation_property_liner",
    message0: "Easing:  %1",
    args0: [
      {
        type: "field_dropdown",
        name: "EAS",
        options: [["Linear", "linear"]],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "animation_property_easeIn",
    message0: "Easing in:  %1",
    args0: [
      {
        type: "field_dropdown",
        name: "EAS",
        options: [
          ["Quad", "easeInQuad"],
          ["Cubic", "easeInCubic"],
          ["Quart", "easeInQuart"],
          ["Quint", "easeInQuint"],
          ["Sine", "easeInSine"],
          ["Expo", "easeInExpo"],
          ["Circ", "easeInCirc"],
          ["Back", "easeInBack"],
          ["Elastic", "easeInElastic"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "animation_property_easeOut",
    message0: "Easing Out:  %1",
    args0: [
      {
        type: "field_dropdown",
        name: "EAS",
        options: [
          ["Quad", "easeOutQuad"],
          ["Cubic", "easeOutCubic"],
          ["Quart", "easeOutQuart"],
          ["Quint", "easeOutQuint"],
          ["Sine", "easeOutSine"],
          ["Expo", "easeOutExpo"],
          ["Circ", "easeOutCirc"],
          ["Back", "easeOutBack"],
          ["Elastic", "easeOutElastic"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "animation_property_easeInOut",
    message0: "Easing In Out:  %1",
    args0: [
      {
        type: "field_dropdown",
        name: "EAS",
        options: [
          ["Quad", "easeInOutQuad"],
          ["Cubic", "easeInOutCubic"],
          ["Quart", "easeInOutQuart"],
          ["Quint", "easeInOutQuint"],
          ["Sine", "easeInOutSine"],
          ["Expo", "easeInOutExpo"],
          ["Circ", "easeInOutCirc"],
          ["Back", "easeInOutBack"],
          ["Elastic", "easeInOutElastic"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "Texture3D",
    message0: "Texture src= %1",
    args0: [
      {
        type: "field_input",
        name: "TEXTURE_SRC",
        text: "default",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "Texture3d_link",
    message0: "Texture from %1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "LINK",
        options: [
          ["Asset", "#"],
          ["Link", ""],
        ],
      },
      {
        type: "field_input",
        name: "SRC_NAME",
        text: "default",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "Texture3D_repeat",
    message0: "repeat  %1 %2",
    args0: [
      {
        type: "field_input",
        name: "TEXTURE_R1",
        text: "1",
      },
      {
        type: "field_input",
        name: "TEXTURE_R2",
        text: "1",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "Texture_NormalMap3D",
    message0: "Normal Map src= %1",
    args0: [
      {
        type: "field_input",
        name: "NORMALMAP_SRC",
        text: "default",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "Texture3D_NormalMap_repeat",
    message0: "Normal Map Repeat  %1 %2",
    args0: [
      {
        type: "field_input",
        name: "TEXTURE_R1",
        text: "1",
      },
      {
        type: "field_input",
        name: "TEXTURE_R2",
        text: "1",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "Texture3D_normal_scale",
    message0: "Normal Scale  %1 %2",
    args0: [
      {
        type: "field_input",
        name: "TEXTURE_R1",
        text: "1",
      },
      {
        type: "field_input",
        name: "TEXTURE_R2",
        text: "1",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "texture3d_roughness",
    message0: "Roughness  %1",
    args0: [
      {
        type: "field_input",
        name: "TEXTURE_R1",
        text: "0.5",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "texture3d_opacity",
    message0: "Opacity  %1",
    args0: [
      {
        type: "field_input",
        name: "TEXTURE_R1",
        text: "0.5",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "a-sky",
    message0: "Sky %1",
    args0: [
      {
        type: "input_statement",
        name: "NAME",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "a_sky_explor",
    message0: "Sky Explorable %1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "EXPLO",
        options: [
          ["True", 'radius="20"'],
          ["False", ""],
        ],
      },
      {
        type: "input_statement",
        name: "NAME",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "imgsrc",
    message0: "src= %1",
    args0: [
      {
        type: "field_input",
        name: "SRC",
        text: "default",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "inspector_code_load",
    message0: "Inspector data:  %1",
    args0: [
      {
        type: "field_input",
        name: "INSPECTOR_COPY",
        text: "Write Code to load",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "event_set_name",
    message0: "Event-Set: %1 %2",
    args0: [
      {
        type: "field_input",
        name: "EVENTNAME",
        text: "name",
      },
      {
        type: "input_statement",
        name: "NAME",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 270,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "event_type",
    message0: "Event: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "EVENT_TYPE",
        options: [
          ["Mouseenter", "mouseenter"],
          ["Mouseleave", "mouseleave"],
          ["Click", "click"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 270,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "event_target",
    message0: "Target:  %1",
    args0: [
      {
        type: "field_input",
        name: "NAME_TARGET",
        text: "target name",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 270,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "event_material",
    message0: "Material %1 %2 %3",
    args0: [
      {
        type: "field_dropdown",
        name: "option",
        options: [["color", "color"]],
      },
      {
        type: "input_dummy",
      },
      {
        type: "field_colour",
        name: "NAME",
        colour: "#ff0000",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 270,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "event_visible",
    message0: "Visible:  %1",
    args0: [
      {
        type: "field_dropdown",
        name: "Visible",
        options: [
          ["True", "true"],
          ["False", "false"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 270,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_cursor",
    message0: "entityCursor",
    previousStatement: null,
    nextStatement: null,
    colour: 270,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "event_position",
    message0: "%1 X :  %2 Y :  %3 Z :  %4",
    args0: [
      {
        type: "field_dropdown",
        name: "POSROTSCALE",
        options: [["Position", "position"]],
      },
      {
        type: "field_input",
        name: "POSROTSCALE_X",
        text: "0",
      },
      {
        type: "field_input",
        name: "POSROTSCALE_Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "POSROTSCALE_Z",
        text: "0",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 270,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_cursor_vr",
    message0: "Cursor %1 VR HEADSET %2 %3 Color:  %4 %5 Radius: %6 %7",
    args0: [
      {
        type: "input_dummy",
        align: "CENTRE",
      },
      {
        type: "field_checkbox",
        name: "VR_MODE",
        checked: false,
      },
      {
        type: "input_dummy",
        align: "CENTRE",
      },
      {
        type: "field_colour",
        name: "NAME",
        colour: "#ff0000",
      },
      {
        type: "input_dummy",
      },
      {
        type: "field_input",
        name: "RADIUS_VALUE",
        text: "1",
      },
      {
        type: "input_statement",
        name: "ANIMATION",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 270,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "img_child",
    message0: " Image ID:%1 %2 Visible %3 %4 Options: %5 Child %6",
    args0: [
      {
        type: "field_input",
        name: "IDNAME",
        text: "name",
      },
      {
        type: "input_dummy",
      },
      {
        type: "field_checkbox",
        name: "VISIBLE",
        checked: true,
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "NAME",
      },

      {
        type: "input_statement",
        name: "CHILD",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "audiosrc",
    message0: "Audio src:  %1 %2 autoplay %3 loop %4 positional %5",
    args0: [
      {
        type: "field_input",
        name: "SRC",
        text: "YOUR-AMBIENCE-SOUND",
      },
      {
        type: "input_dummy",
      },
      {
        type: "field_checkbox",
        name: "AUTOPLAY",
        checked: true,
      },
      {
        type: "field_checkbox",
        name: "LOOP",
        checked: true,
      },
      {
        type: "field_checkbox",
        name: "POSITIONAL",
        checked: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "entity_text_geometry",
    message0: "Text Geometry:  %1",
    args0: [
      {
        type: "input_statement",
        name: "TEXT",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "ar_marker",
    message0: "AR Marker %1 %2",
    args0: [
      {
        type: "field_input",
        name: "AR_MARKER",
        text: "Hiro",
      },
      {
        type: "input_statement",
        name: "AR",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "ar_pattern",
    message0: "AR Marker URL  %1 %2",
    args0: [
      {
        type: "field_input",
        name: "AR_URL",
        text: "path/to/pattern-marker.patt",
      },
      {
        type: "input_statement",
        name: "AR",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "ar_barcode",
    message0: "AR Marker Barcode  %1 %2",
    args0: [
      {
        type: "field_input",
        name: "AR_VALUE",
        text: "5",
      },
      {
        type: "input_statement",
        name: "AR",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "https://au.gmented.com/app/marker/marker.php",
  },

  {
    type: "ar_gps",
    message0: "GPS PLACE %1 latitude: %2 %3 longitude: %4",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "field_input",
        name: "LAT",
        text: "44.475299",
      },
      {
        type: "input_dummy",
      },
      {
        type: "field_input",
        name: "LONG",
        text: "11.384117",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "https://www.latlong.net",
  },

  {
    type: "look_at",
    message0: "Look At:  %1",
    args0: [
      {
        type: "field_input",
        name: "CAMERA_NAME",
        text: "CAMERA-NAME",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "create_room",
    message0: "%1 %2 Option : %3 Child : %4",
    args0: [
      {
        type: "field_dropdown",
        name: "OPTIONS",
        options: [
          ["Room", "room"],
          ["Wall ", "wall"],
          ["Door", "doorhole"],
          ["Door Link", "doorlink"],
          ["Floor", "floor"],
          ["Ceiling", "ceiling"],
          ["Side", "sides"],
        ],
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "OPTION",
      },
      {
        type: "input_statement",
        name: "CHILD",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 315,
    tooltip: "Need Room Component",
    helpUrl: "",
  },

  {
    type: "create_room_door_id",
    message0: "Door ID:  %1",
    args0: [
      {
        type: "field_input",
        name: "ID",
        text: "",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 315,
    tooltip: "Need Room Component",
    helpUrl: "",
  },

  {
    type: "create_room_door_from_to",
    message0: "from  %1 %2 to:  %3",
    args0: [
      {
        type: "field_input",
        name: "FROM",
        text: "",
      },
      {
        type: "input_dummy",
      },
      {
        type: "field_input",
        name: "TO",
        text: "",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 315,
    tooltip: "Need Room Component",
    helpUrl: "",
  },
];

htmlBlocks = htmlBlocks.concat(AframeBlocks);

if (Msg && Msg.blocks) {
  // Update jsons with translations
  for (var iBlock in htmlBlocks) {
    var json = htmlBlocks[iBlock];
    var trs = Msg.blocks[json.type];
    for (var iTr in trs) {
      if (typeof trs[iTr] == "string") {
        json[iTr] = trs[iTr];
      } else if (typeof trs[iTr] == "object") {
        // Mainly for args0 property
        // Follow two levels, then just replace
        for (var iTrObj in trs[iTr]) {
          if (typeof trs[iTr][iTrObj] == "object") {
            for (var index in trs[iTr][iTrObj]) {
              json[iTr][iTrObj][index] = trs[iTr][iTrObj][index];
            }
          } else {
            console.error(
              "Don't know how to translate that: Msg.blocks." +
                iTr +
                "." +
                iTrObj
            );
          }
        }
      } else {
        console.error("Don't know how to translate that: Msg.blocks." + iTr);
      }
    }
  }
}

for (var iBlock in htmlBlocks) {
  function makeBlock(json) {
    Blockly.Blocks[json.type] = {
      init: function () {
        this.jsonInit(json);
      },
    };
  }
  makeBlock(htmlBlocks[iBlock]);
}
