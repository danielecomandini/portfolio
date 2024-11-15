import { Card } from "@mui/material";
import Row from "../../../../UI/materials/grid/Row";
import Column from "../../../../UI/materials/grid/Column";

const AboutMeInfo = ({label, value}) => {
    return <Row>
        <Column laptop={2} mobile={2}>
            <h1>{label}</h1>
        </Column>
        <Column laptop={10} mobile={10}>{value}</Column>
    </Row>
}

const AboutMe = () => {
  return <Card>
    <Row>
        <Column laptop={3} mobile={3}>
            PICTURE HERE...
        </Column>
        <Column laptop={9} mobile={9}>
            <AboutMeInfo label="FIRST NAME" value="Daniele" />
            <AboutMeInfo label="LAST NAME" value="Comandini" />
        </Column>
    </Row>
  </Card>;
};

export default AboutMe;
