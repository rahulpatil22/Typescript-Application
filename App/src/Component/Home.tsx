import './Home.style.css';
import {useState} from 'react';
import { EmployeeList, IEmployee } from './Employee.type';
import List  from './List';

const Home=()=>{

    const[employeeList,setEmployeeList]=useState(EmployeeList as IEmployee[]); //using useState  & type assertion
    return (
    <>
    <article className='article-header'>
    <header>
        <h1> Employee Data </h1>
    </header>
 </article>

    <section className="section-content">
        <div>Content</div>
        <List/>
    </section>
       </>
    )
}

export default Home;