const path = require("path");

const result = path.join(
"users",
"jakhongir",
"documents",
"project",
"index.js"
);
console.log(result)

///////////////////
function fileInfo(filePath) {
  return {
    fileName: path.basename(filePath),
    nameWithoutExt: path.basename(filePath, path.extname(filePath)),
    extension: path.extname(filePath),
    directory: path.dirname(filePath)
  };
}
console.log(fileInfo("C:/projects/app/index.js"));

/////////////////////////
const parsedPath = path.parse("/home/user/test/data.txt");

console.log(parsedPath);
///////////////////////////

console.log(path.isAbsolute("/users/test/a.js")); 
console.log(path.isAbsolute("users/test/a.js")); 

//////////////////////////
const cleanPath = path.normalize(
  "users//jakhongir///desktop/project//index.js"
);

console.log(cleanPath);
/////////////////////////
const absolutePath = path.resolve(
  "project",
  "src",
  "utils",
  "helper.js"
);

console.log(absolutePath);
//////////////////////

