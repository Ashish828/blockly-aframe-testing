"use strict";

var HtmlGenerator = new Blockly.Generator("HTML");

HtmlGenerator.ORDER_ATOMIC = 0;
HtmlGenerator.ORDER_NONE = 0;

HtmlGenerator.init = function (workspace) {};
HtmlGenerator.finish = function (code) {
  return code;
};

HtmlGenerator.scrub_ = function (block, code) {
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = HtmlGenerator.blockToCode(nextBlock);
  return code + nextCode;
};

function removeIndentAndTrailingNewline() {}

HtmlGenerator["baseframe"] = function (block) {
  var statements_head = HtmlGenerator.statementToCode(block, "head");
  var statements_body = HtmlGenerator.statementToCode(block, "body");

  var code =
    '<!DOCTYPE HTML>\n<html>\n<head>\n  <meta charset="utf-8">\n' +
    statements_head +
    "</head>\n\n<body>\n" +
    statements_body +
    "</body>\n</html>\n";

  return code;
};

HtmlGenerator["html"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code = "<!DOCTYPE HTML>\n<html>\n" + statements_content + "</html>\n";
  return code;
};

HtmlGenerator["body"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code = "<body>\n" + statements_content + "</body>\n";
  return code;
};

HtmlGenerator["head"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code =
    '<head>\n  <meta charset="utf-8">\n' + statements_content + "</head>\n";
  return code;
};

HtmlGenerator["title"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "content");

  if (statements_content != "")
    document.getElementById("title").innerText = statements_content;
  else document.getElementById("title").innerText = "untitled web page";

  var code = "<title>" + statements_content.trim() + "</title>\n";
  return code;
};

HtmlGenerator["paragraph"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code = "<p>\n" + statements_content + "</p>\n";
  return code;
};

HtmlGenerator["plaintext"] = function (block) {
  var text_content = block.getFieldValue("content");
  var code = text_content + "\n";
  return code;
};

HtmlGenerator["division"] = function (block) {
  var value_name = HtmlGenerator.valueToCode(
    block,
    "NAME",
    HtmlGenerator.ORDER_ATOMIC
  );
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code = "<div" + value_name + ">\n" + statements_content + "</div>\n";
  return code;
};

HtmlGenerator["style"] = function (block) {
  var statements_name = HtmlGenerator.statementToCode(block, "NAME");
  var code = ' style="' + statements_name.trim() + '"';
  return [code, HtmlGenerator.ORDER_NONE];
};

HtmlGenerator["color"] = function (block) {
  var colour_name = block.getFieldValue("NAME");
  var code = "color: " + colour_name + ";";
  return code;
};

// HtmlGenerator["bgcolour"] = function (block) {
//   var colour_name = block.getFieldValue("NAME");
//   var code = "background-color: " + colour_name + ";";
//   return code;
// };

HtmlGenerator["genericstyle"] = function (block) {
  var text_property = block.getFieldValue("property");
  var text_value = block.getFieldValue("value");
  var code = text_property + ": " + text_value + ";";
  return code;
};

HtmlGenerator["generictag"] = function (block) {
  var text_name = block.getFieldValue("NAME");
  var value_name = HtmlGenerator.valueToCode(
    block,
    "NAME",
    HtmlGenerator.ORDER_ATOMIC
  );
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code =
    "<" +
    text_name +
    value_name +
    ">\n" +
    statements_content +
    "</" +
    text_name +
    ">\n";
  return code;
};

HtmlGenerator["more_attributes"] = function (block) {
  var value_name1 = HtmlGenerator.valueToCode(
    block,
    "NAME1",
    HtmlGenerator.ORDER_ATOMIC
  );
  var value_name2 = HtmlGenerator.valueToCode(
    block,
    "NAME2",
    HtmlGenerator.ORDER_ATOMIC
  );
  var value_name3 = HtmlGenerator.valueToCode(
    block,
    "NAME3",
    HtmlGenerator.ORDER_ATOMIC
  );
  var code = value_name1 + value_name2 + value_name3;
  return [code, HtmlGenerator.ORDER_NONE];
};

HtmlGenerator["genericattribute"] = function (block) {
  var text_attribute = block.getFieldValue("attribute");
  var text_value = block.getFieldValue("value");
  var code = " " + text_attribute + '="' + text_value + '"';
  return [code, HtmlGenerator.ORDER_NONE];
};

HtmlGenerator["link"] = function (block) {
  var text_name = block.getFieldValue("NAME");
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code =
    '<a href="' + text_name + '">' + statements_content.trim() + "</a>\n";
  return code;
};

HtmlGenerator["span"] = function (block) {
  var value_name = HtmlGenerator.valueToCode(
    block,
    "NAME",
    HtmlGenerator.ORDER_ATOMIC
  );
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code =
    "<span" + value_name + ">" + statements_content.trim() + "</span>\n";
  return code;
};

HtmlGenerator["image"] = function (block) {
  var text_image = block.getFieldValue("IMAGE");
  var text_alt = block.getFieldValue("ALT");
  var code = '<img src="' + text_image + '" alt="' + text_alt + '">\n';
  return code;
};

HtmlGenerator["emphasise"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code = "<em>" + statements_content.trim() + "</em>\n";
  return code;
};

HtmlGenerator["strong"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code = "<strong>" + statements_content.trim() + "</strong>\n";
  return code;
};

HtmlGenerator["headline"] = function (block) {
  var dropdown_name = block.getFieldValue("NAME");
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code =
    "<" +
    dropdown_name +
    ">" +
    statements_content.trim() +
    "</" +
    dropdown_name +
    ">\n";
  return code;
};

HtmlGenerator["linebreak"] = function (block) {
  var code = "<br>\n";
  return code;
};

HtmlGenerator["horizontalbreak"] = function (block) {
  var code = "<hr>\n";
  return code;
};

HtmlGenerator["unorderedlist"] = function (block) {
  var statements_name = HtmlGenerator.statementToCode(block, "NAME");
  var code = "<ul>\n" + statements_name + "</ul>\n";
  return code;
};

HtmlGenerator["orderedlist"] = function (block) {
  var statements_name = HtmlGenerator.statementToCode(block, "NAME");
  var code = "<ol>\n" + statements_name + "</ol>\n";
  return code;
};

HtmlGenerator["listelement"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code = "<li>" + statements_content + "</li>\n";
  return code;
};

HtmlGenerator["inserted"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code = "<ins>" + statements_content.trim() + "</ins>\n";
  return code;
};

HtmlGenerator["deleted"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code = "<del>" + statements_content.trim() + "</del>\n";
  return code;
};

HtmlGenerator["super"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code = "<sup>" + statements_content.trim() + "</sup>\n";
  return code;
};

HtmlGenerator["sub"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code = "<sub>" + statements_content.trim() + "</sub>\n";
  return code;
};

HtmlGenerator["code"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code = "<code>\n" + statements_content + "</code>\n";
  return code;
};

HtmlGenerator["quote"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code = "<q>" + statements_content.trim() + "</q>\n";
  return code;
};

HtmlGenerator["blockquote"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code = "<blockquote>\n" + statements_content + "</blockquote>\n";
  return code;
};

HtmlGenerator["sample"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code = "<samp>\n" + statements_content + "</samp>\n";
  return code;
};

HtmlGenerator["keyboard"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code = "<kbd>\n" + statements_content + "</kbd>\n";
  return code;
};

HtmlGenerator["variable"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code = "<var>" + statements_content.trim() + "</var>\n";
  return code;
};

HtmlGenerator["form"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code = "<form>\n" + statements_content + "</form>\n";
  return code;
};

HtmlGenerator["table"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code = "<table>\n" + statements_content + "</table>\n";
  return code;
};

HtmlGenerator["tablerow"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code = "<tr>\n" + statements_content + "</tr>\n";
  return code;
};

HtmlGenerator["tablecell"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code = "<td>" + statements_content.trim() + "</td>\n";
  return code;
};

HtmlGenerator["input_text"] = function (block) {
  var text_default = block.getFieldValue("default");
  var code = '<input value="' + text_default + '">\n';
  return code;
};

HtmlGenerator["button"] = function (block) {
  var statements_name = HtmlGenerator.statementToCode(block, "NAME");
  var code = "<button>" + statements_name.trim() + "</button>\n";
  return code;
};

HtmlGenerator["input"] = function (block) {
  var dropdown_type = block.getFieldValue("type");
  var text_value = block.getFieldValue("value");
  var value_text = HtmlGenerator.valueToCode(
    block,
    "text",
    HtmlGenerator.ORDER_ATOMIC
  );
  var code =
    '<input type="' +
    dropdown_type +
    '" value="' +
    text_value +
    '"' +
    value_text +
    " />\n";
  return code;
};

HtmlGenerator["script"] = function (block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<script>\n" + statements_content + "</script>\n";
  return code;
};

HtmlGenerator["onclick"] = function (block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  var code = ' onclick="' + statements_name.trim() + '"';
  return [code, HtmlGenerator.ORDER_NONE];
};

HtmlGenerator["body_attributes"] = function (block) {
  var value_name = HtmlGenerator.valueToCode(
    block,
    "NAME",
    HtmlGenerator.ORDER_ATOMIC
  );
  var statements_content = HtmlGenerator.statementToCode(block, "content");
  var code = "<body" + value_name + ">\n" + statements_content + "</body>\n";
  return code;
};

HtmlGenerator["import_script"] = function (block) {
  var dropdown_import = block.getFieldValue("IMPORT");
  // TODO: Assemble JavaScript into code variable.
  var code = '<script src="' + dropdown_import + '"></script>\n';
  if (dropdown_import == "https://aframe.io/releases/1.3.0/aframe.min.js") {
    code = code + '<script src="js/arrow.js"></script>\n';
  }
  return code;
};

HtmlGenerator["script_video_controll_NEW"] = function (block) {
  var text_src = block.getFieldValue("SRC");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "<script>\nAFRAME.registerComponent('play-pause', {\ninit: function () {\nvar myVideo = document.querySelector('#" +
    text_src +
    "');\n	var videoControls = document.querySelector( '#videoControls');\nthis.el.addEventListener('click', function () {\nif (myVideo.paused) {\nmyVideo.play();\nvideoControls.setAttribute('src', 'ASSETs/pause.png');\n} else {\nmyVideo.pause();\nvideoControls.setAttribute('src', 'ASSETs/play.png');\n}\n});\n}\n});\n</script>";
  return code;
};

HtmlGenerator["import_aframe"] = function (block) {
  var text_name = block.getFieldValue("NAME");
  // TODO: Assemble JavaScript into code variable.
  var code =
    '<script src="' +
    text_name +
    '"></script>\n<script src="js/arrow.js"></script>\n';
  return code;
};

