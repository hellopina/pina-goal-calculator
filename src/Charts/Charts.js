export class Template { }

export function html(series, chartOptions,type='bar') {
    console.log(type)
    
    const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Basic Bar Chart</title>

            

            <style>
            
                #chart {
            max-width: 650px;
            margin: 35px auto;
            }
            
            </style>


            
             <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
            

            

            
        </head>

        <body>
            <h2>CHART</h2>
           <div id="chart"></div>


            <script>

            
            var options = {
                series: ${JSON.stringify(series)},
                chart: {
                    type: '${type}',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                        'United States', 'China', 'Germany'
                    ],
                }
            };

            var chart = new ApexCharts(document.getElementById("chart"), options);
            chart.render();

           
            </script>
            
        </body>
        </html>`
    // console.log(html)
    return html;
}