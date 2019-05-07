import React from "react";
import { Box } from "rebass";
import ReactTable from "react-table";
import "react-table/react-table.css";
import formatDate from "../utils/formatDate";

class Table extends React.Component {
  render() {
    const conditions = this.props.conditions;

    const columns = [
      {
        Header: "Condition Name",
        accessor: "name"
      },
      {
        Header: "Date First Recorded",
        id: "dateOnset",
        accessor: "dateOnset",
        Cell: props => formatDate(props),
        filterAll: true,
        style: { textAlign: "center" }
      },
      {
        Header: "PubMed",
        Cell: ({ row }) => (
          <a href={`https://www.ncbi.nlm.nih.gov/pubmed/?term= + ${row.name}`}>
            {" "}
            Link{" "}
          </a>
        ),
        style: { textAlign: "center" },
        sortable: false
      }
    ];

    return (
      <Box width={1} py={4}>
        <ReactTable
          data={conditions}
          columns={columns}
          defaultPageSize={50}
          defaultSorted={[{ id: "dateOnset", desc: true }]}
        />
      </Box>
    );
  }
}

export default Table;
