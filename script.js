/* ================= Typing Animation ================= */
const highlights = [
  "Strong in DSA & Core CS Fundamentals",
  "Building Real-World Projects"
];

let i = 0, j = 0;
const typing = document.getElementById("typing");

function type() {
  if (j < highlights[i].length) {
    typing.textContent += highlights[i][j++];
    setTimeout(type, 70);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (j > 0) {
    typing.textContent = highlights[i].substring(0, --j);
    setTimeout(erase, 40);
  } else {
    i = (i + 1) % highlights.length;
    setTimeout(type, 300);
  }
}

type();

/* ================= Theme Toggle ================= */
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("light");
};

/* ================= Project Modal ================= */
function openModal(key) {
  const data = {
    parking: [
      "Smart Parking System",
      "Java-based smart parking solution using OOP concepts.",
      "https://github.com/Goutham-Jatoth"
    ],
    library: [
      "Library Management System",
      "Advanced Java application for library automation.",
      "https://github.com/Goutham-Jatoth"
    ],
    contact: [
      "Contact Book Application",
      "Python-based CRUD application for contact management.",
      "https://github.com/Goutham-Jatoth"
    ]
  };

  document.getElementById("modalTitle").innerText = data[key][0];
  document.getElementById("modalDesc").innerText = data[key][1];
  document.getElementById("modalLink").href = data[key][2];
  document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

/* ================= Resume Modal ================= */
function openResume() {
  document.getElementById("resumeModal").style.display = "flex";
}

function closeResume() {
  document.getElementById("resumeModal").style.display = "none";
}
