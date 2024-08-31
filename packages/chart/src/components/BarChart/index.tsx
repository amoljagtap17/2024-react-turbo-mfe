import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface IBarChartProps {
  title: string;
  categories: string[];
  xAxisTitle: string;
  xAxisDescription: string;
  yAxisTitle: string;
  data: Highcharts.SeriesOptionsType[];
}

export function BarChart({
  title,
  categories,
  xAxisTitle,
  xAxisDescription,
  yAxisTitle,
  data,
}: IBarChartProps) {
  const chartOptions: Highcharts.Options = {
    chart: {
      type: "bar",
    },
    title: {
      text: title,
    },
    xAxis: {
      categories,
      accessibility: {
        description: xAxisDescription,
      },
      title: {
        text: xAxisTitle,
      },
      gridLineWidth: 1,
      lineWidth: 0,
    },
    yAxis: {
      min: 0,
      title: {
        text: yAxisTitle,
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
      gridLineWidth: 0,
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
        groupPadding: 0.1,
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "top",
      x: -10,
      y: 40,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend?.backgroundColor || "#FFFFFF",
      shadow: true,
    },
    credits: {
      enabled: false,
    },
    series: data,
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
}
