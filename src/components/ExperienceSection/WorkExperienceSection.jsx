import { useState } from "react";
import Folder from "../Folder/Folder";
import FolderItem from "../FolderItem/FolderItem";
import Form from "../Form/Form";
import styles from "./WorkExperienceSection.module.css";

export default function WorkExperienceSection({ experienceData, setPerson }) {
  const [editMode, setEditMode] = useState({
    active: false,
    experienceId: null,
    beforeEdit: null,
  });

  function handleItemClick(id) {
    const selected = experienceData.find((exp) => exp.id === id);
    setEditMode({ active: true, experienceId: id, beforeEdit: selected });
  }

  function closeForm() {
    setEditMode({ active: false, experienceId: null });
  }

  function handleFieldChange(field, value) {
    setPerson((prevPerson) => ({
      ...prevPerson,
      experiences: prevPerson.experiences.map((exp) =>
        exp.id === editMode.experienceId ? { ...exp, [field]: value } : exp
      ),
    }));
  }

  function handleDeleteClick(id) {
    setPerson((prevPerson) => ({
      ...prevPerson,
      experiences: prevPerson.experiences.filter((exp) => exp.id !== id),
    }));

    closeForm();
  }

  function handleCancelClick() {
    const beforeExperience = editMode.beforeEdit;

    if (beforeExperience) {
      setPerson((prevPerson) => ({
        ...prevPerson,
        experiences: prevPerson.experiences.map((exp) =>
          exp.id === beforeExperience.id ? beforeExperience : exp
        ),
      }));
    }
    closeForm();
  }

  function handleAddButtonClick() {
    const newId = Date.now();
    const newExperience = {
      id: newId,
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    };

    setPerson((prevPerson) => ({
      ...prevPerson,
      experiences: [...prevPerson.experiences, newExperience],
    }));

    handleItemClick(newId);
  }

  const selectedExperience = experienceData.find(
    (exp) => exp.id === editMode.experienceId
  );

  return (
    <Folder title={"Experience"} className="folder">
      {!editMode.active &&
        experienceData.map((exp) => (
          <FolderItem
            className="folder-item"
            key={exp.id}
            title={exp.companyName}
            onClick={() => handleItemClick(exp.id)}
          />
        ))}

      {!editMode.active && (
        <div className="add-experience-button folder-item">
          <button onClick={handleAddButtonClick}>+ Experience</button>
        </div>
      )}

      {editMode.active && (
        <div className="form-container">
          <Form
            title={"Experience"}
            fields={[
              {
                fieldName: "companyName",
                fieldTitle: "Company Name",
                fieldValue: selectedExperience?.companyName || "",
                fieldOnChange: (value) =>
                  handleFieldChange("companyName", value),
              },
              {
                fieldName: "positionTitle",
                fieldTitle: "Position Title",
                fieldValue: selectedExperience?.positionTitle || "",
                fieldOnChange: (value) =>
                  handleFieldChange("positionTitle", value),
              },
              {
                fieldName: "startDate",
                fieldTitle: "Start Date",
                fieldValue: selectedExperience?.startDate || "",
                fieldOnChange: (value) => handleFieldChange("startDate", value),
              },
              {
                fieldName: "endDate",
                fieldTitle: "End Date",
                fieldValue: selectedExperience?.endDate || "",
                fieldOnChange: (value) => handleFieldChange("endDate", value),
              },
              {
                fieldName: "location",
                fieldTitle: "Location",
                fieldValue: selectedExperience?.location || "",
                fieldOnChange: (value) => handleFieldChange("location", value),
              },
              {
                fieldName: "description",
                fieldTitle: "Description",
                fieldValue: selectedExperience?.description || "",
                fieldOnChange: (value) =>
                  handleFieldChange("description", value),
              },
            ]}
          />
          <div className={`${styles["form-buttons"]} folder-item`}>
            <div className={styles["left"]}>
              <button
                className={styles["form-button"]}
                onClick={() => handleDeleteClick(selectedExperience.id)}
              >
                Delete
              </button>
            </div>
            <div className={styles["right"]}>
              <button
                className={styles["form-button"]}
                onClick={handleCancelClick}
              >
                Cancel
              </button>
              <button className={styles["form-button"]} onClick={closeForm}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </Folder>
  );
}
