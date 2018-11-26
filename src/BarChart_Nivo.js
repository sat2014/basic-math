import React from 'react';
import { ResponsiveBar } from '@nivo/bar'

// let data = [
//     { 
//       "name": "Total",
//       "Count": 2,
//       "CountColor": "hsl(260, 70%, 50%)",
//       "Add": 4 ,
//       "AddColor": "hsl(57, 70%, 50%)",
//       "Subtract": 6  ,
//       "SubtractColor": "hsl(151, 70%, 50%)",
//       "Multiply": 8  ,
//       "MultiplyColor": "hsl(224, 70%, 50%)",
//       "Division": 10, 
//       "DivisionColor": "hsl(271, 70%, 50%)"
//     },
//     { 
//         "name": "Count",
//         "Count": 2,
//         "CountColor": "hsl(260, 70%, 50%)",        
//       },
//     { 
//         "name": "Add",        
//         "Add": 4 ,
//         "AddColor": "hsl(57, 70%, 50%)"        
//       },
//       { 
//         "name": "Subtract",
//         "Subtract": 6  ,
//         "SubtractColor": "hsl(151, 70%, 50%)",
//         },
//         { 
//             "name": "Multiply",
//             "Multiply": 8  ,
//             "MultiplyColor": "hsl(224, 70%, 50%)",
//           },
//           { 
//             "name": "Division",
//             "Division": 10, 
//             "DivisionColor": "hsl(271, 70%, 50%)"
//           },
//   ]


function BarChart_Nivo (data){
    return(
        <ResponsiveBar
        data={data}
        keys={[
            "Count",
            "Add",
            "Subtract",
            "Multiply",
            "Division"
        ]}
        indexBy="name"
        margin={{
            "top": 50,
            "right": 130,
            "bottom": 72,
            "left": 60
        }}
        padding={0.3}
        layout="horizontal"
        colors="nivo"
        colorBy="id"
        borderColor="inherit:darker(1.6)"
        axisBottom={{
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "Number of Questions",
            "legendPosition": "middle",
            "legendOffset": 42
        }}
        axisLeft={{
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "name",
            "legendPosition": "middle",
            "legendOffset": -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="inherit:darker(1.6)"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                "dataFrom": "keys",
                "anchor": "bottom-right",
                "direction": "column",
                "justify": false,
                "translateX": 120,
                "translateY": 0,
                "itemsSpacing": 2,
                "itemWidth": 100,
                "itemHeight": 20,
                "itemDirection": "left-to-right",
                "itemOpacity": 0.85,
                "symbolSize": 20,
                "effects": [
                    {
                        "on": "hover",
                        "style": {
                            "itemOpacity": 1
                        }
                    }
                ]
            }
        ]}
    />
    )
}
export default BarChart_Nivo;