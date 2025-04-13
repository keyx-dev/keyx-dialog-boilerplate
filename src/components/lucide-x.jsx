import clsx from "clsx";
import "./lucide-x.scss";

export default function LucideX(props) {
  const { className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element {...rest} className={clsx("lucideX_1_78", className)}>
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="vector_1_77"
      >
        <path
          d="M8 0L0 8M0 0L8 8"
          stroke="black"
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Element>
  );
}
