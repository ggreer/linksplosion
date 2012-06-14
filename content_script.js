var selection = window.getSelection();
var urls;

function get_links(node) {
  var i;
  var child;
  var children;
  var urls = [];

  if (!node) {
    return;
  }

  children = node.querySelectorAll('a');
  if (children === undefined || children.length === 0) {
    return;
  }

  for(i = 0; i < children.length; i++) {
    child = children[i];
    if (child.href && urls.indexOf(child.href) === -1) {
      urls.push(child.href);
    }
  }
  return urls;
}

function create_tabs(urls) {
  var i;
  var url;

  for (i = 0; i < urls.length; i++) {
    url = urls[i];
    window.open(url);
  }
}

urls = get_links(selection.getRangeAt(0).cloneContents());
create_tabs(urls);
