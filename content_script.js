var selection = window.getSelection();
var urls = [];

function get_links(node) {
  var i;
  var child;
  var children;

  if (!node) {
    console.log("no node");
    return;
  }

  children = node.childNodes;

  if (!children || children.length === 0) {
    console.log("no children for node", node);
    return;
  }

  for(i = 0; i < children.length; i++) {
    child = children[i];

    if (child.href) {
      console.log("pushing", child.href);
      urls.push(child.href);
    }
    else {
      console.log("no href for", child);
      console.log(child.attributes);
    }

    if (child.childNodes && child.childNodes.length > 0) {
      // hells yeah recursion
      get_links(child.childNodes);
    }
  }
}

function create_tabs() {
  var i;

  for (i = 0; i < urls.length; i++) {
    url = urls[i];
    console.log("opening tab for", url);
    window.open(url);
  }
}

get_links(selection.getRangeAt(0).commonAncestorContainer);
create_tabs(urls);
//debugger;
