// 1. بٹن اور پوری باڈی کو کوڈ کے ہاتھ میں لائیں
const themeBtn = document.getElementById("theme-btn");
const bodyElement = document.body;

// 2. جب بٹن پر کلک ہو تو کیا ہو؟
themeBtn.addEventListener("click", function () {
  // ڈارک تھیم کلاس کو آن یا آف کریں
  bodyElement.classList.toggle("dark-theme");

  // بٹن کا متن تبدیل کریں
  if (bodyElement.classList.contains("dark-theme")) {
    themeBtn.textContent = "لائٹ موڈ آن کریں ☀️";
  } else {
    themeBtn.textContent = "ڈارک موڈ آن کریں 🌙";
  }
});

// ٹاسک لسٹ کے عناصر کو پکڑیں
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// بٹن کلک کرنے پر نیا کام شامل کرنے کا فنکشن
addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  // اگر خانہ خالی ہو تو الرٹ دیں
  if (taskText === "") {
    alert("برائے مہربانی پہلے کوئی کام لکھیں!");
    return;
  }

  // نیا <li> ٹیگ بنائیں
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">ختم کریں ❌</button>
  `;

  // ڈیلیٹ بٹن کو کام کرنے والا بنائیں
  const deleteBtn = li.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // لسٹ کے اندر یہ نیا کام شامل کر دیں
  taskList.appendChild(li);

  // ان پٹ فیلڈ کو دوبارہ خالی کریں
  taskInput.value = "";
});
