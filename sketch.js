let sample_text, sample_link, dragger, textbox, submit, cleartext, realData;

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
  submit = select('#submit');
  cleartext = select('#clear');

  sample_link.mousePressed(addToTextBox);
  dragger.dragOver(highlight);
  dragger.dragLeave(unhighlight);
  dragger.drop(gotFile, unhighlight);
}

function addToTextBox() {
  let content = formatText(sample_text);
  textbox.value(content);
  //console.log(content);
}

function gotFile(file) {
  
  //let content = formatText(data.data);
  textbox.value(file.data);
  console.log(file.data);
}

function highlight() {
  dragger.style('background-color', '#ccc');
}

function unhighlight() {
  dragger.style('background-color', '#fff');
}
