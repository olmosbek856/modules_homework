const fs = require("fs");
const path = require("path");

//topshiriq 1
const students = ["Ali", "Vali", "Hasan", "Husan", "Jasur"];

fs.writeFileSync("students.txt", students.join("\n"));

const data = fs.readFileSync("students.txt", "utf-8");
console.log(data);

// topshiriq 2
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Ismingiz: ", name => {
  readline.question("Yoshingiz: ", age => {
    fs.writeFileSync("user_info.txt", `Ism: ${name}\nYosh: ${age}`);
    console.log("Ma'lumot saqlandi");
    readline.close();
  });
});

// topshiriq 3
const today = new Date().toLocaleDateString();
const text = "Bugun Node.js fs modulini o‘rgandim";

fs.appendFileSync(
  "diary.txt",
  `\n[${today}] ${text}`
);


// topshiriq 4
const fileName = "test.txt";

if (fs.existsSync(fileName)) {
  fs.unlinkSync(fileName);
  console.log("Fayl o‘chirildi");
} else {
  console.log("Fayl topilmadi");
}

// topshiriq 5
if (fs.existsSync("draft.txt")) {
  fs.renameSync("draft.txt", "final.txt");
  console.log("Fayl nomi o‘zgartirildi");
} else {
  console.log("❌ draft.txt fayli topilmadi");
}



// topshiriq 6
fs.mkdirSync("projects/frontend", { recursive: true });
fs.mkdirSync("projects/backend", { recursive: true });
fs.mkdirSync("projects/database", { recursive: true });

console.log("Papka strukturasi yaratildi");

// topshiriq 7
if (fs.existsSync("temp")) {
  fs.rmdirSync("temp");
  console.log("temp papkasi o‘chirildi");
}

