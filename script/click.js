document.getElementById('new-today').addEventListener('click', function () {
  window.location.href = 'ans.html';
});

// btn-1
document.getElementById('secound').style.display = 'none';
document.getElementById('btn-1').addEventListener('click', function () {
  const taskElement = document.getElementById('task');
  let value = parseInt(taskElement.innerText);
  document.getElementById('secound').style.display = 'block';

  if (value > 0) {
    value -= 1;
    taskElement.innerText = value;

    alert('Board Updated Successfully');

    const btn = document.getElementById('btn-1');
    btn.setAttribute('disabled', true);
  }
});
// btn-2
document.getElementById('btn-2').addEventListener('click', function () {
  const taskElement = document.getElementById('task');
  let value = parseInt(taskElement.innerText);
  document.getElementById('secound').style.display = 'block';

  if (value > 0) {
    value -= 1;
    taskElement.innerText = value;

    alert('Board Updated Successfully');

    const btn = document.getElementById('btn-2');
    btn.setAttribute('disabled', true);
  }
});

document.getElementById('clear-btn').addEventListener('click', function () {
  document.getElementById('secound').style.display = 'none';
});

document.getElementById('theme-change').addEventListener('click', function () {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.backgroundColor = randomColor;
});
