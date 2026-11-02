import Layout from '../components/Layout';
import Divider from '../components/Divider';

const STUDENTS = [
  { name: 'Student 1', photo: '/student1.jpg' },
  { name: 'Student 2', photo: '/student2.jpg' },
  { name: 'Student 3', photo: '/student3.jpg' },
  { name: 'Student 4', photo: '/student4.jpg' },
  { name: 'Student 5', photo: '/student5.jpg' },
  { name: 'Student 6', photo: '/student6.jpg' },
  { name: 'Student 7', photo: '/student7.jpg' },
];

export default function Students() {
  return (
    <Layout title="ශිෂ්‍ය පරපුර">
      <span className="eyebrow">මේ වසරේ ගෞරව ලබන</span>
      <h2 className="title">වෙස් පැළඳීමට සුදුසුකම් ලබන ශිෂ්‍ය පරපුර</h2>
      <Divider />

      <div className="s-grid">
        {STUDENTS.map((student) => (
          <div className="s-card" key={student.photo}>
            <div className="photo student-photo">
              <img src={student.photo} alt={student.name} />
            </div>
            <h3>{student.name}</h3>
          </div>
        ))}
      </div>
    </Layout>
  );
}
