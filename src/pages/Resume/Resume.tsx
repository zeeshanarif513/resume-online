import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import {
  PersonalDetails,
  EducationSection,
  WorkHistory,
  AchievementHistory,
} from "./sections";
import { DraggableSection } from "../../components/DraggableSection";
import { StrictModeDroppable } from "../../components/StrictModeDroppable";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import EducationIcon from "@mui/icons-material/CastForEducation";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { Education } from "../../types/pages/Home/Education";
import { Achievement } from "../../types/pages/Home/Achievements.dto";

import { Work } from "../../types/pages/Home/Work";
import { PersonalDetailsDto } from "../../types/pages/Home/PersonalDetails";

interface Section {
  id: string;
  title: string;
  data?: any;
}

const Resume = () => {
  const [isEditMode, setEditMode] = useState(false);
  const [sections, setSections] = useState<Section[]>([
    {
      id: "personalDetails",
      title: "Personal Details",
      data: null,
    },
    {
      id: "education",
      title: "Education",
      data: [],
    },
    {
      id: "work",
      title: "Work",
      data: [],
    },
    {
      id: "achievements",
      title: "Achievements",
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

  const onDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) return;
    handleReorder(result.source.index, result.destination.index);
  };

  const handleAddSection = (
    sectionId: string,
    item: Education | Work | Achievement | PersonalDetailsDto,
    action: "Add" | "Delete" = "Add"
  ) => {
    const tempSection = [...sections];
    const index: number = tempSection.findIndex(
      (section) => section.id === sectionId
    );
    if (action === "Add") {
      Array.isArray(tempSection[index].data)
        ? tempSection[index].data.push(item)
        : (tempSection[index].data = item);
    } else if (action === "Delete") {
      if (Array.isArray(tempSection[index].data)) {
        tempSection[index].data = tempSection[index].data.filter(
          (e: Education | Work | Achievement | PersonalDetailsDto) =>
            JSON.stringify(e) !== JSON.stringify(item)
        );
      } else {
        tempSection[index].data = null;
      }
    }
    setSections(tempSection);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StrictModeDroppable droppableId="droppable">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {sections.map((section, index) => (
              <div key={section.id}>
                {section.id === "personalDetails" && (
                  <DraggableSection
                    key={section.id}
                    index={index}
                    section={section}
                  >
                    <div>
                      {section.data && !isEditMode ? (
                        <div>
                          <Typography variant="body1">
                            <strong>Name:</strong> {section.data.name}
                          </Typography>
                          <Typography variant="body1">
                            <strong>Email:</strong> {section.data.email}
                          </Typography>
                          <Typography variant="body1">
                            <strong>LinkedIn:</strong> {section.data.linkedin}
                          </Typography>
                          <Typography variant="body1">
                            <strong>Address:</strong> {section.data.address}
                          </Typography>
                          <IconButton
                            onClick={() => setEditMode(true)}
                            color="primary"
                          >
                            <EditIcon />
                          </IconButton>
                        </div>
                      ) : (
                        <PersonalDetails
                          isEditMode={isEditMode}
                          personalInfo={section.data}
                          onSave={(personalDetail) => {
                            handleAddSection("personalDetails", personalDetail);
                            setEditMode(false);
                          }}
                        />
                      )}
                    </div>
                  </DraggableSection>
                )}
                {section.id === "education" && section.data !== undefined && (
                  <div>
                    {/* Render existing education histories */}
                    <DraggableSection
                      key={section.id}
                      index={index}
                      section={section}
                    >
                      <List
                        sx={{
                          width: "100%",
                          maxWidth: 360,
                          bgcolor: "background.paper",
                        }}
                      >
                        {sections
                          .find((section) => section.id === "education")
                          ?.data.map((edu: Education, index: number) => {
                            return (
                              <ListItem>
                                <ListItemAvatar>
                                  <Avatar>
                                    <EducationIcon />
                                  </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                  primary={edu.degree}
                                  secondary={edu.completionDate}
                                />
                                <IconButton
                                  onClick={() =>
                                    handleAddSection("education", edu, "Delete")
                                  }
                                  color="primary"
                                >
                                  <DeleteIcon />
                                </IconButton>
                              </ListItem>
                            );
                          })}
                      </List>
                      <EducationSection
                        onAddEducation={(education) =>
                          handleAddSection("education", education)
                        }
                      />
                    </DraggableSection>
                  </div>
                )}
                {section.id === "work" && section.data !== undefined && (
                  <div>
                    {/* Render existing work histories */}
                    <DraggableSection
                      key={section.id}
                      index={index}
                      section={section}
                    >
                      <List
                        sx={{
                          width: "100%",
                          maxWidth: 360,
                          bgcolor: "background.paper",
                        }}
                      ></List>
                      {sections
                        .find((section) => section.id === "work")
                        ?.data.map((work: Work, index: number) => {
                          return (
                            <List
                              sx={{
                                width: "100%",
                                maxWidth: 360,
                                bgcolor: "background.paper",
                              }}
                              aria-label="work"
                            >
                              <ListItem disablePadding>
                                <ListItemButton>
                                  <ListItemIcon>
                                    <WorkIcon />
                                  </ListItemIcon>
                                  <ListItemText primary={work.jobTitle} />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton>
                                  <ListItemText
                                    inset
                                    primary={work.companyName}
                                  />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton>
                                  <ListItemText
                                    inset
                                    primary={work.startDate}
                                  />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton>
                                  <ListItemText inset primary={work.endDate} />
                                </ListItemButton>
                              </ListItem>
                              <IconButton
                                onClick={() =>
                                  handleAddSection("work", work, "Delete")
                                }
                                color="primary"
                              >
                                <DeleteIcon />
                              </IconButton>
                            </List>
                          );
                        })}
                      <WorkHistory
                        onAddWork={(work) => handleAddSection("work", work)}
                      />
                    </DraggableSection>
                  </div>
                )}
                {section.id === "achievements" &&
                  section.data !== undefined && (
                    <div>
                      {/* Render existing work histories */}
                      <DraggableSection
                        key={section.id}
                        index={index}
                        section={section}
                      >
                        {sections
                          .find((section) => section.id === "achievements")
                          ?.data.map(
                            (achievement: Achievement, index: number) => {
                              return (
                                <List
                                  sx={{
                                    width: "100%",
                                    maxWidth: 360,
                                    bgcolor: "background.paper",
                                  }}
                                  aria-label="achievements"
                                >
                                  <ListItem disablePadding>
                                    <ListItemButton>
                                      <ListItemIcon>
                                        <StarIcon />
                                      </ListItemIcon>
                                      <ListItemText
                                        primary={achievement.title}
                                      />
                                    </ListItemButton>
                                  </ListItem>
                                  <ListItem disablePadding>
                                    <ListItemButton>
                                      <ListItemText
                                        inset
                                        primary={achievement.description}
                                      />
                                    </ListItemButton>
                                    <IconButton
                                      onClick={() =>
                                        handleAddSection(
                                          "achievements",
                                          achievement,
                                          "Delete"
                                        )
                                      }
                                      color="primary"
                                    >
                                      <DeleteIcon />
                                    </IconButton>
                                  </ListItem>
                                </List>
                              );
                            }
                          )}
                        <AchievementHistory
                          onAddAchievement={(achievement) =>
                            handleAddSection("achievements", achievement)
                          }
                        />
                      </DraggableSection>
                    </div>
                  )}
              </div>
            ))}
          </div>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  );
};

export default React.memo(Resume);
