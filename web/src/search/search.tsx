import * as b from "bobril";
import { t } from "bobril-g11n";
import {
  Row,
  Col,
  Size,
  InputGroup,
  InputGroupAddon,
  InputText,
  Table,
  THead,
  Tr,
  Th,
  Form
} from "bobrilstrap";
import { observable } from "bobx";
import { data } from "../data/data";
import { ResultRow } from "./resultRow";

export class Search extends b.Component<b.IRouteHandlerData> {
  static id: string = "search-page";

  @observable
  private _search: string = "";

  render(): b.IBobrilNode {
    const normalizedSearch = this.normalize(this._search);
    return (
      <>
        <Row>
          <Col size={Size.Md} span={12}>
            <Form>
              <InputGroup>
                <InputGroupAddon>{t("Potravina")}</InputGroupAddon>
                <InputText
                  value={this._search}
                  onChange={value => (this._search = value)}
                />
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col size={Size.Md} span={12}>
            {normalizedSearch.length ? (
              <Table>
                <THead>
                  <Tr>
                    <Th>{t("Potravina")}</Th>
                    <Th>{t("pH")}</Th>
                  </Tr>
                  {data.items
                    .filter(
                      item =>
                        this.normalize(item.name).indexOf(normalizedSearch) >= 0
                    )
                    .map(item => (
                      <ResultRow {...item} />
                    ))}
                </THead>
              </Table>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </>
    );
  }

  private normalize(str: string): string {
    return str
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
}
