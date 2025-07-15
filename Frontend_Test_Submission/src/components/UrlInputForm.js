import React, { useState } from "react";
import {
  TextField,
  Button,
  Stack,
  Typography,
  Paper,
} from "@mui/material";
import ShortUrlCard from "./ShortUrlCard";
import { Log } from "../logger";

function UrlInputForm() {
  const [urlInput, setUrlInput] = useState("");
  const [shortcode, setShortcode] = useState("");
  const [validity, setValidity] = useState(30);
  const [results, setResults] = useState([]);

  const handleSubmit = () => {
    if (!urlInput.startsWith("http")) {
      alert("Invalid URL format.");
      Log("frontend", "error", "form", "Invalid URL format");
      return;
    }

    const newCode = shortcode || Math.random().toString(36).substring(2, 7);
    const newShort = {
      originalUrl: urlInput,
      shortcode: newCode,
      shortUrl: `http://localhost:3000/${newCode}`,
      expiresIn: `${validity} min`,
    };

    setResults([...results, newShort]);

    Log("frontend", "info", "form", `Shortened URL: ${urlInput} to ${newShort.shortUrl}`);

    
    setUrlInput("");
    setShortcode("");
    setValidity(30);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={2}>
        <TextField
          label="Original URL"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          fullWidth
        />
        <TextField
          label="Custom Shortcode (optional)"
          value={shortcode}
          onChange={(e) => setShortcode(e.target.value)}
          fullWidth
        />
        <TextField
          label="Validity (minutes)"
          type="number"
          value={validity}
          onChange={(e) => setValidity(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={handleSubmit}>
          Shorten
        </Button>
      </Stack>

      <Typography variant="h6" mt={4}>
        Shortened URLs:
      </Typography>
      {results.map((r, i) => (
        <ShortUrlCard key={i} data={r} />
      ))}
    </Paper>
  );
}

export default UrlInputForm;
