import styles from "./Resume.module.css";

export default function Resume({
  fullName,
  email,
  phone,
  location,
  educations,
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
              <div className={styles.educationDate}>
                {education.startDate} - {education.endDate},{" "}
                {education.location}
              </div>
              <div className={styles.educationInfo}>
                {education.school}, {education.degree}
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
