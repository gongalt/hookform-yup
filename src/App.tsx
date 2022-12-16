import DailyOccurence from "./Components/DailyOccurence";
import TimeOccurrence from "./Components/TimeOccurrence";

import './App.css';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IFormInputs {
  timesPerDay: string;
}

const schema = yup.object().shape({
  timesPerDay: yup.number().required("Times per day is required!"),
});

function App() {
  const [timesPerDay, setTimesPerDay] = useState(0); 
  const [times, setTimes] = useState([]);

  const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  

  const submitForm = (data: any) => {
    console.log('errors', errors);
    console.log('data', data);
  };

  const handleSetTimesList = (data: any) => {
    setTimes(data);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(submitForm)}>
        <DailyOccurence register={register} setTimesPerDay={setTimesPerDay} />
        {Array.from({length: timesPerDay}).map((o, i) => {
          return <TimeOccurrence register={register} key={i} index={i} timesList={times} handleTimesList={handleSetTimesList}/>
        })}
        <input type="submit" id="submit" />
      </form>
    </div>
  );
}

export default App;
