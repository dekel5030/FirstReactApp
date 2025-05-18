import "./styles/app.css";
import Form from "./components/Form/Form";
import Resume from "./components/Resume/Resume";
import { useState } from "react";
import Folder from "./components/Folder/Folder";
import FolderItem from "./components/FolderItem/FolderItem";
import EducationSection from "./components/EducationSection/EducationSection";
import WorkExperienceSection from "./components/ExperienceSection/WorkExperienceSection";

const educationData = [
  {
    id: 1,
    startDate: "2019",
    endDate: "2022",
    school: "HIT - Holon Institute of Technology",
    degree: "B.Sc. Computer Science",
    location: "Holon, Israel",
  },
  {
    id: 2,
    startDate: "2023",
    endDate: "2024",
    school: "Online Programs",
    degree: "Full-Stack JavaScript Bootcamp (The Odin Project)",
    location: "Remote",
  },
];

const experienceData = [
  {
    id: 1,
    companyName: "Freelance Projects",
    positionTitle: "Full-Stack Developer",
    startDate: "2023",
    endDate: "Present",
    location: "Remote",
    description:
      "Built interactive full-stack web applications using React, Node.js, Express, and MongoDB. Designed responsive UIs with HTML, CSS, and Tailwind. Implemented authentication, dynamic routing, and CI/CD pipelines.",
  },
  {
    id: 2,
    companyName: "HIT DevOps Course Project",
    positionTitle: "DevOps Engineer (Student Project)",
    startDate: "2024",
    endDate: "2024",
    location: "Holon, Israel",
    description:
      "Developed and deployed a JSP web app with CI/CD pipeline using Jenkins and GitHub. Integrated Tomcat server, automated UI testing with Selenium, performance testing with Gatling, and used UptimeRobot for live monitoring.",
  },
  {
    id: 3,
    companyName: "Personal Projects",
    positionTitle: "Frontend Developer",
    startDate: "2023",
    endDate: "Present",
    location: "Tel Aviv, Israel",
    description:
      "Built and deployed React apps featuring carousel UI, dropdown navigation, resume editor with editable sections, and integrated RESTful APIs for data handling.",
  },
];

export default function App() {
  const [person, setPerson] = useState({
    id: 1,
    fullName: "Dekel Rafian",
    email: "dekel5030@gmail.com",
    phone: "+972 535278827",
    location: "Holon, IL",
    educations: educationData,
    experiences: experienceData,
  });

  function handleFieldChange(field, value) {
    setPerson({ ...person, [field]: value });
  }

  return (
    <div className="app" key={person.id}>
      <aside className="editPanel">
        <div className="personal-details">
          <h1>Personal Details</h1>
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
        </div>
        <EducationSection
          educationData={person.educations}
          setPerson={setPerson}
        ></EducationSection>

        <WorkExperienceSection
          experienceData={person.experiences}
          setPerson={setPerson}
        />
      </aside>
      <main className="resume-panel">
        <Resume {...person} />
      </main>
    </div>
  );
}
