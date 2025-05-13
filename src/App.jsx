import "./styles/app.css";
import Form from "./components/Form";
import Resume from "./components/Resume";
import { useState } from "react";
import Folder from "./components/Folder";

const educationData = [
  {
    id: 1,
    startDate: "2018",
    endDate: "2022",
    school: "University of Example",
    degree: "B.Sc. Computer Science",
    location: "Israel",
  },
  {
    id: 2,
    startDate: "2023",
    endDate: "2025",
    school: "Example Tech Institute",
    degree: "M.Sc. Software Engineering",
    location: "Israel",
  },
];

export default function App() {
  const [person, setPerson] = useState({
    id: 1,
    fullName: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
    location: "New York, NY",
    educations: educationData,
  });

  function handleFieldChange(field, value) {
    setPerson((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  return (
    <div className="app" key={person.id}>
      <aside className="editPanel">
        <Form
          title={"Personal Details"}
          fields={[
            {
              fieldName: "fullName",
              fieldTitle: "Full name",
              fieldValue: person.fullName,
              fieldOnChange: (value) => handleFieldChange("fullName", value),
            },
            {
              fieldName: "email",
              fieldTitle: "Email",
              fieldValue: person.email,
              fieldOnChange: (value) => handleFieldChange("email", value),
            },
            {
              fieldName: "phoneNumber",
              fieldTitle: "Phone number",
              fieldValue: person.phone,
              fieldOnChange: (value) => handleFieldChange("phone", value),
            },
            {
              fieldName: "address",
              fieldTitle: "Address",
              fieldValue: person.location,
              fieldOnChange: (value) => handleFieldChange("location", value),
            },
          ]}
        />
        <Folder title={"Education"}>
          {person.educations.map((education) => (
            <div className="education-item" key={education.id}>
              {education.school}
            </div>
          ))}
        </Folder>
        <Form
          title={"Education"}
          fields={[
            { fieldName: "school", fieldTitle: "School" },
            { fieldName: "degree", fieldTitle: "Degree" },
            { fieldName: "startDate", fieldTitle: "Start Date" },
            { fieldName: "endDate", fieldTitle: "End Date" },
            { fieldName: "location", fieldTitle: "Location" },
          ]}
        />
        <Form
          title={"Experience"}
          fields={[
            { fieldName: "companyName", fieldTitle: "Company Name" },
            { fieldName: "positionTitle", fieldTitle: "Position Title" },
            { fieldName: "startDate", fieldTitle: "Start Date" },
            { fieldName: "endDate", fieldTitle: "End Date" },
            { fieldName: "location", fieldTitle: "Location" },
            { fieldName: "description", fieldTitle: "Description" },
          ]}
        />
      </aside>
      <main className="resume">
        <Resume {...person} />
      </main>
    </div>
  );
}
