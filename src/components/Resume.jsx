import "../styles/resume.css";

export default function Resume({
  fullName,
  email,
  phone,
  location,
  educations,
}) {
  return (
    <>
      <header className="personal-info">
        <h1>{fullName}</h1>
        <div className="contact-details">
          <div className="email">
            <img src="" alt="" />
            {email}
          </div>
          <div className="phone">
            <img src="" alt="" />
            {phone}
          </div>
          <div className="location">
            <img src="" alt="" />
            {location}
          </div>
        </div>
      </header>

      <main>
        <section className="educations">
          <h2>Education</h2>
          {educations.map((education) => (
            <div className="education" key={education.id}>
              <div className="education-date">
                {education.startDate} - {education.endDate},{" "}
                {education.location}
              </div>
              <div className="education-info">
                {education.school}, {education.degree}
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
