import * as React from "react";

import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import { FilterList } from "@material-ui/icons";

import { IFilterContainerProps } from ".";
import { FILTER_MENU } from "../../constants/menu";
import FilterMenuItem from "./FilterMenuItem";

interface IProps extends WithStyles<typeof styles> {}
interface IState {
  showFilterMenu: boolean;
  anchorEl: null | HTMLElement;
}

const styles = (theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing.unit
    }
  });
class FilterMenu extends React.Component<
  IFilterContainerProps & IProps,
  IState
> {
  constructor(props: IFilterContainerProps & IProps) {
    super(props);
    this.state = {
      anchorEl: null,
      showFilterMenu: false
    };
  }

  private handleItemClick = (value: string) => {
    this.handleMenuClose();
    this.props.applyFilter(value);
  };

  private handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.persist();
    this.setState({
      anchorEl: event.currentTarget,
      showFilterMenu: true
    });
  };

  private handleMenuClose = () => {
    this.setState({ anchorEl: null, showFilterMenu: false });
  };

  public render() {
    return (
      <div>
        <IconButton
          onClick={this.handleOpenMenu}
          className={this.props.classes.button}
          aria-label="Filter"
          aria-owns={this.state.anchorEl ? "filter-menu" : undefined}
          aria-haspopup="true"
        >
          <FilterList />
        </IconButton>
        <Menu
          open={this.state.showFilterMenu}
          onClose={this.handleMenuClose}
          anchorEl={this.state.anchorEl}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
        >
          {FILTER_MENU.map(item => {
            return (
              <FilterMenuItem
                key={item.value}
                value={item.value}
                label={item.label}
                handleClick={this.handleItemClick}
              />
            );
          })}
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(FilterMenu);
