import { Doughnut } from 'react-chartjs-2'
import React from 'react'

const DoughnetGraph = ({ data }) => {
  return (
    <>
      <Doughnut
        data={{
          datasets: [
            {
              label: 'Global data of Covid',
              data: [
                data.confirmed.value,
                data.recovered.value,
                data.deaths.value,
              ],
              backgroundColor: [
                'rgb(228, 198, 27)',
                'rgb(169, 209, 22)',
                'rgb(207, 69, 26)',
              ],
            },
          ],

          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: ['Confirmed', 'Recovered', 'deaths'],
        }}
      />
    </>
  )
}

export default DoughnetGraph