HtmlGenerator["scene_create_AR"] = function (block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var checkbox_debug = block.getFieldValue("DEBUG") == "TRUE";
  var text_matrixcode = block.getFieldValue("MATRIXCODE");
  var statements_content = HtmlGenerator.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "<a-scene embedded arjs='sourceType: webcam; debugUIEnabled: " +
    checkbox_debug +
    "; detectionMode: mono_and_matrix; matrixCodeType: " +
    text_matrixcode +
    ";'>\n" +
    statements_content +
    "</a-scene>\n";
  return code;
};

HtmlGenerator["scene_create_GPS"] = function (block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var checkbox_debug = block.getFieldValue("DEBUG") == "TRUE";
  var statements_content = HtmlGenerator.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "<a-scene embedded arjs='sourceType: webcam; debugUIEnabled: " +
    checkbox_debug +
    ";'>\n" +
    statements_content +
    "</a-scene>\n";
  return code;
};

HtmlGenerator["scene_create"] = function (block) {
  var text_idname = block.getFieldValue("IDNAME");
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var statements_content = HtmlGenerator.statementToCode(block, "NAME");
  var statements_opt_content = HtmlGenerator.statementToCode(block, "OPTNAME");
  // TODO: Assemble JavaScript into code variable.
  var code =
    '<a-scene id="' +
    text_idname +
    '" ' +
    statements_opt_content +
    " >\n" +
    statements_content +
    "</a-scene>\n";
  return code;
};

