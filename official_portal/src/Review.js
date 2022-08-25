import Bloglist from "./Cardfn";
import { useState } from 'react';
import "./review.css";
const Review = () => {
  const[blogs, setBlogs]=useState([
      { title: 'India’s Cumulative COVID-19 Vaccination Coverage exceeds 209.67 Cr', body: 'COVID-19 vaccination for the age group 12-14 years was started on 16 March, 2022. So far, more than 3.99 Cr (3,99,63,095) adolescents have been administered with the first dose of COVID-19 vaccine.Similarly, the COVID-19 precaution dose administration for age group 18-59 years also started from 10th April, 2022 onwards.', author: 'Ministry of health and Family Welfare', id: 1 },
      { title: 'Update on COVID-19 Vaccine Availability in States/UTs ', body: 'The Union Government is committed to accelerating the pace and expanding the scope of COVID-19 vaccination throughout the country. The nationwide COVID 19 vaccination started on 16th January 2021. The new phase of universalization of COVID-19 vaccination commenced from 21st June 2021. The vaccination drive has been', author: 'Ministry of health and Family Welfare', id: 2 },
      { title: 'COVID-19 UPDATE', body: 'As part of the nationwide vaccination drive, Government of India has been supporting the States and UTs by providing them COVID Vaccines free of cost. In the new phase of the universalization of the COVID19 vaccination drive, the Union Government will procure and supply (free of cost) 75% of the vaccines being produced by the vaccine manufacturers in the country to States and UTs.', author: 'Ministry of health and Family Welfare', id: 3 }
  ]);
  const handleDelete=(id)=>{
     const newBlogs = blogs.filter(blog => blog.id !== id);
     setBlogs(newBlogs); 
  }
  return (
    <div className="home" >
        <Bloglist blogs={blogs} title="Today's Releases" handleDelete={handleDelete}/>
      </div>
  );
}
 
export default Review;