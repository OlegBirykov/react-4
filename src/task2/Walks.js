import { useState } from 'react';
import './Walks.css';
import WalkAddForm from './components/WalkAddForm';
import WalkList from './components/WalkList';
import WalkModel from './models/WalkModel';

function Walks() {
  const [walks, setWalks] = useState([new WalkModel(null, 0, 0), new WalkModel(null, 123, 123132), new WalkModel(null, 123, 12312),]);
  const [form, setForm] = useState(new WalkModel(null, 0, 0));

  const addWalk = ({ id, date, distance }) => {
    setForm(new WalkModel(id, date, distance));
    setWalks((prev) => prev);
  }

  return (
    <div className="Walks">
      <WalkAddForm form={form} onSubmit={addWalk} />
      <WalkList walks={walks} />
    </div>
  );
}

export default Walks;
