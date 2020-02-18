import * as b from "bobril";
import {
  Navbar,
  Container,
  NavbarHeader,
  NavbarBrand,
  NavbarFixed
} from "bobrilstrap";

export function Navigation(): b.IBobrilNode {
  return (
    <Container>
      <Navbar fixed={NavbarFixed.Top}>
        <Container fluid>
          <NavbarHeader>
            <NavbarBrand>alkalic</NavbarBrand>
          </NavbarHeader>
        </Container>
      </Navbar>
    </Container>
  );
}
