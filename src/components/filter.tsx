import * as React from "react";

import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

interface IProps {
  option: string;
  changeFilter: (value: string) => void;
}

class FilterList extends React.Component<IProps, {}> {
  private handleChange = (event: any) => {
    this.props.changeFilter(event.target.value);
  };
  public render() {
    return (
      <FormControl>
        <FormLabel>Fitler</FormLabel>
        <RadioGroup
          value={this.props.option}
          onChange={this.handleChange}
          style={{ flexDirection: "row" }}
        >
          <FormControlLabel
            value="all"
            control={<Radio color="primary" />}
            label="All"
          />
          <FormControlLabel
            value="active"
            control={<Radio color="primary" />}
            label="Active"
          />
          <FormControlLabel
            value="completed"
            control={<Radio color="primary" />}
            label="Completed"
          />
        </RadioGroup>
      </FormControl>
    );
  }
}

export default FilterList;
