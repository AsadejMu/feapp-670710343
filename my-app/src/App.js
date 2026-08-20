import ProfileCard from './componence/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'อภิชาติ งามรุ่งกิจ', nickname: 'แว่น',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['นอน', 'นอน'] },
  { id: 2, name: 'สมคิด คิดเยอะ', nickname: 'ต้น',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['กาแฟ', 'นอน'] },
  { id: 3, name: 'สมปอง ร้าย', nickname: 'ปิง',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['น้ำเปล่า', 'หมา'] },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;