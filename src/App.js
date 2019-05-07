import React from "react";
import { Flex } from "rebass";
import Table from "./components/Table";
import Header from "./components/Header";
import reduceConditions from "./utils/reduceConditions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    try {
      const patientRes = await fetch(
        "https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Patient/1316024",
        {
          method: "GET",
          headers: {
            Accept: "application/json+fhir"
          }
        }
      );
      const patient = await patientRes.json();
      const conditionsRes = await fetch(
        "https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition?patient=1316024&clinicalstatus=active",
        {
          method: "GET",
          headers: {
            Accept: "application/json+fhir"
          }
        }
      );
      const conditions = await conditionsRes.json();

      this.setState({
        isLoaded: true,
        patient: patient,
        conditions: reduceConditions(conditions)
      });
    } catch (err) {
      alert(err);
    }
  }

  render() {
    const { error, isLoaded, patient, conditions } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Retrieving data...</div>;
    } else {
      return (
        <Flex flexWrap="wrap">
          <Header patient={patient} />
          <Table conditions={conditions} />
        </Flex>
      );
    }
  }
}

export default App;
