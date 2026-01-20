//1-topshiriq
const os = require("os");

const totalRAM = os.totalmem(); 
const freeRAM = os.freemem();

const usedRAM = totalRAM - freeRAM;
const usedPercent = (usedRAM / totalRAM) * 100;

console.log(`RAM bandligi: ${usedPercent.toFixed(2)}%`);

//2-topshiriq


const interfaces = os.networkInterfaces();
const ipv4Addresses = [];

for (const name in interfaces) {
  for (const net of interfaces[name]) {
    if (net.family === "IPv4" && !net.internal) {
      ipv4Addresses.push(net.address);
    }
  }
}
console.log("IPv4 addresslar:", ipv4Addresses);


// topshiriq 4

const cpuModels = os.cpus().map(cpu => cpu.model);

console.log(cpuModels);
