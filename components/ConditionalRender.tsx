import React from "react";

interface ConditionalRenderProps {
  condition: boolean;
  children: any;
}

const ConditionalRender: React.FC<ConditionalRenderProps> = ({
  condition,
  children,
}) => {
  return condition ? children : null;
};

export default ConditionalRender;
