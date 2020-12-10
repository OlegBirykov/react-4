import { useState } from 'react';
import './Walks.css';
import WalkAddForm from './components/WalkAddForm';
import WalkList from './components/WalkList';
import WalkModel from './models/WalkModel';

const initForm = new WalkModel(null, null, null);

function Walks() {
  const [walks, setWalks] = useState([]);
  const [form, setForm] = useState(initForm);

  const addWalk = ({ id, date, distance }) => {
    console.log(id, date, distance);
    setForm(new WalkModel(initForm));
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
