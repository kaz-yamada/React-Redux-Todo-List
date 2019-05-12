import * as React from "react";

import classNames from "classnames";

import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";

import { ISideDrawerContainerProps } from ".";
import { STYLE_CONSTANTS } from "../../constants";

import MAIN_MENU from "../../constants/menu";
import ListItemLink from "./ListItemLink";

const drawerWidth = STYLE_CONSTANTS.drawerWidth;

interface IProps {
  classes: any;
  theme: Theme;
}

const styles = (theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap"
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: 0,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing.unit * 7 + 1
      }
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar
    }
  });

class SideDrawer extends React.Component<
  ISideDrawerContainerProps & IProps,
  {}
> {
  public render() {
    const { classes, isDrawerOpen } = this.props;
    return (
      <Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: isDrawerOpen,
          [classes.drawerClose]: !isDrawerOpen
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: isDrawerOpen,
            [classes.drawerClose]: !isDrawerOpen
          })
        }}
        open={isDrawerOpen}
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {MAIN_MENU.map(menuItem => {
            return (
              <ListItemLink
                key={menuItem.name}
                name={menuItem.name}
                icon={<menuItem.icon />}
                to={menuItem.link}
              />
            );
          })}
        </List>
        <Divider />
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SideDrawer);
