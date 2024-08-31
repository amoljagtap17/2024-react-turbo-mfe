import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface IPieChartProps {
  title: string;
  data: Highcharts.PointOptionsObject[];
}

export function PieChart({ title, data }: IPieChartProps) {
  const chartOptions: Highcharts.Options = {
    chart: {
      type: "pie",
    },
    title: {
      text: title,
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: "pointer",
      },
    },
    credits: {
      enabled: false,
    },
    series: [{ type: "pie", name: "Amount", data }],
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
}
