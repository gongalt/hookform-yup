
import * as _ from 'lodash';
import { useState } from 'react';
import { timeOptions } from 'contants';


export default function TimeOccurrence({ register, index, handleTimesList, timesList }: any) {
    const [startTimeOptions, SetStartTimeOptions] = useState([...timeOptions]);
    const [endTimeOptions, SetEndTimeOptions] = useState([...timeOptions]);
 

    const check = ({selectedIndex}: any) => {
        const overlappedTime = _.find(timesList, ({ start, end }, timesListIndex) => selectedIndex >= start && selectedIndex <= end && timesListIndex !== index)
        return Boolean(overlappedTime)
    }

    const handleSetStartTime = (e: any) => {
        console.log('timesList', timesList);
        const selectedItem = e.target.value;
        const selectedIndex = _.findIndex(timeOptions, (o) => o.value === selectedItem) + 1;
        const newEndTimeOptions = timeOptions.reduce((prev: any, next, index) => {
            prev[index] = index < selectedIndex ? { ...next, isDisabled: true, hasOverlap: check({selectedIndex}) } : {...next} 
            return prev;
       }, []);
       
       SetEndTimeOptions(newEndTimeOptions);

       const newTimesList = [...timesList]

        newTimesList[index] = {
            end: selectedIndex,
            ...newTimesList[index],
            start: selectedIndex,
        }

        handleTimesList(newTimesList);
    }

    
    const handleSetEndTime = (e: any) => {
        const selectedItem = e.target.value;
        const selectedIndex = _.findIndex(timeOptions, (o) => o.value === selectedItem) + 1;
        const newEndTimeOptions = timeOptions.reduce((prev: any, next, index) => {
            prev[index] = index < selectedIndex ? { ...next, hasOverlap: check({selectedIndex}) } : {...next} 
            return prev;
       }, []);
        const newTimesList = [...timesList]
        SetEndTimeOptions(newEndTimeOptions);


        newTimesList[index] = {
            start: selectedIndex,
            ...newTimesList[index],
            end: selectedIndex,
        }

        handleTimesList(newTimesList);
    }

    return (
      <div className='row'>
        <div className='column'>
                <label>Start Time:</label>
                <select {...register("startTime")} className={`highlight`} onChange={handleSetStartTime}>
                    <option value="">Select Time</option>
                    {startTimeOptions.map((o) => {
                        return <option key={o.value} value={o.value}>{o.label}</option>
                    })}
                </select>
        </div>
        <div className='column'>
                <label>End Time:</label>
                <select {...register("endTime")} className={`highlight`} onChange={handleSetEndTime}>
                    <option value="">Select Time</option>
                    {endTimeOptions.map((o) => {
                        return <option key={o.value} disabled={o.isDisabled} value={o.value}>{o.label}</option>
                    })}
                </select>
        </div>
    </div>
    );
}