document.getElementById('new-today').addEventListener('click', function () {
  window.location.href = 'ans.html';
});

document.getElementById('btn-1').addEventListener('click', function () {
  const taskElement = document.getElementById('task');
  let value = parseInt(taskElement.innerText);

  if (value > 0) {
    value -= 1;
    taskElement.innerText = value;

    alert('Board Updated Successfully');

    const btn = document.getElementById('btn-1');
    btn.setAttribute('disabled', true);

    if (value === 0) {
      alert('yes');
    }

    const addHistory = document.getElementById('history');
    const cardTitle = document.getElementById('card-title-1').innerText;

    const historyItem = document.createElement('div');
    historyItem.innerText = `Completed: ${cardTitle}`;
    // appendChild.add = 'clear';
    historyItem.classList.add('extra-style');
    addHistory.appendChild(historyItem);
  }
});

document.getElementById('theme-change').addEventListener('click', function () {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.backgroundColor = randomColor;
});
