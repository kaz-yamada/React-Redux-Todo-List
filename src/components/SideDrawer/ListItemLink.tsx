import * as React from "react";

import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

interface IProps {
  name: string;
  icon: React.ReactElement;
  to: string;
  replace?: boolean;
}

class ListItemLink extends React.Component<IProps, {}> {
  private renderLink = (itemProps: any) => (
    <Link to={this.props.to} {...itemProps} />
  );

  public render() {
    return (
      <li>
        <ListItem button={true} component={this.renderLink as any}>
          <ListItemIcon>{this.props.icon}</ListItemIcon>
          <ListItemText primary={this.props.name} />
        </ListItem>
      </li>
    );
  }
}

export default ListItemLink;
