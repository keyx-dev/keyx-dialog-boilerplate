import clsx from "clsx";
import "./slot.scss";

export default function Slot(props) {
  const { slotIdentifier = "children", className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element {...rest} className={clsx("slot_1_35", className)}>
      <div className="frame58_1_36">
        {slotIdentifier && (
          <div className="children_1_37">{slotIdentifier}</div>
        )}
      </div>
    </Element>
  );
}
