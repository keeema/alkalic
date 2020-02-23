import * as b from "bobril";
import {
  Navbar,
  Image,
  Container,
  NavbarHeader,
  NavbarBrand,
  NavbarFixed,
  Collapse,
  NavbarCollapse,
  NavbarNav,
  NavbarAlignment,
  Button,
  ButtonVariant,
  navStyles
} from "bobrilstrap";
import { InstallButton } from "./installButton";
import { observable } from "bobx";

export class Navigation extends b.Component {
  static id: string = "navigation";

  @observable
  private _collapsed: boolean = true;

  private toggleMenu(): void {
    this._collapsed = !this._collapsed;
  }

  private closeMenu(): void {
    this._collapsed = true;
  }

  render(): b.IBobrilNode {
    return (
      <Container>
        <Navbar fixed={NavbarFixed.Top}>
          <Container fluid>
            <NavbarHeader>
              <NavbarBrand>
                <span>
                  <Image src="icons/icon-128x128.png" width={25} height={25} />
                </span>
                <span style={navbarBrandTextStyle}>alkalic</span>
              </NavbarBrand>
              <Button
                variant={ButtonVariant.NavbarToggle}
                onClick={() => this.toggleMenu()}
              >
                <span style={navStyles.iconBar} />
                <span style={navStyles.iconBar} />
                <span style={navStyles.iconBar} />
              </Button>
            </NavbarHeader>
            <Collapse collapsed={this._collapsed}>
              <NavbarCollapse>
                <NavbarNav alignment={NavbarAlignment.Right}>
                  <InstallButton onClick={() => this.closeMenu()} />
                </NavbarNav>
              </NavbarCollapse>
            </Collapse>
          </Container>
        </Navbar>
      </Container>
    );
  }
}

const navbarBrandTextStyle = b.styleDef({ marginLeft: 5 });
