import axios from "axios";
const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJuZWV0dXJhbmkuMjIwMjIyMTkxQGdlaHUuYWMuaW4iLCJleHAiOjE3NTI1NTc2NTMsImlhdCI6MTc1MjU1Njc1MywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6Ijg1YWZjYzU5LWY0YTktNGNlOS04NmQ1LTBmNDljNjNmY2I3YSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im5lZXR1IHJhbmkiLCJzdWIiOiJhZGEzYThiOS1kZWQzLTQyMzMtYTRhZC1kMDc4MzQyNDUzYjEifSwiZW1haWwiOiJuZWV0dXJhbmkuMjIwMjIyMTkxQGdlaHUuYWMuaW4iLCJuYW1lIjoibmVldHUgcmFuaSIsInJvbGxObyI6IjIyMTkxNDgiLCJhY2Nlc3NDb2RlIjoiUUFoRFVyIiwiY2xpZW50SUQiOiJhZGEzYThiOS1kZWQzLTQyMzMtYTRhZC1kMDc4MzQyNDUzYjEiLCJjbGllbnRTZWNyZXQiOiJNeVFGcG5uZFFkV2daTnhwIn0.U_XiSuZlz74HudPGHa5QXQDbdLmIdva0jwmJj0nk6vw";

export async function Log(stack, level, packageName, message) {
  const logData = {
    stack: stack.toLowerCase(),
    level: level.toLowerCase(),
    package: packageName.toLowerCase(),
    message,
  };

  try {
    const response = await axios.post(
      "http://20.244.56.144/evaluation-service/logs",
      logData,
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Log sent:", response.data);
  } catch (error) {
    console.error(
      " Logging failed:",
      error.response?.data || error.message
    );
  }
}
