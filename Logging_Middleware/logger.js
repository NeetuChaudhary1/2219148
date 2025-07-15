const axios = require("axios");

const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJuZWV0dXJhbmkuMjIwMjIyMTkxQGdlaHUuYWMuaW4iLCJleHAiOjE3NTI1NjEwNDgsImlhdCI6MTc1MjU2MDE0OCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjFjMjEwMDMwLTIyYmUtNDJjMi1iMmVkLTk4Yzg0OTFiMDhkNiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im5lZXR1IHJhbmkiLCJzdWIiOiJhZGEzYThiOS1kZWQzLTQyMzMtYTRhZC1kMDc4MzQyNDUzYjEifSwiZW1haWwiOiJuZWV0dXJhbmkuMjIwMjIyMTkxQGdlaHUuYWMuaW4iLCJuYW1lIjoibmVldHUgcmFuaSIsInJvbGxObyI6IjIyMTkxNDgiLCJhY2Nlc3NDb2RlIjoiUUFoRFVyIiwiY2xpZW50SUQiOiJhZGEzYThiOS1kZWQzLTQyMzMtYTRhZC1kMDc4MzQyNDUzYjEiLCJjbGllbnRTZWNyZXQiOiJNeVFGcG5uZFFkV2daTnhwIn0.8MZxT9otQKA3xbSM2sodMyGktElPA1nMPhAzKP2AEM8";

function Log(stack, level, packageName, message) {
  const logData = {
    stack: stack.toLowerCase(),
    level: level.toLowerCase(),
    package: packageName.toLowerCase(),
    message: message,
  };

  console.log(" Sending log with data:", logData); 
  console.log("Using token:", AUTH_TOKEN.substring(0, 20) + "..."); 

  axios
    .post("http://20.244.56.144/evaluation-service/logs", logData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${AUTH_TOKEN}`,
      },
    })
    .then((response) => {
      console.log(" Log sent successfully:", response.data);
    })
    .catch((error) => {
      if (error.response) {
        console.error(" API Error:", error.response.status, error.response.data);
      } else {
        console.error(" Error:", error.message);
      }
    });
}

module.exports = Log;
