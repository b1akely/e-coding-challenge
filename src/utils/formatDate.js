import React from "react";
import Moment from "react-moment";

export default date => {
  if (!date.value) {
    return "---";
  } else {
    return <Moment format="MM/DD/YYYY">{date.value}</Moment>;
  }
};
