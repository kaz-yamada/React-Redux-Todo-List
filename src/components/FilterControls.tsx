import * as React from "react";

import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import {
  IFilterControlDispatch,
  IFilterControlProps
} from "../containers/FilterControlContainer";

class FilterControls extends React.Component<
  IFilterControlProps & IFilterControlDispatch,
  {}
> {
  private handleChange = (event: any) => {
    this.props.applyFilter(event.target.value);
  };

  public render() {
    return (
      <FormControl>
        <FormLabel>Filter</FormLabel>
        <Grid container={true}>
          <RadioGroup
            value={this.props.filterType}
            onChange={this.handleChange}
            style={{ flexDirection: "row" }}
          >
            <FormControlLabel
              value="all"
              control={<Radio color="primary" />}
              label="All"
              className="MuiGrid-grid-sm-4-100"
            />
            <FormControlLabel
              value="active"
              control={<Radio color="primary" />}
              label="Active"
              className="MuiGrid-grid-sm-4-100"
            />
            <FormControlLabel
              value="completed"
              control={<Radio color="primary" />}
              label="Completed"
              className="MuiGrid-grid-sm-4-100"
            />
          </RadioGroup>
        </Grid>
      </FormControl>
    );
  }
}

export default FilterControls;
