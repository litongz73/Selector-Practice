// Import stylesheets
import './style.css';

var first = document.getElementById('initial');
var second = document.getElementById('words');

const state = {
  a: 'apple',
  b: 'banana',
  c: 'city',
  d: 'dom',
  e: 'end',
  f: 'forEach',
  g: 'gold',
};

for (let key in state) {
  var option = document.createElement('option');
  option.text = key;
  option.value = key;
  first.add(option);

  var option2 = document.createElement('option');
  option2.text = state[key];
  option2.value = state[key];
  second.add(option2);
}

first.addEventListener('change', () => {
  var selectedKey = first.value;
  second.value = state[selectedKey];
});

second.addEventListener('change', () => {
  var selectVal = second.value;
  first.value = Object.keys(state).filter((key) => {
    return state[key] === selectVal;
  });
});
