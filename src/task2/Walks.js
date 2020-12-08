import { useState } from 'react';
import './Walks.css';
import WalkAddForm from './components/WalkAddForm';
import WalkList from './components/WalkList';

function Walks() {
  const [walks, setWalks] = useState([]);
  const [form, setForm] = useState({ init: true, date: 0, distance: 0 });

  const onWalkAddFormSubmit = ({ init, date, distance }) => {
    setForm({ init, date, distance });
  }

  return (
    <div className="Walks">
      <WalkAddForm form={form} onSubmit={onWalkAddFormSubmit} />
      <WalkList walks={walks} />
    </div>
  );
}

export default Walks;
