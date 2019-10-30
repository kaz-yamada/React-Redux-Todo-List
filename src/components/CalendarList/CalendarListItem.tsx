import * as React from "react";

import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

interface IProps {
  id: string;
  date: string;
  title: string;
}

const CalendarListItem = (props: IProps) => {
  const { date, title } = props;

  return (
    <ListItem button={true} component={Link} to={`/calendar/${date}`}>
      <ListItemText primary={title} secondary={date} />
    </ListItem>
  );
};

export default CalendarListItem;
