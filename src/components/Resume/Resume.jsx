import styles from "./Resume.module.css";

export default function Resume({
  fullName,
  email,
  phone,
  location,
  educations,
  experiences,
  className = "",
}) {
  return (
    <>
      <header className={`${styles["persona-info"]} ${className}`}>
        <h1>{fullName}</h1>
        <div className={styles["contact-details"]}>
          <div className={styles.email}>
            <img src="" alt="" />
            {email}
          </div>
          <div className={styles.phone}>
            <img src="" alt="" />
            {phone}
          </div>
          <div className={styles.location}>
            <img src="" alt="" />
            {location}
          </div>
        </div>
      </header>

      <main>
        <section className={styles.educations}>
          <h2>Education</h2>
          {educations.map((education) => (
            <div className={styles.education} key={education.id}>
              <div className={styles["education-meta"]}>
                <div className={styles["education-date"]}>
                  {education.startDate} - {education.endDate}
                </div>
                <div className={styles["education-location"]}>
                  {education.location}
                </div>
              </div>
              <div className={styles["education-details"]}>
                <div className={styles["education-school"]}>
                  <b>{education.school}</b>
                </div>
                <div className={styles["education-degree"]}>
                  {education.degree}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.experiences}>
          <h2>Professional Experience</h2>
          {experiences.map((experience) => (
            <div className={styles.experience} key={experience.id}>
              <div className={styles["experience-meta"]}>
                <div className={styles["experience-date"]}>
                  {experience.startDate} - {experience.endDate}
                </div>
                <div className={styles["experience-location"]}>
                  {experience.location}
                </div>
              </div>
              <div className={styles["experience-details"]}>
                <div className={styles["experience-company"]}>
                  <b>{experience.companyName}</b>
                </div>
                <div className={styles["experience-positionTitle"]}>
                  {experience.positionTitle}
                </div>
                <div className={styles["experience-description"]}>
                  {experience.description}
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
