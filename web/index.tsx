import * as b from "bobril";
import "bobrilstrap";
import { data } from "./src/data/data";
import { Navigation } from "./src/navigation";
import { Container } from "bobrilstrap";

const navigationPadding = b.styleDef({ paddingTop: 50 });

b.init(() => (
  <>
    <Navigation />
    <Container fluid style={navigationPadding}>
      {data.items.map(item => item.name)}
    </Container>
  </>
));
