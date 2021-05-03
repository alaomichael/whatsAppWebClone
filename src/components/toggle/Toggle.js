import React, { useState } from "react";
import "./Toggle.css";
import {ThemeProvider, createMuiTheme, Paper, FormGroup, FormControl,FormLabel,Radio,FormControlLabel,RadioGroup} from '@material-ui/core'
//☀︎ ☽
export default function Toggle({props}) {

  const [darkMode, setDarkMode] = useState(false);

  const theme= createMuiTheme({
    palette:{
      type: darkMode ? 'dark' : 'light'
    }
  })
  return (
    <label className="switch">
    <input type="checkbox"  checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
    <span className="slider round"> </span>
  </label>
  );
}
