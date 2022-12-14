export default function DailyOccurence({ register, setTimesPerDay }: any) {

    const handleSelect = (e: any) => {
        console.log('e.target.value', e.target.value);
        setTimesPerDay(e.target.value);
    }

    return (
        <div className='row'>
        <div className='column'>
          <label>Daily Occurence:</label>
          <select {...register("timesPerDay")} onChange={handleSelect}>
            <option value="">Select Daily Occurence</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
          </select>
        </div>
      </div>
    )
}