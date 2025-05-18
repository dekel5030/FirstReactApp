import { useState } from "react";
import Folder from "../Folder/Folder";
import FolderItem from "../FolderItem/FolderItem";
import Form from "../Form/Form";
import styles from "./EducationSection.module.css";

export default function EducationSection({ educationData, setPerson }) {
  const [editMode, setEditMode] = useState({
    active: false,
    educationId: null,
    beforeEdit: null,
  });

  function handleItemClick(id) {
    const selected = educationData.find((education) => education.id === id);
    setEditMode({ active: true, educationId: id, beforeEdit: selected });
  }

  function onButtonClick() {
    closeForm();
  }

  function closeForm() {
    setEditMode({ active: false, educationId: null });
  }

  function handleFieldChange(field, value) {
    setPerson((prevPerson) => ({
      ...prevPerson,
      educations: prevPerson.educations.map((edu) =>
        edu.id === editMode.educationId ? { ...edu, [field]: value } : edu
      ),
    }));
  }

  function handleDeleteClick(id) {
    setPerson((prevPerson) => ({
      ...prevPerson,
      educations: prevPerson.educations.filter(
        (education) => education.id !== id
      ),
    }));

    closeForm();
  }

  function handleCancelClick() {
    const beforeEducation = editMode.beforeEdit;

    if (beforeEducation) {
      setPerson((prevPerson) => ({
        ...prevPerson,
        educations: prevPerson.educations.map((edu) =>
          edu.id === beforeEducation.id ? beforeEducation : edu
        ),
      }));
    }
    closeForm();
  }

  function handleAddButtonClick() {
    const newId = Date.now();
    const newEducation = {
      id: newId,
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    };

    setPerson((prevPerson) => ({
      ...prevPerson,
      educations: [...prevPerson.educations, newEducation],
    }));

    handleItemClick(newId);
  }

  const selectedEducation = educationData.find(
    (education) => education.id === editMode.educationId
  );

  return (
    <Folder title={"Education"} className="folder">
      {!editMode.active &&
        educationData.map((education) => (
          <FolderItem
            className="folder-item"
            key={education.id}
            title={education.school}
            onClick={() => handleItemClick(education.id)}
          ></FolderItem>
        ))}

      {!editMode.active && (
        <div className="add-education-button folder-item">
          <button onClick={handleAddButtonClick}>+ Education</button>
        </div>
      )}

      {editMode.active && (
        <div className="form-container">
          <Form
            title={"Education"}
            fields={[
              {
                fieldName: "school",
                fieldTitle: "School",
                fieldValue: selectedEducation?.school || "",
                fieldOnChange: (value) => handleFieldChange("school", value),
              },
              {
                fieldName: "degree",
                fieldTitle: "Degree",
                fieldValue: selectedEducation?.degree || "",
                fieldOnChange: (value) => handleFieldChange("degree", value),
              },
              {
                fieldName: "startDate",
                fieldTitle: "Start Date",
                fieldValue: selectedEducation?.startDate || "",
                fieldOnChange: (value) => handleFieldChange("startDate", value),
              },
              {
                fieldName: "endDate",
                fieldTitle: "End Date",
                fieldValue: selectedEducation?.endDate || "",
                fieldOnChange: (value) => handleFieldChange("endDate", value),
              },
              {
                fieldName: "location",
                fieldTitle: "Location",
                fieldValue: selectedEducation?.location || "",
                fieldOnChange: (value) => handleFieldChange("location", value),
              },
            ]}
          />
          <div className={`${styles["form-buttons"]} folder-item`}>
            <div className={`${styles["left"]}`}>
              <button
                className={styles["form-button"]}
                onClick={() => handleDeleteClick(selectedEducation.id)}
              >
                Delete
              </button>
            </div>
            <div className={`${styles["right"]}`}>
              <button
                className={`${styles["form-button"]}`}
                onClick={handleCancelClick}
              >
                Cancel
              </button>
              <button className={styles["form-button"]} onClick={onButtonClick}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </Folder>
  );
}
