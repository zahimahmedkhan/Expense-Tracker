    import React, { useEffect, useState } from 'react'
    import CustomePieChart from '../Charts/CustomePieChart';

    const COLORS = ["#155e75", "#0891b2", "#06b6d4", "#67e8f9"];

    const RecentIncomeWithChart = ({data, totalIncome}) => {

        const [chartData, setChartData] = useState([]);

        const prepareChartData = () =>{
            const dataArr = data?.map((items)=>({
                name : items?.source,
                amount : items?.amount
            }));
            setChartData(dataArr);
        }

        useEffect(()=>{
            prepareChartData();

            return () => {}

        },[data])
    return (
        <div className='card'>
            <div className='flex item-center justify-between'>
                <h5 className='text-lg'>Last 60 Days Income</h5>
            </div>

            <CustomePieChart
                data={chartData}
                label="Total Income"
                totalAmount={`$${totalIncome}`}
                showTextAnchor
                colors={COLORS}
            />
        </div>
    )
    }

    export default RecentIncomeWithChart