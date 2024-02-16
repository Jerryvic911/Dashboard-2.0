import { Chart as Chartjs } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import React from 'react'

function BarChart() {
  return (
    <div className="">

  
    <div className=" ml-5 ">
        <Bar 
        width={100}
        height={50}
        
           data={{
            labels: ["Math", "Chemistry", "English", "Physics", "Biology", "Geography", "Data Science"],
            datasets: [
                {
                    label: '2nd Term',
                    data: [200,300,500,100,200,250,400],
                },
                {
                    label: '1st Term',
                    data: [100,100,300,50,90,100,200],
                },
            ],
            

           }}

        />
    </div>
    </div>
  )
}

export default BarChart