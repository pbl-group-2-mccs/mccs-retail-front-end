import BarChart from "@/components/BarChart"
import PieChart from "@/components/PieChart"
import USAMap from "@/components/USAMap"

const Home = () => {
    return <div>
        <BarChart title={'test chart'} 
                  seriesData={[20, 40, 70]}
                  xdata={['React', 'Vue', 'Angular']}/>
        <PieChart title={'pie chart'}
                  data={[
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                  ]}/>
        <USAMap></USAMap>
    </div>
}

export default Home