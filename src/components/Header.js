import React from "react";
import { Flex, Box, Text, Heading } from "rebass";
import capitalize from "../utils/capitalize";

class Header extends React.Component {
  render() {
    const patient = this.props.patient;
    patient.gender = capitalize(patient.gender);

    return (
      <Flex flexWrap="wrap" width={1}>
        <Box width={[1, 1 / 3]} py={2}>
          <Heading as="h1" fontWeight="bold" py={2}>
            Patient Name:
          </Heading>
          <Text>{patient.name[0].text}</Text>
        </Box>

        <Box width={[1, 1 / 3]} py={2}>
          <Heading as="h1" fontWeight="bold" py={2}>
            DOB:
          </Heading>
          <Text>{patient.birthDate}</Text>
        </Box>

        <Box width={[1, 1 / 3]} py={2}>
          <Heading as="h1" fontWeight="bold" py={2}>
            Administrative Gender:
          </Heading>
          <Text>{patient.gender}</Text>
        </Box>
      </Flex>
    );
  }
}

export default Header;
