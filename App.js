import {ThemeProvider} from "styled-components"
import {Login} from './src/screens/User/Login';

import theme from "./src/globals/styles/theme"

export default function App() {
  return ( 
  <ThemeProvider theme={theme}>
  <Login/>
  </ThemeProvider>
  )
}


