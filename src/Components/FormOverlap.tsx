import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const timeList = [
    "00:15",
    
    "00:15",
    "00:15",
    "00:15",
    "00:15",

]

// export const dailySchema = {
//     timesPerDay: yup.number().required("Times per day is required!"),
//     times: yup
//       .array()
//       .of(startEndTimeSchema)
//       .test({
//         name: "required",
//         message: "All occurrences should not be overlapped.",
//         test: val => {
//           const validateTime =
//             val && val.length > 1 ? validateTimeOccurnaces(val as any[]) : true;
//           return !!val && val.length > 0 && !!validateTime;
//         }
//       }),
// };

//   export function validateTimeOccurnaces(
//     timeList: { startTime: string; endTime: string }[]
//   ) {
//     for (let i = 0; i < timeList.length; i++) {
//       for (let j = 0; j < timeList.length; j++) {
//         if (i === j) continue;
//         const startTime1 = getDate(timeList[i].startTime);
//         const endTime1 = getDate(timeList[i].endTime);
//         const startTime2 = getDate(timeList[j].startTime);
//         const endTime2 = getDate(timeList[j].endTime);
//         const range1 = momentInterval.range(startTime1, endTime1);
//         const range2 = momentInterval.range(startTime2, endTime2);
//         if (range1.intersect(range2)) return false;
//       }
//     }
//     return true;
//   }  

interface IFormInputs {
    firstName: string
    age: number
  }
  
  const schema = yup.object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  }).required();
  
  export default function FormOverlap() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
      resolver: yupResolver(schema)
    });
    const onSubmit = (data: IFormInputs) => console.log(data);
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        
        
        <input type="submit" />
      </form>
    );
  }