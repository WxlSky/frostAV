function updateStats() {
    let cpuCelsiusText = document.getElementById("cpuCelsiusText")
    handleUrlResponse("/cpuCelsius", (responseText) => {
        cpuCelsiusText.innerHTML = `${parseFloat(responseText)}&degC CPU` 
    })

    let gpuCelsiusText = document.getElementById("gpuCelsiusText")    
    handleUrlResponse("/gpuCelsius", (responseText) => {
        gpuCelsiusText.innerHTML = `${parseFloat(responseText)}&degC GPU` 
    })

    urlResponseToChartSeries("/cpuLoad", chartL.series[0])
    urlResponseToChartSeries("/memoryUsed", chartM.series[1])
    urlResponseToChartSeries("/memoryFree", chartM.series[0])
    urlResponseToChartSeries("/power", chartT.series[0])
    urlResponseToChartSeries("/voltage", chartH.series[0])
    urlResponseToChartSeries("/current", chartP.series[0])    
}

updateStats()
setInterval(updateStats, 5000)
