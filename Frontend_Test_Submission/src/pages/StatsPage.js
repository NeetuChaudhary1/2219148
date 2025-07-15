import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import { Log } from "../logger";

function StatsPage() {
  const dummyData = [
    {
      shortcode: "neetu123",
      originalUrl: "https://example.com",
      clicks: 12,
      createdAt: "2025-07-10",
      expiresAt: "2025-07-11",
    },
    {
      shortcode: "gehu22",
      originalUrl: "https://gehu.ac.in",
      clicks: 5,
      createdAt: "2025-07-09",
      expiresAt: "2025-07-10",
    },
  ];

  React.useEffect(() => {
    Log("frontend", "info", "stats-page", "Stats page opened");
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        URL Statistics
      </Typography>
      {dummyData.map((url, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2 }}>
          <Typography>Shortcode: {url.shortcode}</Typography>
          <Typography>Original URL: {url.originalUrl}</Typography>
          <Typography>Clicks: {url.clicks}</Typography>
          <Typography>Created At: {url.createdAt}</Typography>
          <Typography>Expires At: {url.expiresAt}</Typography>
        </Paper>
      ))}
    </Container>
  );
}

export default StatsPage;
