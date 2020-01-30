import React from "react";

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

function ListItemLink(props: IProps) {
  const { icon, name, to } = props;
  return (
    <ListItem button={true} component={Link} to={to}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
}

export default ListItemLink;
