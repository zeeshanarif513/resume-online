import React, { useState } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';

import { PersonalDetails } from './sections/PersonalDetails';
import { EducationSection } from './sections/Education';
import { DraggableSection } from '../../components/DraggableSection';
import { StrictModeDroppable } from '../../components/StrictModeDroppable';

interface Section {
  id: string;
  title: string;
  data?: any;
}

const Home = () => {
    const [sections, setSections] = useState<Section[]>([
        {
          id: 'personalDetails',
          title: 'Personal Details',
          data: {
            name: '',
            email: '',
            phone: '',
            linkedin: '',
            address: '',
          },
        },
        {
          id: 'education',
          title: 'Education',
          data: [],
        },
        // Add more sections as needed
      ]);
    
      const handleReorder = (startIndex: number, endIndex: number) => {
        const reorderedSections = Array.from(sections);
        const [movedSection] = reorderedSections.splice(startIndex, 1);
        reorderedSections.splice(endIndex, 0, movedSection);
        setSections(reorderedSections);
      };
    
      const handleSectionChange = (sectionIndex: number, field: string, value: string) => {
        const updatedSections = [...sections];
        updatedSections[sectionIndex].data = {
          ...updatedSections[sectionIndex].data,
          [field]: value,
        };
        setSections(updatedSections);
      };
    
      const onDragEnd = (result: DropResult) => {
        // dropped outside the list
        if(!result.destination) {
           return; 
        }
        
        handleReorder(result.source.index, result.destination.index);
      }

      const handleAddEducation = () => {
        const newEducation: EducationDetails = { degree: '', completionDate: '' };
        const updatedSections = [...sections];
        updatedSections[1].data = [
          ...updatedSections[1].data,
          newEducation
        ];
        setSections(updatedSections);
        // handleSectionChange(1, 'data', [...(sections[1].data as EducationDetails[]), newEducation]);
      };
    
      const handleEducationChange = (index: number, field: keyof EducationDetails, value: string) => {
        // const updatedEducation = [...(sections[1].data as EducationDetails[])];
        // updatedEducation[index][field] = value;
        // handleSectionChange(1, 'data', updatedEducation);
      };

      return (
        <DragDropContext onDragEnd={onDragEnd}>
            <StrictModeDroppable droppableId="droppable">
            {
              (provided, snapshot) => (
                  <div 
                      ref={provided.innerRef} 
                      {...provided.droppableProps}
                      >
                        {
                          sections.map((section, index) => (
                              <div key={section.id}>
                                {section.id === 'personalDetails' && section.data && (
                                    <DraggableSection key={section.id} index={index} section={section}>
                                    <PersonalDetails
                                        details={section.data}
                                        onChange={(field, value) => handleSectionChange(index, field, value)}
                                    />
                                    </DraggableSection>
                                )}
                                {section.id === 'education' && section.data !== undefined && (
                                <EducationSection
                                  education={section.data as EducationDetails[]}
                                  onAddEducation={handleAddEducation}
                                  onChange={handleEducationChange}
                                />
                              )}
                              {/* Add more components for other sections based on section.id */}
                              </div>
                          ))
                        }
                  </div>
              )
            }
            </StrictModeDroppable>
      </DragDropContext>
      )
}

export default React.memo(Home)