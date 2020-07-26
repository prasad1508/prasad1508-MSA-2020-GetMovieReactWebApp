import React,{useState} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Show from "./pages/Show/Show";
import SearchBar from './pages/SearchBar/SearchBar';
import { IUserInput } from './Common/Interfaces';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';


function App() {
// user input state start
const [UserInput, setUserInput] = useState<IUserInput>({
  SearchYear: "2018",
  SearchMovie: "abc",
});
function SetUserInput(a: IUserInput) {
  setUserInput(a);    
}  
// end of user input state start


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/show/:id" component={Show}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
