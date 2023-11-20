// DraggableSection.tsx
import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Draggable, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd';

import './styles.css';


const DraggableSection: React.FC<DraggableSectionProps> = ({ index, section, children }) => {
  
  const getItemStyle = (isDragging: boolean, draggableStyle: DraggingStyle | NotDraggingStyle | undefined) => ({
    marginBottom: '20px',
    ...draggableStyle,
  });

  return (
    <Draggable draggableId={section.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
        >
          <Paper className='container'>
            <Typography variant="h6">{section.title}</Typography>
            {children}
          </Paper>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableSection;
