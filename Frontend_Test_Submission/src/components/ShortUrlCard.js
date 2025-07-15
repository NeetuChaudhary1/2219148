import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function ShortUrlCard({ data }) {
  return (
    <Card sx={{ my: 1 }}>
      <CardContent>
        <Typography><strong>Original:</strong> {data.originalUrl}</Typography>
        <Typography><strong>Short:</strong> <a href={data.shortUrl} target="_blank" rel="noreferrer">{data.shortUrl}</a></Typography>
        <Typography><strong>Expires In:</strong> {data.expiresIn}</Typography>
      </CardContent>
    </Card>
  );
}

export default ShortUrlCard;
