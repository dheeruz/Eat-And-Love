import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const SuggestRecipe = () => {
  return (
    <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h5" gutterBottom>Suggest a New Recipe</Typography>
      <TextField label="Recipe Name" fullWidth />
      <TextField label="Ingredients" fullWidth multiline rows={4} />
      <TextField label="Instructions" fullWidth multiline rows={4} />
      <Button variant="contained" color="primary">Submit Suggestion</Button>
    </Box>
  );
};

export default SuggestRecipe;
