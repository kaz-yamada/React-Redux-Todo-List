import * as React from "react";

import MenuItem from "@material-ui/core/MenuItem";

interface IProps {
  value: string;
  label: string;
  handleClick: (value: string) => void;
}

class FilterMenuItem extends React.Component<IProps, {}> {
  private handleClick = (event: React.MouseEvent<HTMLElement>) => {
    this.props.handleClick(this.props.value);
  };

  public render() {
    const { value, label } = this.props;

    return (
      <MenuItem value={value} onClick={this.handleClick} >
        {label}
      </MenuItem>
    );
  }
}

export default FilterMenuItem;
