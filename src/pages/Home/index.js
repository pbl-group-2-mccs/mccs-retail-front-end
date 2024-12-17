import BarChart from "@/components/BarChart"
import PieChart from "@/components/PieChart"
import USAMap from "@/components/USAMap"
import { useEffect, useState } from 'react'
import { getUSAMapAPI } from '@/apis/visualization'

const Home = () => {
    const [ list, setList] = useState([])
    useEffect(() => {
        async function getList() {
            const res = await getUSAMapAPI()
            console.log(res)
            setList(res)
            console.log('After:', list)
        }
        getList()
    }, [])

    const mapData = list.map((item) => ({
        name: item.region,
        value: item.totalSales
    }));
    // const [ usaMap, setMap] = useState([])
    //
    // useEffect(() => {
    //     async function getMap() {
    //         const res = await getUSAMapAPI()
    //         // console.log(res)
    //         console.log(res)
    //         console.log(res.length)
    //         console.log(res[0])
    //         // setMap(res)
    //         console.log(usaMap)
    //     }
    //     getMap()
    // }, [])
    //
    // useEffect(() => {
    //     console.log(usaMap)
    // }, [usaMap]); // 依赖 usaMap
    //
    // const mapData = usaMap.map((item) => ({
    //     name: item.region,
    //     value: item.totalSales
    // }));

    return <div>
        <BarChart title={'Product Stock Risk Status'}
                  seriesData={[20, 40, 70]}
                  xdata={['Laptop', 'Tablet', 'Smartwatch', ]}/>
        <PieChart title={'Product Value Classification'}
                  data={[
                    { value: 1048, name: 'Home & Garden' },
                    { value: 735, name: 'Clothing' },
                    { value: 580, name: 'Toys' },
                    { value: 484, name: 'Electronics' }
                  ]}/>
        <USAMap data={mapData}/>
    </div>
}

export default Home