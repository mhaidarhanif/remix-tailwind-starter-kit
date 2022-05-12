import { Footer, NavigationBar } from "~/components";

import type { HTMLElementProps } from "~/types";

export const LayoutCommon = ({ children }: HTMLElementProps) => {
  return (
    <div className="layout">
      <NavigationBar />

      <div className="layout-container">
        <div className="layout-center">
          <main className="layout-main">{children}</main>
        </div>
      </div>

      <Footer />
    </div>
  );
};
