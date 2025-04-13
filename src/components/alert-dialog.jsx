import React from "react";

import * as RadixVisuallyHidden from "@radix-ui/react-visually-hidden";
import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import clsx from "clsx";
import "./alert-dialog.scss";

export default function AlertDialog(props) {
  const { content, children, className, ...rest } = props;

  const Element = props.as || RadixAlertDialog.Root;

  return (
    <Element {...rest} className={clsx("alertDialog_7_66", className)}>
      <RadixAlertDialog.Trigger className="" asChild={true}>
        {React.Children.only(children)}
      </RadixAlertDialog.Trigger>

      <RadixAlertDialog.Portal className="alertDialogPortal_7_36">
        <RadixAlertDialog.Overlay className="alertDialogOverlay_7_37"></RadixAlertDialog.Overlay>

        <RadixAlertDialog.Content className="alertDialogContent_7_38">
          <RadixVisuallyHidden.Root>
            <RadixAlertDialog.Title className="alertDialogTitle_7_39" />
          </RadixVisuallyHidden.Root>

          {React.Children.only(content)}
        </RadixAlertDialog.Content>
      </RadixAlertDialog.Portal>
    </Element>
  );
}
