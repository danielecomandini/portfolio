import { Card } from "@mui/material";
import Row from "../../../../UI/materials/grid/Row";
import Column from "../../../../UI/materials/grid/Column";
import Text from "../../../../UI/materials/text/Text";
import { PALETTE } from "../../../../UI/themes/Theme";

const AboutMeInfo = ({ label, value }) => {
  return (
    <Row>
      <Column laptop={4} mobile={4}>
        <Text variant={9} bold>
          {label}
        </Text>
      </Column>
      <Column laptop={8} mobile={8}>
        <Text variant={9} color={PALETTE.BLUE}>
          {value}
        </Text>
      </Column>
    </Row>
  );
};

const AboutMe = () => {
  return (
    <Card>
      <Row>
        <Column laptop={3} mobile={3}>
          PICTURE HERE...
        </Column>
        <Column laptop={9} mobile={9}>
          <AboutMeInfo label="FIRST NAME" value="Daniele" />
          <AboutMeInfo label="LAST NAME" value="Comandini" />
          <AboutMeInfo label="MOBILE" value="+353 830 45 9166" />
          <AboutMeInfo label="EMAIL" value="daniele_comandini@hotmail.com" />
        </Column>
      </Row>
    </Card>
  );
};

export default AboutMe;
