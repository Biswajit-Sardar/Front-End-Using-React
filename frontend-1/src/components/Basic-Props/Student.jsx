import './Student.css';

const Student = ({name,age,grade }) => {
    return (
    <div className="student-card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Grade: {grade}</p>
    </div>
    )
}
export default Student

