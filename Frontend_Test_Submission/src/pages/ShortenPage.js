import React from "react";
import UrlInputForm from "../components/UrlInputForm";
import { Container, Typography } from "@mui/material";
import { Log } from "../logger";

function ShortenPage() {
  React.useEffect(() => {
    Log("frontend", "info", "shorten-page", "Shorten page loaded");
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        URL Shortener
      </Typography>
      <UrlInputForm />
    </Container>
  );
}

export default ShortenPage;
