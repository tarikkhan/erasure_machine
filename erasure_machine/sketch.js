var sample_text, sample_link, dragger, textbox, submit, cleartext, realData, workbox, spacing;

function preload() {
  sample_text = loadStrings('text.txt');

}

function formatText(src) {
  let linebreaks = '\n\n';
  let result = join(src, linebreaks);
  return result;
}

function setup() {
  noCanvas();
  sample_link = select('#sample_link');
  dragger = select('#dragger');
  textbox = select('#textarea');
  //spacing = select('#spacing');
  spacing = document.getElementById('spacing');
  submit = select('#submit');
  cleartext = select('#clear');
  workbox = select('#workbox');

  cleartext.mousePressed(clearAll);
  sample_link.mousePressed(addToTextBox);
  dragger.dragOver(highlight);
  dragger.dragLeave(unhighlight);
  dragger.drop(gotFile, unhighlight);

  submit.mousePressed(readyApp);
  workbox.mousePressed(hideWord);
}

function readyApp() {
  let c = textbox.value();
  let arr = c.split(' ');
  let box = [];
  for (let i = 0; i < arr.length; i++) {
    box.push(arr[i]);
    if (i != arr.length - 1) {
      box.push(" ");
    }

  }
  for (let i = 0; i < box.length; i++) {
    box[i] = '<div style="display:inline; color:#000;cursor:pointer;">' + box[i] + '</div>';
    //console.log(box[i]);
    workbox.html(box[i], true);
  }
}

function hideWord(e) {
  if (spacing.checked) {
    e.target.style.display = 'none';
  } else {
    e.target.style.visibility = 'hidden';
  }
}



function addToTextBox() {
  let content = formatText(sample_text);
  textbox.value(content);
  //console.log(content);
}

function gotFile(file) {

  //let content = formatText(data.data);
  textbox.value(file.data);
  //console.log(file.data);
}

function highlight() {
  dragger.style('background-color', '#ccc');
}

function unhighlight() {
  dragger.style('background-color', '#fff');
}

function clearAll () {
  textbox.value("");
  workbox.html("");
}
