import clsx from "clsx";
import LucideX from "@/components/lucide-x";
import "./dialog-close-button.scss";

export default function DialogCloseButton(props) {
  const { hover, className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element
      {...rest}
      className={clsx("dialogCloseButton_1_83", `hover-${hover}`, className)}
    >
      <LucideX className="lucideX_1_80" />
    </Element>
  );
}
