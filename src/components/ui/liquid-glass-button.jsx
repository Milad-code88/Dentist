import * as React from "react";
import "./liquid-glass-button.css";

const Slot = React.forwardRef(({ children, ...props }, ref) => {
  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      ...children.props,
      ref: ref
        ? (node) => {
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
            if (typeof children.ref === "function") children.ref(node);
            else if (children.ref) children.ref.current = node;
          }
        : children.ref,
      className: [props.className, children.props.className].filter(Boolean).join(" "),
    });
  }
  return children;
});
Slot.displayName = "Slot";

const LiquidButton = React.forwardRef(
  ({ className = "", variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={`liquid-glass-button liquid-glass-button--${variant} liquid-glass-button--${size} ${className}`}
        {...props}
      >
        <span className="liquid-glass-button__wrapper">
          <span className="liquid-glass-button__shine" aria-hidden="true" />
          <span className="liquid-glass-button__content">{children}</span>
        </span>
      </Comp>
    );
  }
);
LiquidButton.displayName = "LiquidButton";

export { LiquidButton };
