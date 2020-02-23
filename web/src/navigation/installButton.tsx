import * as b from "bobril";
import pwaInstallHandler from "pwa-install-handler";
import { A, NavbarNavItem } from "bobrilstrap";
import { observable } from "bobx";
import { t } from "bobril-g11n";

export class InstallButton extends b.Component<{ onClick: () => void }> {
  static id: string = "install-button";
  @observable
  private canInstall: boolean = false;
  init(): void {
    pwaInstallHandler.addListener(canInstall => (this.canInstall = canInstall));
  }
  render(): b.IBobrilNode {
    return this.canInstall ? (
      <NavbarNavItem>
        <A id="installButton" href="javascript:void(0)">
          {t("Přidat na plochu")}
        </A>
      </NavbarNavItem>
    ) : (
      <></>
    );
  }
  onClick(): boolean {
    pwaInstallHandler.install().then(isInstalled => {
      console.log(
        isInstalled
          ? "User accepted installation prompt"
          : "User rejected installation prompt"
      );
    });
    this.data.onClick();
    return true;
  }
}
