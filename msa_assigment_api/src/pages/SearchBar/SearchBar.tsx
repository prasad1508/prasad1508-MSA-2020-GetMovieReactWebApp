import React, { useState, useRef } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import "./SearchBar.css";

interface ISearchBarProps {
  setYear: (y: string) => void;
  setQuery: (q: string) => void;
}

const SearchBar: React.FC<ISearchBarProps> = (props) => {
  const yearRef = useRef<HTMLInputElement>(null);
  const queryRef = useRef<HTMLInputElement>(null);

  const [HasFocus, setHasFocus] = useState<boolean>(false);

  const handleSubmit = () => {
    let year = yearRef?.current?.value as string;
    let query = queryRef?.current?.value as string;

    props.setYear(year);
    props.setQuery(query);
    console.log(year, query);
  };

  return (
    <div className="SearchBarContainer">
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="outlined-required"
            label="Year"
            variant="outlined"
            inputRef={yearRef}
          />
        </Grid>

        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="outlined-required"
            label="Search"
            variant="outlined"
            inputRef={queryRef}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchBar;
