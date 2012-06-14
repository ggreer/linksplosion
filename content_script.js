var selection = window.getSelection();
var urls = [];

function get_links(node) {
  var i;
  var child;
  var children;

  if (!node) {
    return;
  }

  children = node.childNodes;

  if (children === undefined || children.length === 0) {
    return;
  }

  for(i = 0; i < children.length; i++) {
    child = children[i];

    if (child.href) {
      urls.push(child.href);
    }

    get_links(child);
  }
}

function create_tabs() {
  var i;

  for (i = 0; i < urls.length; i++) {
    url = urls[i];
    window.open(url);
  }
}

get_links(selection.getRangeAt(0).cloneContents());
create_tabs(urls);