HtmlGenerator["background_color"] = function (block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var colour_name = block.getFieldValue("NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = ' background="color: ' + colour_name;
  return code;
};

HtmlGenerator["camera_3d"] = function (block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var statements_content = HtmlGenerator.statementToCode(block, "CAMERA3D");
  // TODO: Assemble JavaScript into code variable.
  var code = "<a-camera" + statements_content + "></a-camera>\n";
  return code;
};

HtmlGenerator["light_3d"] = function (block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var statements_content = HtmlGenerator.statementToCode(block, "LIGHT3D");
  // TODO: Assemble JavaScript into code variable.
  var code = "<a-light" + statements_content + "></a-light>\n";
  return code;
};

HtmlGenerator["link_3d"] = function (block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var statements_content = HtmlGenerator.statementToCode(block, "LINK3D");
  // TODO: Assemble JavaScript into code variable.
  var code = "<a-link" + statements_content + "></<a-link>\n";
  return code;
};

HtmlGenerator["light3d_type"] = function (block) {
  var dropdown_type_light = block.getFieldValue("TYPE_LIGHT");
  // TODO: Assemble JavaScript into code variable.
  var code = 'type= "' + dropdown_type_light + '"\n';
  return code;
};

HtmlGenerator["light3d_intenity"] = function (block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var text_light_intensity = block.getFieldValue("LIGHT3DINTESITY");
  // TODO: Assemble JavaScript into code variable.

  var code = 'intensity = "' + text_light_intensity + '"\n';

  return code;
};

HtmlGenerator["camera_3d_child"] = function (block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var dropdown_name = block.getFieldValue("DROPDOWN");
  var statements_content = HtmlGenerator.statementToCode(block, "NAME");
  var statements_child = HtmlGenerator.statementToCode(block, "CHILD");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "<a-" +
    dropdown_name +
    " " +
    statements_content +
    ">" +
    statements_child +
    "</a-" +
    dropdown_name +
    ">\n";

  return code;
};

HtmlGenerator["cursor3d"] = function (block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var colour_color3d = block.getFieldValue("CURSOR3D");
  // TODO: Assemble JavaScript into code variable.
  var code = '<a-cursor color="' + colour_color3d + '"></a-cursor>';

  return code;
};

HtmlGenerator["cursor3dHEX"] = function (block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var text_width = block.getFieldValue("CURSOR3DHEX");
  // TODO: Assemble JavaScript into code variable.

  var code = '<a-cursor color= "#' + text_width + '"></a-cursor>';

  return code;
};

HtmlGenerator["camera_cursor"] = function (block) {
  var checkbox_cursorevisibile =
    block.getFieldValue("CURSOREVISIBILE") == "TRUE";
  // TODO: Assemble JavaScript into code variable.
  var code = 'cursor-visible="' + checkbox_cursorevisibile + '"\n';

  return code;
};

HtmlGenerator["camera_cursor_color"] = function (block) {
  var colour_name = block.getFieldValue("NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = 'cursor-color="' + colour_name + '"\n';

  return code;
};

HtmlGenerator["camera_cursor_scale"] = function (block) {
  var text_scale = block.getFieldValue("SCALE");
  // TODO: Assemble JavaScript into code variable.
  var code = 'cursor-scale="' + text_scale + '"\n';

  return code;
};

HtmlGenerator["camera_name"] = function (block) {
  var text_gps_camera = block.getFieldValue("GPS_CAMERA");
  // TODO: Assemble JavaScript into code variable.
  var code = " " + text_gps_camera + " ";
  return code;
};

HtmlGenerator["camera_rotation_reader"] = function (block) {
  var text_rotation = block.getFieldValue("ROTATION-READER");
  // TODO: Assemble JavaScript into code variable.
  var code = "" + text_rotation + "";
  return code;
};

HtmlGenerator["camera"] = function (block) {
  var text = block.getFieldValue("CAMERA");
  // TODO: Assemble JavaScript into code variable.
  var code = "" + text + " ";
  return code;
};

HtmlGenerator["look_controls"] = function (block) {
  var text = block.getFieldValue("LOOK_CONTROLS");
  // TODO: Assemble JavaScript into code variable.
  var code = "" + text + " ";
  return code;
};

HtmlGenerator["hide_on_enter_ar"] = function (block) {
  var text = block.getFieldValue("HIDE_ON_ENTER_AR");
  // TODO: Assemble JavaScript into code variable.
  var code = "" + text + " ";
  return code;
};

HtmlGenerator["camera_cursor_opacity"] = function (block) {
  var text_opacity = block.getFieldValue("OPACITY");
  // TODO: Assemble JavaScript into code variable.
  var code = 'cursor-opacity="' + text_opacity + '"\n';

  return code;
};

HtmlGenerator["wasd_fps"] = function (block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var dropdown_wasd = block.getFieldValue("WASD");
  // TODO: Assemble JavaScript into code variable.
  var code = ' wasd-controls-enabled="' + dropdown_wasd + '"'; //depth="4" height="4" width="4"

  return code;
};

HtmlGenerator["assets_list"] = function (block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var statements_content = HtmlGenerator.statementToCode(block, "assetslist");
  // TODO: Assemble JavaScript into code variable.
  var code = "<a-assets>\n\t" + statements_content + "\n</a-assets>\n";
  return code;
};

HtmlGenerator["asset_item"] = function (block) {
  var text_idname = block.getFieldValue("IDNAME");
  var text_url = block.getFieldValue("URL");
  // TODO: Assemble JavaScript into code variable.
  if (FileDB.getData(text_url)) {
    text_url = FileDB.getData(text_url);
  }
  var code =
    '<a-asset-item id="' +
    text_idname +
    '" src="' +
    text_url +
    '"></a-asset-item>\n';
  return code;
};

HtmlGenerator["asset_img"] = function (block) {
  var text_idname = block.getFieldValue("IDNAME");
  var text_url = block.getFieldValue("URL");
  // TODO: Assemble JavaScript into code variable.
  if (FileDB.getData(text_url)) {
    text_url = FileDB.getData(text_url);
  }
  var code = '<img id="' + text_idname + '" src="' + text_url + '">\n';
  return code;
};

HtmlGenerator["asset_audio"] = function (block) {
  var text_idname = block.getFieldValue("IDNAME");
  var text_url = block.getFieldValue("URL");
  // TODO: Assemble JavaScript into code variable.
  if (FileDB.getData(text_url)) {
    text_url = FileDB.getData(text_url);
  }
  var code =
    '<audio id="' + text_idname + '" src="' + text_url + '"></audio>\n';
  return code;
};

HtmlGenerator["asset_video"] = function (block) {
  var text_idname = block.getFieldValue("IDNAME");
  var text_url = block.getFieldValue("URL");
  var checkbox_loop = block.getFieldValue("Loop") == "TRUE";
  // TODO: Assemble JavaScript into code variable.
  if (FileDB.getData(text_url)) {
    text_url = FileDB.getData(text_url);
  }
  var code =
    '<video id="' +
    text_idname +
    '" src="' +
    text_url +
    '" autoplay loop="' +
    checkbox_loop +
    '">\n';
  return code;
};

HtmlGenerator["gltf_entity"] = function (block) {
  var text_idname = block.getFieldValue("IDNAME");
  var statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  var statements_name = HtmlGenerator.statementToCode(block, "NAME");
  var text_classname = block.getFieldValue("CLASSNAME");
  // TODO: Assemble JavaScript into code variable.
  var code =
    '<a-entity class="' +
    text_classname +
    '"  gltf-model="#' +
    text_idname +
    '" ' +
    statements_content +
    ">" +
    statements_name +
    "</a-entity>\n";
  return code;
};

HtmlGenerator["a-entity-env"] = function (block) {
  var env = block.getFieldValue("ENV");

  // TODO: Assemble JavaScript into code variable.
  var code = '<a-entity environment="preset:' + env + '" ' + "></a-entity>\n";
  return code;
};

HtmlGenerator["obj_entity"] = function (block) {
  var dropdown_objdrop = block.getFieldValue("OBJDROP");
  var text_objlink = block.getFieldValue("OBJLINK");
  var statements_objname = HtmlGenerator.statementToCode(block, "OBJNAME");
  var dropdown_mtldrop = block.getFieldValue("MTLDROP");
  var text_mtllink = block.getFieldValue("MTLLINK");
  // TODO: Assemble JavaScript into code variable.
  var code =
    '<a-obj-model src="' +
    dropdown_objdrop +
    text_objlink +
    '" mtl="' +
    dropdown_mtldrop +
    text_mtllink +
    '" ' +
    statements_objname +
    "></a-obj-model>\n";
  return code;
};

HtmlGenerator["extra_entity"] = function (block) {
  var dropdown_typedrop = block.getFieldValue("TYPEDROP");
  var dropdown_srcdrop = block.getFieldValue("SRCDROP");
  var text_srclink = block.getFieldValue("SRCLINK");
  var statements_name = HtmlGenerator.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code;
  switch (dropdown_typedrop) {
    case "dae":
      code =
        '<a-entity collada-model-legacy="' +
        dropdown_srcdrop +
        text_srclink +
        '" ' +
        statements_name +
        "></a-entity>\n";
      break;
    case "fbx":
      code =
        '<a-entity fbx-model="' +
        dropdown_srcdrop +
        text_srclink +
        '" ' +
        statements_name +
        "></a-entity>\n";
      break;
    default:
      code = "error!";
  }
  return code;
};

HtmlGenerator["a-entity"] = function (block) {
  var text_idname = block.getFieldValue("IDNAME");
  var statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  var statements_name = HtmlGenerator.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code =
    '<a-entity id="' +
    text_idname +
    '" ' +
    statements_name +
    ">" +
    statements_content +
    "</a-entity>\n";
  return code;
};

HtmlGenerator["entity_text"] = function (block) {
  var statements_text = HtmlGenerator.statementToCode(block, "TEXT");
  // TODO: Assemble JavaScript into code variable.
  var code = '\ntext = "' + statements_text + '"\n';
  return code;
};

HtmlGenerator["entity_text_value"] = function (block) {
  var text_value = block.getFieldValue("VALUE");
  // TODO: Assemble JavaScript into code variable.
  var code = "value:" + text_value + ";\n";
  return code;
};

HtmlGenerator["entity_dimension"] = function (block) {
  var dropdown_dim = block.getFieldValue("DIM");
  var number_dimvalue = block.getFieldValue("DIMVALUE");
  // TODO: Assemble JavaScript into code variable.
  var code = "" + dropdown_dim + ":" + number_dimvalue + ";\n";
  return code;
};

HtmlGenerator["entity_text_font"] = function (block) {
  var dropdown_dim = block.getFieldValue("DIM");
  // TODO: Assemble JavaScript into code variable.
  var code = "font:" + dropdown_dim + ";\n";
  return code;
};

HtmlGenerator["entity_shader"] = function (block) {
  var dropdown_dim = block.getFieldValue("DIM");
  // TODO: Assemble JavaScript into code variable.
  var code = "shader:" + dropdown_dim + ";\n";
  return code;
};

HtmlGenerator["entity_color"] = function (block) {
  var text_color = block.getFieldValue("NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = "color:" + text_color + ";\n";
  return code;
};

HtmlGenerator["entity_color_HEX"] = function (block) {
  var text_color = block.getFieldValue("COLOR");
  // TODO: Assemble JavaScript into code variable.
  var code = "color:" + text_color + ";\n";
  return code;
};

HtmlGenerator["entity_align"] = function (block) {
  var dropdown_name = block.getFieldValue("NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = "align:" + dropdown_name + ";\n";
  return code;
};

HtmlGenerator["entity_wrapcount"] = function (block) {
  var number_wrapcount = block.getFieldValue("WRAPCOUNT");
  // TODO: Assemble JavaScript into code variable.
  var code = "wrapCount:" + number_wrapcount + ";\n";
  return code;
};

HtmlGenerator["entity_geometry"] = function (block) {
  var statements_text = HtmlGenerator.statementToCode(block, "GEOMETRY");
  // TODO: Assemble JavaScript into code variable.
  var code = '\ngeometry = "' + statements_text + '"\n';
  return code;
};

HtmlGenerator["entity_geometry_primitive"] = function (block) {
  var dropdown_name = block.getFieldValue("NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = "primitive: " + dropdown_name + ";\n";
  return code;
};

HtmlGenerator["entity_geometry_dimension"] = function (block) {
  var dropdown_name = block.getFieldValue("NAME");
  var text_value = block.getFieldValue("VALUE");
  // TODO: Assemble JavaScript into code variable.
  var code = "" + dropdown_name + " : " + text_value + ";\n";
  return code;
};

HtmlGenerator["entity_material"] = function (block) {
  var statements_text = HtmlGenerator.statementToCode(block, "MATERIAL");
  // TODO: Assemble JavaScript into code variable.
  var code = '\nmaterial = "' + statements_text + '"\n';
  return code;
};

HtmlGenerator["entity_material_color"] = function (block) {
  var colour_color = block.getFieldValue("COLOR");
  // TODO: Assemble JavaScript into code variable.
  var code = "color: " + colour_color + ";\n";
  return code;
};

HtmlGenerator["entity_material_color_hex"] = function (block) {
  var text_color = block.getFieldValue("COLOR");
  // TODO: Assemble JavaScript into code variable.
  var code = "color: " + text_color + ";\n";
  return code;
};

HtmlGenerator["entity_material_visible"] = function (block) {
  var checkbox_visible = block.getFieldValue("VISIBLE") == "TRUE";
  // TODO: Assemble JavaScript into code variable.
  var code = "visible: " + checkbox_visible + ";\n";
  return code;
};

HtmlGenerator["animation"] = function (block) {
  var dropdown_animation = block.getFieldValue("ANIMATION");
  var text_value = block.getFieldValue("VALUE");
  // TODO: Assemble JavaScript into code variable.
  var code = "animation." + dropdown_animation + " : " + text_value + ";\n";
  return code;
};

HtmlGenerator["entity_particle-system"] = function (block) {
  var statements_text = HtmlGenerator.statementToCode(block, "PARTICEL");
  // TODO: Assemble JavaScript into code variable.
  var code = '\nparticle-system = "' + statements_text + '"\n';
  return code;
};

HtmlGenerator["entity_particle_system_preset"] = function (block) {
  var dropdown_preset = block.getFieldValue("PRESET");
  // TODO: Assemble JavaScript into code variable.
  var code = "preset:" + dropdown_preset + ";\n";
  return code;
};

HtmlGenerator["entity_particleCount"] = function (block) {
  var number_particelcount = block.getFieldValue("PARTICELCOUNT");
  // TODO: Assemble JavaScript into code variable.
  var code = "particleCount:" + number_particelcount + ";\n";
  return code;
};

HtmlGenerator["entity_paticel_velocityvalue"] = function (block) {
  var number_velocityvalue = block.getFieldValue("VELOCITYVALUE");
  // TODO: Assemble JavaScript into code variable.
  var code = "velocityValue:" + number_velocityvalue + ";\n";
  return code;
};

HtmlGenerator["entity_texture"] = function (block) {
  var text_texture = block.getFieldValue("TEXTURE");
  // TODO: Assemble JavaScript into code variable.
  var code = "texture:" + text_texture + ";\n";
  return code;
};

HtmlGenerator["import_model_gltf"] = function (block) {
  var text_name = block.getFieldValue("NAME");
  // TODO: Assemble JavaScript into code variable.
  var code =
    '<a-assets>\n<a-asset-item id="tree" src="' +
    text_name +
    '"></a-asset-item>\n </a-assets>\n  <a-entity gltf-model="#tree"></a-entity>\n';
  return code;
};

HtmlGenerator["import_model_obj"] = function (block) {
  var text_name = block.getFieldValue("NAME");
  // TODO: Assemble JavaScript into code variable.
  var code =
    '<a-assets>\n<a-asset-item id="tree" src="' +
    text_name +
    '"></a-asset-item>\n </a-assets>\n  <a-obj-model src="#tree" mtl=""></a-obj-model>\n';
  return code;
};

HtmlGenerator["primitive"] = function (block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var dropdown_name = block.getFieldValue("DROPDOWN");
  var text_idname = block.getFieldValue("IDNAME");
  var statements_content = HtmlGenerator.statementToCode(block, "NAME");
  var checkbox_visible = block.getFieldValue("VISIBLE") == "TRUE";
  // TODO: Assemble JavaScript into code variable.
  var code =
    "<a-" +
    dropdown_name +
    ' id="' +
    text_idname +
    '" visible="' +
    checkbox_visible +
    '" ' +
    statements_content +
    "></a-" +
    dropdown_name +
    ">\n";
  return code;
};

HtmlGenerator["primitive_child"] = function (block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var dropdown_name = block.getFieldValue("DROPDOWN");
  var text_idname = block.getFieldValue("IDNAME");
  var statements_content = HtmlGenerator.statementToCode(block, "NAME");
  var statements_child = HtmlGenerator.statementToCode(block, "CHILD");
  var checkbox_visible = block.getFieldValue("VISIBLE") == "TRUE";
  // TODO: Assemble JavaScript into code variable.
  var code =
    "<a-" +
    dropdown_name +
    ' id="' +
    text_idname +
    '" visible="' +
    checkbox_visible +
    '" ' +
    statements_content +
    ">" +
    statements_child +
    "</a-" +
    dropdown_name +
    ">\n";

  return code;
};
// arrow primitive and attributes
HtmlGenerator["arrow_primitive"] = function (block) {
  var number_x = block.getFieldValue("X");
  var number_y = block.getFieldValue("Y");
  var number_z = block.getFieldValue("Z");
  var statements_name = HtmlGenerator.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code =
    '<a-arrow direction="' +
    number_x +
    " " +
    number_y +
    " " +
    number_z +
    '"' +
    statements_name +
    " > </a-arrow>\n";
  return code;
};

HtmlGenerator["arrow_lengths"] = function (block) {
  var dropdown_attribute = block.getFieldValue("ATTRIBUTE");
  var number_name = block.getFieldValue("NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = " " + dropdown_attribute + '="' + number_name + '"';
  return code;
};

HtmlGenerator["color3d"] = function (block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var colour_color3d = block.getFieldValue("COLOR3D");
  // TODO: Assemble JavaScript into code variable.
  var code = ' color="' + colour_color3d + '"';

  return code;
};

HtmlGenerator["color3dHEX"] = function (block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var text_width = block.getFieldValue("COLOR3DHEX");
  // TODO: Assemble JavaScript into code variable.

  //var code = '<a-entity geometry="primitive: '+ dropdown_name + '" material="color: red"></a-entity>\n';
  var code = ' color= "#' + text_width + '"'; //position="0 1 -1"

  return code;
};

HtmlGenerator["posrotscale_3d_OLD"] = function (block) {
  var dropdown_posrotscale = block.getFieldValue("POSROTSCALE");
  var text_posrotscale_x = block.getFieldValue("POSROTSCALE_X");
  var text_posrotscale_y = block.getFieldValue("POSROTSCALE_Y");
  var text_posrotscale_z = block.getFieldValue("POSROTSCALE_Z");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "" +
    dropdown_posrotscale +
    '= "' +
    text_posrotscale_x +
    " " +
    text_posrotscale_y +
    " " +
    text_posrotscale_z +
    '" ';

  return code;
};

HtmlGenerator["scene_opt"] = function (block) {
  var dropdown_posrotscale = block.getFieldValue("POSROTSCALE");
  // TODO: Assemble JavaScript into code variable.
  var code = " " + dropdown_posrotscale;

  return code;
};

HtmlGenerator["dimension_3d"] = function (block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var dropdown_dimension = block.getFieldValue("DIMENSION");
  var text_dimension_value = block.getFieldValue("DIMENSION_VALUE");
  // TODO: Assemble JavaScript into code variable.

  //var code = '<a-entity geometry="primitive: '+ dropdown_name + '" material="color: red"></a-entity>\n';
  var code = " " + dropdown_dimension + '= "' + text_dimension_value + '"';

  return code;
};

HtmlGenerator["side3d"] = function (block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var dropdown_side = block.getFieldValue("SIDE");
  // TODO: Assemble JavaScript into code variable.
  var code = ' side="' + dropdown_side + '"'; //depth="4" height="4" width="4"

  return code;
};

HtmlGenerator["open_end3d"] = function (block) {
  var checkbox_openend = block.getFieldValue("OPENEND") == "TRUE";
  // TODO: Assemble JavaScript into code variable.
  var code = 'open-ended="' + checkbox_openend + '"\n';
  return code;
};

HtmlGenerator["href_3d"] = function (block) {
  var text_href = block.getFieldValue("HREF");
  // TODO: Assemble JavaScript into code variable.
  var code = 'href="' + text_href + '"\n';
  return code;
};

HtmlGenerator["image_3d"] = function (block) {
  var text_image = block.getFieldValue("IMAGE");
  // TODO: Assemble JavaScript into code variable.
  var code = 'image="' + text_image + '"\n';
  return code;
};

HtmlGenerator["title_3d"] = function (block) {
  var text_title = block.getFieldValue("TITLE");
  // TODO: Assemble JavaScript into code variable.
  var code = 'title="' + text_title + '"\n';
  return code;
};

HtmlGenerator["videosphere360"] = function (block) {
  var text_360_src = block.getFieldValue("360_SRC");
  var statements_360_option = HtmlGenerator.statementToCode(
    block,
    "360_Option"
  );
  // TODO: Assemble JavaScript into code variable.
  var code =
    '<a-videosphere src="#' +
    text_360_src +
    '"' +
    statements_360_option +
    "></a-videosphere>\n";
  return code;
};

HtmlGenerator["video_src"] = function (block) {
  var text_360_src = block.getFieldValue("360_SRC");
  var statements_360_option = HtmlGenerator.statementToCode(
    block,
    "360_Option"
  );
  // TODO: Assemble JavaScript into code variable.
  var code = 'src="#' + text_360_src + '"' + statements_360_option + "\n";
  return code;
};

HtmlGenerator["video_child"] = function (block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var text_idname = block.getFieldValue("IDNAME");
  var statements_content = HtmlGenerator.statementToCode(block, "NAME");
  var statements_child = HtmlGenerator.statementToCode(block, "CHILD");
  var checkbox_visible = block.getFieldValue("VISIBLE") == "TRUE";
  // TODO: Assemble JavaScript into code variable.
  var code =
    '<a-video id="' +
    text_idname +
    '" visible="' +
    checkbox_visible +
    '" ' +
    statements_content +
    ">" +
    statements_child +
    "</a-video>\n";

  return code;
};

//background_options
HtmlGenerator["background_options"] = function (block) {
  var statements_background_options = HtmlGenerator.statementToCode(
    block,
    "BACKGROUND_OPTION"
  );

  var code = ' background="' + statements_background_options + '"';
  return code;
};
//background_color
HtmlGenerator["background_color"] = function (block) {
  var colour_name = block.getFieldValue("NAME");
  var code = "color:" + colour_name + "; ";
  return code;
};

// background_transparent
HtmlGenerator["background_transparent"] = function (block) {
  var dropdown_option = block.getFieldValue("property");

  var code = "transparent:" + dropdown_option + "; ";
  return code;
};

// ============================================================================

// vive_controls_options, VIVE_CONTROLS_OPTIONS
HtmlGenerator["vive_controls_options"] = function (block) {
  var statements_hit_test_options = HtmlGenerator.statementToCode(
    block,
    "VIVE_CONTROLS_OPTIONS"
  );

  var code = ' vive-controls="' + statements_hit_test_options + "";
  return code;
};
// vive_controls_hand, HAND
HtmlGenerator["vive_controls_hand"] = function (block) {
  var dropdown_hand = block.getFieldValue("HAND");
  // TODO: Assemble JavaScript into code variable.
  var code = " hand: " + dropdown_hand + ";";

  return code;
};

// vive_controls_buttonColor, BUTTON_COLOR
HtmlGenerator["vive_controls_buttonColor"] = function (block) {
  var colour_name = block.getFieldValue("BUTTON_COLOR");
  var code = "buttonColor: " + colour_name + ";";
  return code;
};

// vive_controls_buttonHighlightColor, BUTTON_HIGHLIGHT_COLOR
HtmlGenerator["vive_controls_buttonHighlightColor"] = function (block) {
  var colour_name = block.getFieldValue("BUTTON_HIGHLIGHT_COLOR");
  var code = "buttonHighlightColor: " + colour_name + ";";
  return code;
};

// vive_controls_model, MODEL
HtmlGenerator["vive_controls_model"] = function (block) {
  var dropdown_model = block.getFieldValue("MODEL");
  // TODO: Assemble JavaScript into code variable.
  var code = " model: " + dropdown_model + ";";

  return code;
};

HtmlGenerator["vive_controls_orientationOffset"] = function (block) {
  var text_posrotscale_x = block.getFieldValue("POSROTSCALE_X");
  var text_posrotscale_y = block.getFieldValue("POSROTSCALE_Y");
  var text_posrotscale_z = block.getFieldValue("POSROTSCALE_Z");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "orientationOffset: " +
    text_posrotscale_x +
    " " +
    text_posrotscale_y +
    " " +
    text_posrotscale_z +
    ";";

  return code;
};

// ==============================================================================================================

// hand_controls_options, HAND_CONTROLS_OPTIONS
HtmlGenerator["hand_controls_options"] = function (block) {
  var statements_hit_test_options = HtmlGenerator.statementToCode(
    block,
    "HAND_CONTROLS_OPTIONS"
  );

  var code = ' hand-controls="' + statements_hit_test_options + '" ';
  return code;
};
// hand_controls_hand, HAND
HtmlGenerator["hand_controls_hand"] = function (block) {
  var dropdown_hand = block.getFieldValue("HAND");
  // TODO: Assemble JavaScript into code variable.
  var code = " hand: " + dropdown_hand + ";";

  return code;
};
// hand_controls_color, COLOR
HtmlGenerator["hand_controls_color"] = function (block) {
  var colour_name = block.getFieldValue("COLOR");
  var code = "color: " + colour_name + ";";
  return code;
};
// hand_controls_handModelStyle, HAND_MODEL_STYLE
HtmlGenerator["hand_controls_handModelStyle"] = function (block) {
  var dropdown_hand = block.getFieldValue("HAND_MODEL_STYLE");
  // TODO: Assemble JavaScript into code variable.
  var code = " handModelStyle: " + dropdown_hand + ";";

  return code;
};

// =================================================================================================================
// hand_tracking_controls_options, HAND_TRACKING_CONTROLS_OPTIONS
HtmlGenerator["hand_tracking_controls_options"] = function (block) {
  var statements_hit_test_options = HtmlGenerator.statementToCode(
    block,
    "HAND_TRACKING_CONTROLS_OPTIONS"
  );

  var code = ' hand-tracking-controls="' + statements_hit_test_options + '" ';
  return code;
};
// hand_tracking_controls_hand, HAND
HtmlGenerator["hand_tracking_controls_hand"] = function (block) {
  var dropdown_hand = block.getFieldValue("HAND");
  // TODO: Assemble JavaScript into code variable.
  var code = " hand: " + dropdown_hand + ";";

  return code;
};
// hand_tracking_controls_modelColor, MODEL_COLOR
HtmlGenerator["hand_tracking_controls_modelColor"] = function (block) {
  var colour_name = block.getFieldValue("MODEL_COLOR");
  var code = "modelColor: " + colour_name + ";";
  return code;
};
// hand_tracking_controls_handModelStyle, HAND_MODEL_STYLE
HtmlGenerator["hand_tracking_controls_handModelStyle"] = function (block) {
  var dropdown_hand = block.getFieldValue("HAND_MODEL_STYLE");
  // TODO: Assemble JavaScript into code variable.
  var code = " modelStyle: " + dropdown_hand + ";";

  return code;
};

// ==============================================================================================================
// keyboard_shortcuts_options, KEYBOARD_SHORTCUTS_OPTIONS
HtmlGenerator["keyboard_shortcuts_options"] = function (block) {
  var statements_hit_test_options = HtmlGenerator.statementToCode(
    block,
    "KEYBOARD_SHORTCUTS_OPTIONS"
  );

  var code = ' keyboard-shortcuts="' + statements_hit_test_options + '" ';
  return code;
};

// keyboard_shortcuts_enterVR, ENTER_VR
HtmlGenerator["keyboard_shortcuts_enterVR"] = function (block) {
  var dropdown_model = block.getFieldValue("ENTER_VR");
  // TODO: Assemble JavaScript into code variable.
  var code = " enterVR: " + dropdown_model + ";";

  return code;
};

// ==============================================================================================================

// tracked_controls_options, Tracked_CONTROLS_OPTIONS
HtmlGenerator["tracked_controls_options"] = function (block) {
  var statements_hit_test_options = HtmlGenerator.statementToCode(
    block,
    "Tracked_CONTROLS_OPTIONS"
  );

  var code = ' tracked-controls="' + statements_hit_test_options + '"';
  return code;
};

// tracked_controls_armModel, ARM_MODEL
HtmlGenerator["tracked_controls_armModel"] = function (block) {
  var dropdown_model = block.getFieldValue("ARM_MODEL");
  // TODO: Assemble JavaScript into code variable.
  var code = " armModel: " + dropdown_model + ";";

  return code;
};

// tracked_controls_autoHide, AUTO_HIDE
HtmlGenerator["tracked_controls_autoHide"] = function (block) {
  var dropdown_model = block.getFieldValue("AUTO_HIDE");
  // TODO: Assemble JavaScript into code variable.
  var code = " autoHide: " + dropdown_model + ";";

  return code;
};

// tracked_controls_controller, CONTROLLER
HtmlGenerator["tracked_controls_controller"] = function (block) {
  var dropdown_model = block.getFieldValue("CONTROLLER");
  // TODO: Assemble JavaScript into code variable.
  var code = " controller: " + dropdown_model + ";";

  return code;
};

// tracked_controls_id, ID
HtmlGenerator["tracked_controls_id"] = function (block) {
  var dropdown_model = block.getFieldValue("ID");
  // TODO: Assemble JavaScript into code variable.
  var code = " id: " + dropdown_model + ";";

  return code;
};

// tracked_controls_idPrefix, ID_PREFIX
HtmlGenerator["tracked_controls_idPrefix"] = function (block) {
  var dropdown_model = block.getFieldValue("ID_PREFIX");
  // TODO: Assemble JavaScript into code variable.
  var code = " idPrefix: " + dropdown_model + ";";

  return code;
};

// tracked_controls_headElement, HEAD_ELEMENT
HtmlGenerator["tracked_controls_headElement"] = function (block) {
  var dropdown_model = block.getFieldValue("HEAD_ELEMENT");
  // TODO: Assemble JavaScript into code variable.
  var code = " headElement: " + dropdown_model + ";";

  return code;
};

// tracked_controls_hand
HtmlGenerator["tracked_controls_hand"] = function (block) {
  var dropdown_hand = block.getFieldValue("HAND");
  // TODO: Assemble JavaScript into code variable.
  var code = " hand: " + dropdown_hand + ";";

  return code;
};

// tracked_controls_orientationOffset
HtmlGenerator["tracked_controls_orientationOffset"] = function (block) {
  var text_posrotscale_x = block.getFieldValue("POSROTSCALE_X");
  var text_posrotscale_y = block.getFieldValue("POSROTSCALE_Y");
  var text_posrotscale_z = block.getFieldValue("POSROTSCALE_Z");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "orientationOffset: " +
    text_posrotscale_x +
    " " +
    text_posrotscale_y +
    " " +
    text_posrotscale_z +
    ";";

  return code;
};

// =================================================================================================================

// oculus_touch_controls_options
HtmlGenerator["oculus_touch_controls_options"] = function (block) {
  var statements_hit_test_options = HtmlGenerator.statementToCode(
    block,
    "OCULUS_TOUCH_CONTROLS_OPTIONS"
  );

  var code = ' oculus-touch-controls="' + statements_hit_test_options + '"';
  return code;
};
// oculus_touch_controls_hand
HtmlGenerator["oculus_touch_controls_hand"] = function (block) {
  var dropdown_hand = block.getFieldValue("HAND");
  // TODO: Assemble JavaScript into code variable.
  var code = " hand: " + dropdown_hand + ";";

  return code;
};
// oculus_touch_controls_model
HtmlGenerator["oculus_touch_controls_model"] = function (block) {
  var dropdown_model = block.getFieldValue("MODEL");
  // TODO: Assemble JavaScript into code variable.
  var code = " model: " + dropdown_model + ";";

  return code;
};

// oculus_touch_controls_orientationOffset
HtmlGenerator["oculus_touch_controls_orientationOffset"] = function (block) {
  var text_posrotscale_x = block.getFieldValue("POSROTSCALE_X");
  var text_posrotscale_y = block.getFieldValue("POSROTSCALE_Y");
  var text_posrotscale_z = block.getFieldValue("POSROTSCALE_Z");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "orientationOffset: " +
    text_posrotscale_x +
    " " +
    text_posrotscale_y +
    " " +
    text_posrotscale_z +
    ";";

  return code;
};

//================================================================================================================
HtmlGenerator["gearvr_controls"] = function (block) {
  var text = block.getFieldValue("GEARVR_CONTROLS");
  // TODO: Assemble JavaScript into code variable.
  var code = "" + text + " ";
  return code;
};

HtmlGenerator["gearvr_controls_options"] = function (block) {
  var statements_hit_test_options = HtmlGenerator.statementToCode(
    block,
    "GEARVR_CONTROLS_OPTIONS"
  );

  var code = ' gearvr-controls="' + statements_hit_test_options + '"';
  return code;
};

HtmlGenerator["gearvr_controls_hand"] = function (block) {
  var dropdown_hand = block.getFieldValue("HAND");
  // TODO: Assemble JavaScript into code variable.
  var code = " hand: " + dropdown_hand + ";";

  return code;
};

HtmlGenerator["gearvr_controls_buttonColor"] = function (block) {
  var colour_name = block.getFieldValue("BUTTON_COLOR");
  var code = "buttonColor: " + colour_name + ";";
  return code;
};

HtmlGenerator["gearvr_controls_buttonTouchedColor"] = function (block) {
  var colour_name = block.getFieldValue("BUTTON_FOCUS_TOUCHED_COLOR");
  var code = "buttonTouchedColor: " + colour_name + ";";
  return code;
};

HtmlGenerator["gearvr_controls_buttonHighlightColor"] = function (block) {
  var colour_name = block.getFieldValue("BUTTON_HIGHLIGHT_COLOR");
  var code = "buttonHighlightColor: " + colour_name + ";";
  return code;
};

HtmlGenerator["gearvr_controls_model"] = function (block) {
  var dropdown_model = block.getFieldValue("MODEL");
  // TODO: Assemble JavaScript into code variable.
  var code = " model: " + dropdown_model + ";";

  return code;
};

HtmlGenerator["gearvr_controls_armModel"] = function (block) {
  var dropdown_model = block.getFieldValue("ARM_MODEL");
  // TODO: Assemble JavaScript into code variable.
  var code = " armModel: " + dropdown_model + ";";

  return code;
};

HtmlGenerator["gearvr_controls_orientationOffset"] = function (block) {
  var text_posrotscale_x = block.getFieldValue("POSROTSCALE_X");
  var text_posrotscale_y = block.getFieldValue("POSROTSCALE_Y");
  var text_posrotscale_z = block.getFieldValue("POSROTSCALE_Z");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "orientationOffset: " +
    text_posrotscale_x +
    " " +
    text_posrotscale_y +
    " " +
    text_posrotscale_z +
    ";";

  return code;
};

//================================================================================================================
HtmlGenerator["daydream_controls"] = function (block) {
  var text = block.getFieldValue("DAYDREAM_CONTROLS");
  // TODO: Assemble JavaScript into code variable.
  var code = "" + text + " ";
  return code;
};

HtmlGenerator["daydream_controls_options"] = function (block) {
  var statements_hit_test_options = HtmlGenerator.statementToCode(
    block,
    "DAYDREAM_CONTROLS_OPTIONS"
  );

  var code = ' daydream-controls="' + statements_hit_test_options + '"';
  return code;
};

HtmlGenerator["daydream_controls_hand"] = function (block) {
  var dropdown_hand = block.getFieldValue("HAND");
  // TODO: Assemble JavaScript into code variable.
  var code = " hand: " + dropdown_hand + ";";

  return code;
};

HtmlGenerator["daydream_controls_buttonColor"] = function (block) {
  var colour_name = block.getFieldValue("BUTTON_COLOR");
  var code = "buttonColor: " + colour_name + ";";
  return code;
};

HtmlGenerator["daydream_controls_buttonTouchedColor"] = function (block) {
  var colour_name = block.getFieldValue("BUTTON_FOCUS_TOUCHED_COLOR");
  var code = "buttonTouchedColor: " + colour_name + ";";
  return code;
};

HtmlGenerator["daydream_controls_buttonHighlightColor"] = function (block) {
  var colour_name = block.getFieldValue("BUTTON_HIGHLIGHT_COLOR");
  var code = "buttonHighlightColor: " + colour_name + ";";
  return code;
};

HtmlGenerator["daydream_controls_model"] = function (block) {
  var dropdown_model = block.getFieldValue("MODEL");
  // TODO: Assemble JavaScript into code variable.
  var code = " model: " + dropdown_model + ";";

  return code;
};

HtmlGenerator["daydream_controls_armModel"] = function (block) {
  var dropdown_model = block.getFieldValue("ARM_MODEL");
  // TODO: Assemble JavaScript into code variable.
  var code = " armModel: " + dropdown_model + ";";

  return code;
};

HtmlGenerator["daydream_controls_orientationOffset"] = function (block) {
  var text_posrotscale_x = block.getFieldValue("POSROTSCALE_X");
  var text_posrotscale_y = block.getFieldValue("POSROTSCALE_Y");
  var text_posrotscale_z = block.getFieldValue("POSROTSCALE_Z");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "orientationOffset: " +
    text_posrotscale_x +
    " " +
    text_posrotscale_y +
    " " +
    text_posrotscale_z +
    ";";

  return code;
};

//================================================================================================================
// auto_detect_controllers, AUTO_DETECT_CONTROLLERS
HtmlGenerator["auto_detect_controllers"] = function (block) {
  var text = block.getFieldValue("AUTO_DETECT_CONTROLLERS");
  // TODO: Assemble JavaScript into code variable.
  var code = "" + text + " ";
  return code;
};
// auto_detect_controllers_option, AUTO_DETECT_CONTROLLERS_OPTION
HtmlGenerator["auto_detect_controllers_option"] = function (block) {
  var statements_hit_test_options = HtmlGenerator.statementToCode(
    block,
    "AUTO_DETECT_CONTROLLERS_OPTION"
  );

  var code = ' auto-detect-controllers="' + statements_hit_test_options + '"';
  return code;
};
// auto_detect_controllers_hand, HAND
HtmlGenerator["auto_detect_controllers_hand"] = function (block) {
  var dropdown_hand = block.getFieldValue("HAND");
  // TODO: Assemble JavaScript into code variable.
  var code = " hand: " + dropdown_hand + ";";

  return code;
};
// auto_detect_controllers_singlehand, SINGLE_HAND
HtmlGenerator["auto_detect_controllers_singlehand"] = function (block) {
  var dropdown_hand = block.getFieldValue("SINGLE_HAND");
  // TODO: Assemble JavaScript into code variable.
  var code = " singlehand: " + dropdown_hand + ";";

  return code;
};
// auto_detect_controllers_model, MODEL
HtmlGenerator["auto_detect_controllers_model"] = function (block) {
  var dropdown_model = block.getFieldValue("MODEL");
  // TODO: Assemble JavaScript into code variable.
  var code = " model: " + dropdown_model + ";";

  return code;
};
// auto_detect_controllers_trackedcontrols, TRACKED_CONTROLS
HtmlGenerator["auto_detect_controllers_trackedcontrols"] = function (block) {
  var dropdown_model = block.getFieldValue("TRACKED_CONTROLS");
  // TODO: Assemble JavaScript into code variable.
  var code = " trackedcontrols: " + dropdown_model + ";";

  return code;
};

//================================================================================================================
HtmlGenerator["oculus_go_controls"] = function (block) {
  var text = block.getFieldValue("OCULUS_GO_CONTROLS");
  // TODO: Assemble JavaScript into code variable.
  var code = "" + text + " ";
  return code;
};

// oculus_go_controls_options, OCULUS_GO_CONTROLS_OPTIONS
HtmlGenerator["oculus_go_controls_options"] = function (block) {
  var statements_hit_test_options = HtmlGenerator.statementToCode(
    block,
    "OCULUS_GO_CONTROLS_OPTIONS"
  );

  var code = ' oculus-go-controls="' + statements_hit_test_options + '"';
  return code;
};
// oculus_go_controls_hand, HAND
HtmlGenerator["oculus_go_controls_hand"] = function (block) {
  var dropdown_hand = block.getFieldValue("HAND");
  // TODO: Assemble JavaScript into code variable.
  var code = " hand: " + dropdown_hand + ";";

  return code;
};
// oculus_go_controls_buttonColor,BUTTON_COLOR
HtmlGenerator["oculus_go_controls_buttonColor"] = function (block) {
  var colour_name = block.getFieldValue("BUTTON_COLOR");
  var code = "buttonColor: " + colour_name + ";";
  return code;
};
// oculus_go_controls_buttonTouchedColor, BUTTON_FOCUS_TOUCHED_COLOR
HtmlGenerator["oculus_go_controls_buttonTouchedColor"] = function (block) {
  var colour_name = block.getFieldValue("BUTTON_FOCUS_TOUCHED_COLOR");
  var code = "buttonTouchedColor: " + colour_name + ";";
  return code;
};
// oculus_go_controls_buttonHighlightColor, BUTTON_HIGHLIGHT_COLOR
HtmlGenerator["oculus_go_controls_buttonHighlightColor"] = function (block) {
  var colour_name = block.getFieldValue("BUTTON_HIGHLIGHT_COLOR");
  var code = "buttonHighlightColor: " + colour_name + ";";
  return code;
};
// oculus_go_controls_model, MODEL
HtmlGenerator["oculus_go_controls_model"] = function (block) {
  var dropdown_model = block.getFieldValue("MODEL");
  // TODO: Assemble JavaScript into code variable.
  var code = " model: " + dropdown_model + ";";

  return code;
};
// oculus_go_controls_armModel, ARM_MODEL
HtmlGenerator["oculus_go_controls_armModel"] = function (block) {
  var dropdown_model = block.getFieldValue("ARM_MODEL");
  // TODO: Assemble JavaScript into code variable.
  var code = " armModel: " + dropdown_model + ";";

  return code;
};
// oculus_go_controls_orientationOffset,
HtmlGenerator["oculus_go_controls_orientationOffset"] = function (block) {
  var text_posrotscale_x = block.getFieldValue("POSROTSCALE_X");
  var text_posrotscale_y = block.getFieldValue("POSROTSCALE_Y");
  var text_posrotscale_z = block.getFieldValue("POSROTSCALE_Z");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "orientationOffset: " +
    text_posrotscale_x +
    " " +
    text_posrotscale_y +
    " " +
    text_posrotscale_z +
    ";";

  return code;
};
//================================================================================================================

// vive_focus_controls_options, VIVE_FOCUS_CONTROLS_OPTIONS
HtmlGenerator["vive_focus_controls_options"] = function (block) {
  var statements_hit_test_options = HtmlGenerator.statementToCode(
    block,
    "VIVE_FOCUS_CONTROLS_OPTIONS"
  );

  var code = ' vive-focus-controls="' + statements_hit_test_options + '"';
  return code;
};
// vive_focus_controls_hand, HAND
HtmlGenerator["vive_focus_controls_hand"] = function (block) {
  var dropdown_hand = block.getFieldValue("HAND");
  // TODO: Assemble JavaScript into code variable.
  var code = " hand: " + dropdown_hand + ";";

  return code;
};
// vive_focus_controls_buttonTouchedColor, BUTTON_FOCUS_TOUCHED_COLOR
HtmlGenerator["vive_focus_controls_buttonTouchedColor"] = function (block) {
  var colour_name = block.getFieldValue("BUTTON_FOCUS_TOUCHED_COLOR");
  var code = "buttonTouchedColor: " + colour_name + ";";
  return code;
};
// vive_focus_controls_buttonHighlightColor, BUTTON_HIGHLIGHT_COLOR
HtmlGenerator["vive_focus_controls_buttonHighlightColor"] = function (block) {
  var colour_name = block.getFieldValue("BUTTON_HIGHLIGHT_COLOR");
  var code = "buttonHighlightColor: " + colour_name + ";";
  return code;
};
// vive_focus_controls_model, MODEL
HtmlGenerator["vive_focus_controls_model"] = function (block) {
  var dropdown_model = block.getFieldValue("MODEL");
  // TODO: Assemble JavaScript into code variable.
  var code = " model: " + dropdown_model + ";";

  return code;
};
// vive_focus_controls_armModel, ARM_MODEL
HtmlGenerator["vive_focus_controls_armModel"] = function (block) {
  var dropdown_model = block.getFieldValue("ARM_MODEL");
  // TODO: Assemble JavaScript into code variable.
  var code = " armModel: " + dropdown_model + ";";

  return code;
};
// vive_focus_controls_orientationOffset
HtmlGenerator["vive_focus_controls_orientationOffset"] = function (block) {
  var text_posrotscale_x = block.getFieldValue("POSROTSCALE_X");
  var text_posrotscale_y = block.getFieldValue("POSROTSCALE_Y");
  var text_posrotscale_z = block.getFieldValue("POSROTSCALE_Z");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "orientationOffset: " +
    text_posrotscale_x +
    " " +
    text_posrotscale_y +
    " " +
    text_posrotscale_z +
    ";";

  return code;
};

// ============================================================================

// vr_mode_ui_options, vr_mode_ui_OPTIONS
HtmlGenerator["vr_mode_ui_options"] = function (block) {
  var statements_hit_test_options = HtmlGenerator.statementToCode(
    block,
    "vr_mode_ui_OPTIONS"
  );

  var code = ' vr-mode-ui="' + statements_hit_test_options + '"';
  return code;
};
// vr_mode_ui_enabled, ENABLED
HtmlGenerator["vr_mode_ui_enabled"] = function (block) {
  var dropdown_option = block.getFieldValue("ENABLED");

  var code = "enabled:" + dropdown_option + "; ";
  return code;
};
// vr_mode_ui_enterVRButton, ENTER_VR_BUTTON
HtmlGenerator["vr_mode_ui_enterVRButton"] = function (block) {
  var dropdown_enterVRButton = block.getFieldValue("ENTER_VR_BUTTON");
  // TODO: Assemble JavaScript into code variable.
  var code = " enterVRButton: " + dropdown_enterVRButton + ";";

  return code;
};
// vr_mode_ui_enterARButton, ENTER_AR_BUTTON
HtmlGenerator["vr_mode_ui_enterARButton"] = function (block) {
  var dropdown_enterARButton = block.getFieldValue("ENTER_AR_BUTTON");
  // TODO: Assemble JavaScript into code variable.
  var code = " enterARButton: " + dropdown_enterARButton + ";";

  return code;
};

//hit_test_options
HtmlGenerator["hit_test_options"] = function (block) {
  var statements_hit_test_options = HtmlGenerator.statementToCode(
    block,
    "HIT_TEST_OPTION"
  );

  var code = ' ar-hit-test ="' + statements_hit_test_options + '"';
  return code;
};
// hit_test_prop_enabled
HtmlGenerator["hit_test_prop_enabled"] = function (block) {
  var dropdown_option = block.getFieldValue("property");

  var code = "enabled:" + dropdown_option + "; ";
  return code;
};
// hit_test_prop_target
HtmlGenerator["hit_test_prop_target"] = function (block) {
  var dropdown_option = block.getFieldValue("property");

  var code = "target:#" + dropdown_option + "; ";
  return code;
};
// hit_test_prop_src
HtmlGenerator["hit_test_prop_src"] = function (block) {
  var dropdown_option = block.getFieldValue("property");

  var code = "src:" + dropdown_option + "; ";
  return code;
};
// hit_test_prop_footprintDepth
HtmlGenerator["hit_test_prop_footprintDepth"] = function (block) {
  var dropdown_option = block.getFieldValue("property");

  var code = "footprintDepth:" + dropdown_option + "; ";
  return code;
};
// hit_test_prop_type
HtmlGenerator["hit_test_prop_type"] = function (block) {
  var dropdown_option = block.getFieldValue("property");
  var code = "type:" + dropdown_option + "; ";
  return code;
};
// hit_test_prop_mapSize
HtmlGenerator["hit_test_prop_mapSize"] = function (block) {
  var dropdown_option = block.getFieldValue("property");

  var code = "mapSize:" + dropdown_option + "; ";
  return code;
};

// windows_motion_controls_options, WINDOWS_MOTION_CONTROLS_OPTIONS
HtmlGenerator["windows_motion_controls_options"] = function (block) {
  var statements_windows_motion_controls = HtmlGenerator.statementToCode(
    block,
    "WINDOWS_MOTION_CONTROLS_OPTIONS"
  );

  var code =
    ' windows-motion-controls= "' + statements_windows_motion_controls + '"';
  return code;
};

// windows_motion_controls_pair, PAIR
HtmlGenerator["windows_motion_controls_pair"] = function (block) {
  var text_pair = block.getFieldValue("PAIR");
  // TODO: Assemble JavaScript into code variable.
  var code = " pair: " + text_pair + ";";
  return code;
};
// windows_motion_controls_model, MODEL
HtmlGenerator["windows_motion_controls_model"] = function (block) {
  var dropdown_model = block.getFieldValue("MODEL");
  // TODO: Assemble JavaScript into code variable.
  var code = " model: " + dropdown_model + ";";

  return code;
};

// windows_motion_controls_hideDisconnected, HIDE_DISCONNECTED
HtmlGenerator["windows_motion_controls_hideDisconnected"] = function (block) {
  var dropdown_hideDisconnected = block.getFieldValue("HIDE_DISCONNECTED");
  // TODO: Assemble JavaScript into code variable.
  var code = " hideDisconnected: " + dropdown_hideDisconnected + ";";

  return code;
};
// windows_motion_controls_hand, HAND
HtmlGenerator["windows_motion_controls_hand"] = function (block) {
  var dropdown_hand = block.getFieldValue("HAND");
  // TODO: Assemble JavaScript into code variable.
  var code = " hand: " + dropdown_hand + ";";

  return code;
};

// ==========================================================
// wasd_controls_options, WASD_CONTROLS_OPTIONS
HtmlGenerator["wasd_controls_options"] = function (block) {
  var statements_wasd_controls_options = HtmlGenerator.statementToCode(
    block,
    "WASD_CONTROLS_OPTIONS"
  );

  var code = ' wasd-controls= "' + statements_wasd_controls_options + '"';
  return code;
};
// wasd_controls_acceleration, ACCELERATION
HtmlGenerator["wasd_controls_acceleration"] = function (block) {
  var dropdown_acceleration = block.getFieldValue("ACCELERATION");
  // TODO: Assemble JavaScript into code variable.
  var code = " acceleration: " + dropdown_acceleration + ";";

  return code;
};
// wasd_controls_adInverted, ADINVERTED
HtmlGenerator["wasd_controls_adInverted"] = function (block) {
  var dropdown_adInverted = block.getFieldValue("ADINVERTED");
  // TODO: Assemble JavaScript into code variable.
  var code = " adInverted: " + dropdown_adInverted + ";";

  return code;
};
// wasd_controls_enabled, ENABLED
HtmlGenerator["wasd_controls_enabled"] = function (block) {
  var dropdown_enabled = block.getFieldValue("ENABLED");
  // TODO: Assemble JavaScript into code variable.
  var code = " enabled: " + dropdown_enabled + ";";

  return code;
};
// wasd_controls_fly, FLY
HtmlGenerator["wasd_controls_fly"] = function (block) {
  var dropdown_fly = block.getFieldValue("FLY");
  // TODO: Assemble JavaScript into code variable.
  var code = " fly: " + dropdown_fly + ";";

  return code;
};
// wasd_controls_wsInverted, WSINVERTED
HtmlGenerator["wasd_controls_wsInverted"] = function (block) {
  var dropdown_wsInverted = block.getFieldValue("WSINVERTED");
  // TODO: Assemble JavaScript into code variable.
  var code = " wsInverted: " + dropdown_wsInverted + ";";

  return code;
};
// wasd_controls_adAxis, ADAXIS
HtmlGenerator["wasd_controls_adAxis"] = function (block) {
  var dropdown_adAxis = block.getFieldValue("ADAXIS");
  // TODO: Assemble JavaScript into code variable.
  var code = " adAxis: " + dropdown_adAxis + ";";

  return code;
};
// wasd_controls_wsAxis, WSAXIS
HtmlGenerator["wasd_controls_wsAxis"] = function (block) {
  var dropdown_wsAxis = block.getFieldValue("WSAXIS");
  // TODO: Assemble JavaScript into code variable.
  var code = " wsAxis: " + dropdown_wsAxis + ";";

  return code;
};
// ==========================================================

HtmlGenerator["animation_options"] = function (block) {
  var statements_animation = HtmlGenerator.statementToCode(
    block,
    "ANIMATION_OPTION"
  );

  var code = ' animation = "' + statements_animation + '"';
  return code;
};

HtmlGenerator["animation_multi"] = function (block) {
  var text_animationname = block.getFieldValue("ANIMATIONNAME");
  var statements_animation_multi = HtmlGenerator.statementToCode(
    block,
    "ANIMATION_MULTI"
  );
  // TODO: Assemble JavaScript into code variable.
  var code =
    ' animation__"' +
    text_animationname +
    '" = "' +
    statements_animation_multi +
    '"';
  return code;
};

HtmlGenerator["video_controller"] = function (block) {
  var text_src = block.getFieldValue("SRC");
  var number_posx = block.getFieldValue("POSX");
  var number_posy = block.getFieldValue("POSY");
  var number_posz = block.getFieldValue("POSZ");
  var number_scalex = block.getFieldValue("SCALEX");
  var number_scaley = block.getFieldValue("SCALEY");
  var number_scalez = block.getFieldValue("SCALEZ");
  // TODO: Assemble JavaScript into code variable.
  var code =
    '<a-image \nid="videoControls" \nsrc="#' +
    text_src +
    '" \nposition="' +
    number_posx +
    " " +
    number_posy +
    " " +
    number_posz +
    '" \nscale="' +
    number_scalex +
    " " +
    number_scaley +
    " " +
    number_scalez +
    '" play-pause>\n</a-image>\n';
  return code;
};

HtmlGenerator["video_controller_NEW"] = function (block) {
  var number_posx = block.getFieldValue("POSX");
  var number_posy = block.getFieldValue("POSY");
  var number_posz = block.getFieldValue("POSZ");
  var number_scalex = block.getFieldValue("SCALEX");
  var number_scaley = block.getFieldValue("SCALEY");
  var number_scalez = block.getFieldValue("SCALEZ");
  // TODO: Assemble JavaScript into code variable.
  var code =
    '<a-image \nid="videoControls" \nsrc="ASSETs/play.png" \nposition="' +
    number_posx +
    " " +
    number_posy +
    " " +
    number_posz +
    '" \nscale="' +
    number_scalex +
    " " +
    number_scaley +
    " " +
    number_scalez +
    '" play-pause>\n</a-image>\n';
  return code;
};

HtmlGenerator["animation_propety"] = function (block) {
  var dropdown_option = block.getFieldValue("Option");
  var text_from_x = block.getFieldValue("FROM_X");
  var text_from_y = block.getFieldValue("FROM_Y");
  var text_from_z = block.getFieldValue("FROM_Z");
  var text_to_x = block.getFieldValue("TO_X");
  var text_to_y = block.getFieldValue("TO_Y");
  var text_to_z = block.getFieldValue("TO_Z");
  var dropdown_loop = block.getFieldValue("LOOP");
  var dropdown_dir = block.getFieldValue("DIR");
  var text_dur = block.getFieldValue("DUR");
  var dropdown_easing = block.getFieldValue("EASING");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "\n property:" +
    dropdown_option +
    "; \n from:" +
    text_from_x +
    " " +
    text_from_y +
    " " +
    text_from_z +
    ";\n to:" +
    text_to_x +
    " " +
    text_to_y +
    " " +
    text_to_z +
    ";\n loop:" +
    dropdown_loop +
    ";\n dir:" +
    dropdown_dir +
    ";\n dur:" +
    text_dur +
    ";\n easing: " +
    dropdown_easing +
    ";";
  return code;
};

HtmlGenerator["animation_property"] = function (block) {
  var dropdown_option = block.getFieldValue("Option");
  var text_from_x = block.getFieldValue("FROM_X");
  var text_from_y = block.getFieldValue("FROM_Y");
  var text_from_z = block.getFieldValue("FROM_Z");
  var text_to_x = block.getFieldValue("TO_X");
  var text_to_y = block.getFieldValue("TO_Y");
  var text_to_z = block.getFieldValue("TO_Z");
  var dropdown_loop = block.getFieldValue("LOOP");
  var dropdown_dir = block.getFieldValue("DIR");
  var text_dur = block.getFieldValue("DUR");
  var dropdown_easing = block.getFieldValue("EASING");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "\n property:" +
    dropdown_option +
    "; \n from:" +
    text_from_x +
    " " +
    text_from_y +
    " " +
    text_from_z +
    ";\n to:" +
    text_to_x +
    " " +
    text_to_y +
    " " +
    text_to_z +
    ";\n loop:" +
    dropdown_loop +
    ";\n dir:" +
    dropdown_dir +
    ";\n dur:" +
    text_dur +
    ";\n easing: " +
    dropdown_easing +
    ";";
  return code;
};

HtmlGenerator["animation_property_property"] = function (block) {
  var dropdown_property = block.getFieldValue("property");
  // TODO: Assemble JavaScript into code variable.
  var code = "\n property:" + dropdown_property + ";\n";
  return code;
};

HtmlGenerator["animation_opacity"] = function (block) {
  var text_from = block.getFieldValue("FROM");
  var text_to = block.getFieldValue("TO");
  // TODO: Assemble JavaScript into code variable.
  var code = "from: " + text_from + ";\nto: " + text_to + ";\n";
  return code;
};

HtmlGenerator["animation_color"] = function (block) {
  var colour_from = block.getFieldValue("FROM");
  var colour_to = block.getFieldValue("TO");
  // TODO: Assemble JavaScript into code variable.
  var code = "from: " + colour_from + ";\nto: " + colour_to + ";\n";
  return code;
};

HtmlGenerator["animation_property_from"] = function (block) {
  var text_from_x = block.getFieldValue("FROM_X");
  var text_from_y = block.getFieldValue("FROM_Y");
  var text_from_z = block.getFieldValue("FROM_Z");
  // TODO: Assemble JavaScript into code variable.
  var code =
    " from:" + text_from_x + " " + text_from_y + " " + text_from_z + ";\n";

  return code;
};

HtmlGenerator["animation_property_to"] = function (block) {
  var text_to_x = block.getFieldValue("TO_X");
  var text_to_y = block.getFieldValue("TO_Y");
  var text_to_z = block.getFieldValue("TO_Z");
  // TODO: Assemble JavaScript into code variable.
  var code = " to:" + text_to_x + " " + text_to_y + " " + text_to_z + ";\n";

  return code;
};

HtmlGenerator["animation_property_loop"] = function (block) {
  var dropdown_loop = block.getFieldValue("LOOP");
  // TODO: Assemble JavaScript into code variable.
  var code = " loop: " + dropdown_loop + ";\n";

  return code;
};

HtmlGenerator["animation_property_dir"] = function (block) {
  var dropdown_dir = block.getFieldValue("DIR");
  // TODO: Assemble JavaScript into code variable.
  var code = " dir: " + dropdown_dir + ";\n";
  return code;
};

HtmlGenerator["animation_property_delay"] = function (block) {
  var text_delay = block.getFieldValue("DELAY");
  // TODO: Assemble JavaScript into code variable.
  var code = " delay: " + text_delay + ";\n";
  return code;
};

HtmlGenerator["animation_property_dur"] = function (block) {
  var text_dur = block.getFieldValue("DUR");
  // TODO: Assemble JavaScript into code variable.
  var code = " dur: " + text_dur + ";\n";
  return code;
};

HtmlGenerator["animation_property_liner"] = function (block) {
  var dropdown_eas = block.getFieldValue("EAS");
  // TODO: Assemble JavaScript into code variable.
  var code = " easing:" + dropdown_eas + ";";
  return code;
};

HtmlGenerator["animation_property_easeIn"] = function (block) {
  var dropdown_eas = block.getFieldValue("EAS");
  // TODO: Assemble JavaScript into code variable.
  var code = " easing:" + dropdown_eas + ";";
  return code;
};

HtmlGenerator["animation_property_easeOut"] = function (block) {
  var dropdown_eas = block.getFieldValue("EAS");
  // TODO: Assemble JavaScript into code variable.
  var code = " easing:" + dropdown_eas + ";";
  return code;
};

HtmlGenerator["animation_property_easeInOut"] = function (block) {
  var dropdown_eas = block.getFieldValue("EAS");
  // TODO: Assemble JavaScript into code variable.
  var code = " easing:" + dropdown_eas + ";";
  return code;
};

HtmlGenerator["Texture3D"] = function (block) {
  var text_texture_src = block.getFieldValue("TEXTURE_SRC");
  // TODO: Assemble JavaScript into code variable.
  var code = '\nsrc="#' + text_texture_src + '"\n';
  return code;
};

HtmlGenerator["Texture3d_link"] = function (block) {
  var dropdown_link = block.getFieldValue("LINK");
  var text_texture_src = block.getFieldValue("SRC_NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = '\nsrc="' + dropdown_link + "" + text_texture_src + '"\n';
  return code;
};

HtmlGenerator["Texture3D_repeat"] = function (block) {
  var text_texture_r1 = block.getFieldValue("TEXTURE_R1");
  var text_texture_r2 = block.getFieldValue("TEXTURE_R2");
  var code = 'repeat ="' + text_texture_r1 + " " + text_texture_r2 + '"\n';
  return code;
};

HtmlGenerator["Texture_NormalMap3D"] = function (block) {
  var text_texture_src = block.getFieldValue("NORMALMAP_SRC");
  // TODO: Assemble JavaScript into code variable.
  var code = 'normal-map ="#' + text_texture_src + '"\n';
  return code;
};

HtmlGenerator["Texture3D_NormalMap_repeat"] = function (block) {
  var text_texture_r1 = block.getFieldValue("TEXTURE_R1");
  var text_texture_r2 = block.getFieldValue("TEXTURE_R2");
  var code =
    'normal-map-repeat ="' + text_texture_r1 + " " + text_texture_r2 + '"\n';
  return code;
};

HtmlGenerator["Texture3D_normal_scale"] = function (block) {
  var text_texture_r1 = block.getFieldValue("TEXTURE_R1");
  var text_texture_r2 = block.getFieldValue("TEXTURE_R2");
  var code =
    'normal-scale = "' + text_texture_r1 + " " + text_texture_r2 + '"\n';
  return code;
};

HtmlGenerator["texture3d_roughness"] = function (block) {
  var text_texture_r1 = block.getFieldValue("TEXTURE_R1");
  var code = 'roughness  = "' + text_texture_r1 + '"\n';
  return code;
};

HtmlGenerator["texture3d_opacity"] = function (block) {
  var text_texture_r1 = block.getFieldValue("TEXTURE_R1");
  var code = 'opacity  = "' + text_texture_r1 + '"\n';
  return code;
};

HtmlGenerator["a-sky"] = function (block) {
  var statements_name = HtmlGenerator.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = "<a-sky " + statements_name + "></a-sky>\n";
  return code;
};

HtmlGenerator["a_sky_explor"] = function (block) {
  var dropdown_explo = block.getFieldValue("EXPLO");
  var statements_name = HtmlGenerator.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = "<a-sky " + statements_name + " " + dropdown_explo + "></a-sky>\n";
  return code;
};

HtmlGenerator["imgsrc"] = function (block) {
  var text_texture_src = block.getFieldValue("SRC");
  // TODO: Assemble JavaScript into code variable.
  var code = '\nsrc="#' + text_texture_src + '"\n';
  return code;
};

HtmlGenerator["inspector_code_load"] = function (block) {
  var text_inspector_copy = block.getFieldValue("INSPECTOR_COPY");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "\n<!----Inspector code load------>\n" +
    text_inspector_copy +
    "\n<!---------->\n";
  return code;
};

HtmlGenerator["event_set_name"] = function (block) {
  var text_eventname = block.getFieldValue("EVENTNAME");
  var statements_name = HtmlGenerator.statementToCode(block, "NAME");
  var code = "\nevent-set__" + text_eventname + '="' + statements_name + '"\n';
  return code;
};

HtmlGenerator["event_type"] = function (block) {
  var dropdown_event_type = block.getFieldValue("EVENT_TYPE");
  var code = "\n_event : " + dropdown_event_type + ";\n";
  return code;
};

HtmlGenerator["event_target"] = function (block) {
  var text_name_target = block.getFieldValue("NAME_TARGET");
  // TODO: Assemble JavaScript into code variable.
  var code = "_target : #" + text_name_target + ";\n";
  return code;
};

HtmlGenerator["event_material"] = function (block) {
  var dropdown_option = block.getFieldValue("option");
  var value_material_input = block.getFieldValue("NAME");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "material." + dropdown_option + " : " + value_material_input + ";\n";
  return code;
};

HtmlGenerator["event_visible"] = function (block) {
  var dropdown_visible = block.getFieldValue("Visible");
  // TODO: Assemble JavaScript into code variable.
  var code = "visible: " + dropdown_visible + ";\n";
  return code;
};

HtmlGenerator["event_position"] = function (block) {
  var dropdown_posrotscale = block.getFieldValue("POSROTSCALE");
  var text_posrotscale_x = block.getFieldValue("POSROTSCALE_X");
  var text_posrotscale_y = block.getFieldValue("POSROTSCALE_Y");
  var text_posrotscale_z = block.getFieldValue("POSROTSCALE_Z");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "" +
    dropdown_posrotscale +
    ': "' +
    text_posrotscale_x +
    " " +
    text_posrotscale_y +
    " " +
    text_posrotscale_z +
    '" ';

  return code;
};

HtmlGenerator["entity_cursor"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code =
    '<a-entity cursor position="0 0 -1"\ngeometry="primitive: sphere; radius: 0.005"\nmaterial="color: #000000; shader: flat;\nopacity: 0.5">\n</a-entity>\n';
  return code;
};

HtmlGenerator["entity_cursor_vr"] = function (block) {
  var checkbox_vr_mode = block.getFieldValue("VR_MODE") == "TRUE";
  var colour_name = block.getFieldValue("NAME");
  var value_radius_value = block.getFieldValue("RADIUS_VALUE");
  var statements_animation = HtmlGenerator.statementToCode(block, "ANIMATION");
  // TODO: Assemble JavaScript into code variable.
  var code =
    '<a-entity cursor = "fuse : ' +
    checkbox_vr_mode +
    ' fuseTimeout: 1500" position="0 0 -1" \n geometry="primitive: sphere; radius: ' +
    value_radius_value +
    '" material="color: ' +
    colour_name +
    ';\n shader: flat; opacity: 0.5" \n' +
    statements_animation +
    " >\n</a-entity>\n";
  return code;
};

HtmlGenerator["img_child"] = function (block) {
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var text_idname = block.getFieldValue("IDNAME");
  var statements_content = HtmlGenerator.statementToCode(block, "NAME");
  var statements_child = HtmlGenerator.statementToCode(block, "CHILD");
  var checkbox_visible = block.getFieldValue("VISIBLE") == "TRUE";
  // TODO: Assemble JavaScript into code variable.
  var code =
    '<a-image id="' +
    text_idname +
    '" visible="' +
    checkbox_visible +
    '" ' +
    statements_content +
    ">" +
    statements_child +
    "</a-image>\n";

  return code;
};

HtmlGenerator["audiosrc"] = function (block) {
  var text_src = block.getFieldValue("SRC");
  var checkbox_autoplay = block.getFieldValue("AUTOPLAY") == "TRUE";
  var checkbox_loop = block.getFieldValue("LOOP") == "TRUE";
  var checkbox_positional = block.getFieldValue("POSITIONAL") == "TRUE";
  // TODO: Assemble JavaScript into code variable.
  var code =
    'sound="src:#' +
    text_src +
    "; autoplay: " +
    checkbox_autoplay +
    "; loop: " +
    checkbox_loop +
    "; positional: " +
    checkbox_positional +
    '";\n';
  return code;
};

HtmlGenerator["entity_text_geometry"] = function (block) {
  var statements_text = HtmlGenerator.statementToCode(block, "TEXT");
  // TODO: Assemble JavaScript into code variable.
  var code = '\ntext = "' + statements_text + '"\n';
  return code;
};

HtmlGenerator["ar_marker"] = function (block) {
  var text_ar_marker = block.getFieldValue("AR_MARKER");
  var statements_ar = HtmlGenerator.statementToCode(block, "AR");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "<a-marker preset=" +
    text_ar_marker +
    ">" +
    statements_ar +
    "</a-marker>\n";
  return code;
};

HtmlGenerator["ar_pattern"] = function (block) {
  var text_ar_url = block.getFieldValue("AR_URL");
  var statements_ar = HtmlGenerator.statementToCode(block, "AR");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "<a-marker type='pattern' url='" +
    text_ar_url +
    "'>" +
    statements_ar +
    "</a-marker>\n";
  return code;
};

HtmlGenerator["ar_barcode"] = function (block) {
  var text_ar_url = block.getFieldValue("AR_VALUE");
  var statements_ar = HtmlGenerator.statementToCode(block, "AR");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "<a-marker type='barcode' value='" +
    text_ar_url +
    "'>" +
    statements_ar +
    "</a-marker>\n";
  return code;
};

HtmlGenerator["ar_gps"] = function (block) {
  var text_lat = block.getFieldValue("LAT");
  var text_long = block.getFieldValue("LONG");
  // TODO: Assemble JavaScript into code variable.
  var code =
    'gps-entity-place="latitude:' +
    text_lat +
    "; longitude: " +
    text_long +
    ';"\n';
  return code;
};

HtmlGenerator["look_at"] = function (block) {
  var text_look_at = block.getFieldValue("CAMERA_NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = 'look-at="[' + text_look_at + ']"\n';
  return code;
};

HtmlGenerator["create_room"] = function (block) {
  var dropdown_options = block.getFieldValue("OPTIONS");
  var statements_option = HtmlGenerator.statementToCode(block, "OPTION");
  var statements_child = HtmlGenerator.statementToCode(block, "CHILD");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "<rw-" +
    dropdown_options +
    " " +
    statements_option +
    ">" +
    statements_child +
    "</rw-" +
    dropdown_options +
    ">\n";
  return code;
};

HtmlGenerator["create_room_door_id"] = function (block) {
  var text_id = block.getFieldValue("ID");
  // TODO: Assemble JavaScript into code variable.
  var code = 'id="' + text_id + '"\n';
  return code;
};

HtmlGenerator["create_room_door_from_to"] = function (block) {
  var text_from = block.getFieldValue("FROM");
  var text_to = block.getFieldValue("TO");
  // TODO: Assemble JavaScript into code variable.
  var code = 'from="#' + text_from + '" to="#' + text_to + '"\n';
  return code;
};
