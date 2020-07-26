import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import "./SearchBar.css";
import { IUserInput } from "../../Common/Interfaces";

interface ISearchBarProps {
  SetUserInput: (a: IUserInput) => void;
}

function SearchBar(props: ISearchBarProps) {

        const [SearchYear, setSearchYear] = useState<string | null>("");
        const handleSearchYearChange = (s: string | null) =>{
                setSearchYear(s);          
            }

            const [SearchMovie, setSearchMovie] = useState<string | null>("");
            const handleSearchMovieChange = (s: string | null) =>{
                setSearchMovie(s);          
            }

            const [HasFocus, setHasFocus] = useState<boolean>(false);

        // button onclick event eke me function eka call krala thiyenwa 
        const handleSubmit = () => {
            if (SearchYear?.length !== 0 && SearchYear !== null && SearchYear !== "") {
                let UserInput: IUserInput = {
                    SearchYear: SearchYear,
                    SearchMovie: SearchMovie
                
                }
                props.SetUserInput(UserInput);
            } else {
                setHasFocus(true);
            }
        }


        return (
                 <div className="SearchBarContainer">
                    <Grid container spacing={3}>
                        <Grid item xs={6} sm={3}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Search"
                            variant="outlined"
                            error={HasFocus && SearchYear === ""}
                            onClick={() => setHasFocus(true)}
                            value={SearchYear}
                            onChange={(e) => handleSearchYearChange(e.target.value)}
                        />
                        </Grid>

                        <Grid item xs={6} sm={3}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Search"
                            variant="outlined"
                            error={HasFocus && SearchMovie === ""}
                            onClick={() => setHasFocus(true)}
                            value={SearchMovie}
                            onChange={(e) => handleSearchMovieChange(e.target.value)}
                        />
                        </Grid>

                        {/* -----------button starts--------------------  */}
                        <Grid item xs={6} sm={3}>
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                        </Grid>
                        {/* -------------button end-------------------  */}
                    </Grid>
                 </div>
                 );
        
}

export default SearchBar;
