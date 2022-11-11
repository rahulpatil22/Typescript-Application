 export interface IEmployee{
    id:string;
    firstName:string;
    lastName :string;
    address:any;
    designation:string;
 }

  export const EmployeeList : IEmployee[] =[{                //uses array of object
    id:new Date().toJSON().toString(),
    firstName:"Rahul",
    lastName:"Patil",
    address:"Surat",
    designation:"Sofware Engineer"
 }]