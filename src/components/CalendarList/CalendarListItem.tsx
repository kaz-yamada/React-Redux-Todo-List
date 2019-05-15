import * as React from "react";

import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

interface IProps {
  id: string;
  date: string;
  title: string;
}

class CalendarListItem extends React.Component<IProps, {}> {
  private renderLink = (itemProps: any) => (
    <Link to={"/calendar/" + this.props.date} {...itemProps} />
  );

  public render() {
    return (
      <ListItem button={true} component={this.renderLink as any}>
        <ListItemText primary={this.props.title} secondary={this.props.date} />
      </ListItem>
    );
  }
}

export default CalendarListItem;
