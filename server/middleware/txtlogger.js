import fs from 'fs';

function consoleToTxtMiddleware(req, res, next) {
  // Save the original console.log function
  const logStream = fs.createWriteStream('log.txt', { flags: 'a' });

  const consoleLog = console.log;
  console.log = function () {
    const logData = {
      type: 'console.log',
      data: Array.prototype.slice.call(arguments),
    };
    const serializedLogData = JSON.stringify(logData);
    logStream.write(`${new Date().toISOString()}: ${serializedLogData}\n`);
    consoleLog.apply(console, arguments);
  };
  next();
}

export default consoleToTxtMiddleware;
