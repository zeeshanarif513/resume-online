import React from "react";
import { Droppable, DroppableProps } from "react-beautiful-dnd";

import { useDroppable } from "./hooks/use_droppable";

const StrictModeDroppable = ({ children, ...props }: DroppableProps) => {
  const { enabled } = useDroppable()
  
  if (!enabled) {
    return null;
  }
  return <Droppable {...props}>{children}</Droppable>;
};

export default StrictModeDroppable;