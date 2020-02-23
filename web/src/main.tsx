import * as b from "bobril";
import { Navigation } from "./navigation/navigation";
import { Container, Main as MainContent } from "bobrilstrap";

export class Main extends b.Component<b.IRouteHandlerData> {
  static id: string = "main-page";
  render(): b.IBobrilNode {
    return (
      <>
        <Navigation />
        <MainContent>
          <Container fluid style={navigationPadding}>
            {this.data.activeRouteHandler()}
          </Container>
        </MainContent>
      </>
    );
  }
}

const navigationPadding = b.styleDef({ paddingTop: 65 });
