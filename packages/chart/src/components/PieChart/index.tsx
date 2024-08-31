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
    series: [{ type: "pie", data }],
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
}
