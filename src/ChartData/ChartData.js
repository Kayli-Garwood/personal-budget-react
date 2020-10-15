import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Doughnut} from 'react-chartjs-2';

function ChartData() {
    const [chartData, setChartState] = useState({})
       const myChart = () => {
        let budgetData = [];
        let budgetLabels = [];
        axios.get('http://localhost:5000/budget')
        .then(res =>{
            console.log(res);
            for(const dataObj of res.data.myBudget){
                budgetData.push(parseInt(dataObj.budget))
                budgetLabels.push(dataObj.title)
            }
            setChartState({
                labels: budgetLabels,
                datasets: [
                    {
                        data: budgetData,
                        backgroundColor: [
                            '#ff3333',
                            '#ff9f33',
                            '#fff833',
                            '#87ff33',
                            '#33fdff',
                            '#3354ff',
                            '#ac33ff',
                            '#fc33ff',
                            '#ff3386',
                            '#34ffad',
                            '#33bdff',
                  ]
                    }
                ]
            })
        })
        .catch(err =>{
            console.log(err);
        })
        console.log(budgetData, budgetLabels);

       
    }
    useEffect(()=>{
        myChart()
    }, [])
  return (
          <Doughnut data = {chartData}/>
      
  );
}

export default ChartData;