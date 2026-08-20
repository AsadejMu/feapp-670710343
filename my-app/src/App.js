import Header from "./componence/Header";
import Footer from "./componence/Footer";
import MovieList from "./componence/MovieList";
import Greeting from "./componence/Greeting";
import Card from "./componence/Card";

const students = [
  { id: 1, name: 'ฝน',   year: 3 },
  { id: 2, name: 'เต้ย', year: 2 },
  { id: 3, name: 'มายด์', year: 4 },
];

function App() {
  return (
    <div>
      <Header />
      <MovieList />
      <Card title="ประกาศ">
        <p>สัปดาห์หน้าเรียนเรื่อง <b>State & Forms</b></p>
        <p>อย่าลืม push การบ้านขึ้น GitHub!</p>
      </Card>
      <h1>รายชื่อนักศึกษา</h1>
      {students.map(student => (
        <Greeting key={student.id} name={student.name} year={student.year} />
      ))}
      <Footer />
    </div>
  );
}

export default App;