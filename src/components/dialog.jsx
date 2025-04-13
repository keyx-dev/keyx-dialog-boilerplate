import React from "react";

import clsx from "clsx";
import DialogCloseButton from "@/components/dialog-close-button";
import * as RadixDialog from "@radix-ui/react-dialog";
import * as RadixVisuallyHidden from "@radix-ui/react-visually-hidden";
import "./dialog.scss";

export default function Dialog(props) {
  const { children, content, className, ...rest } = props;

  const Element = props.as || RadixDialog.Root;

  return (
    <Element {...rest} className={clsx("dialog_1_38", className)}>
      <RadixDialog.Trigger className="" asChild={true}>
        {React.Children.only(children)}
      </RadixDialog.Trigger>

      <RadixDialog.Portal className="dialogPortal_1_41">
        <RadixDialog.Overlay className="dialogOverlay_1_42"></RadixDialog.Overlay>

        <RadixDialog.Content className="dialogContent_1_43">
          <RadixVisuallyHidden.Root>
            <RadixDialog.Title className="dialogTitle_1_44" />
          </RadixVisuallyHidden.Root>

          {React.Children.only(content)}

          <RadixDialog.Close asChild={true}>
            <DialogCloseButton
              hover={false}
              className="dialogCloseButton_1_88"
            />
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </Element>
  );
}
