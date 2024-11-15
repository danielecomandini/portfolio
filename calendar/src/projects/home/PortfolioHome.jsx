import Row from "../../UI/materials/grid/Row";
import Column from "../../UI/materials/grid/Column";
import AboutMe from "./components/about-me/AboutMe";

const PortfolioHome = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        marginTop: "20px",
        width: "98%",
      }}
    >
      <Row>
        <Column laptop={3}>
          <AboutMe />
        </Column>
        <Column laptop={9}>RIGHT</Column>
      </Row>
    </div>
  );
};

export default PortfolioHome;
