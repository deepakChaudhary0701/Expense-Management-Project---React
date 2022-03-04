import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const valueArray = props.dataPoints.map( point => point.value);
    const totalMaxValue = Math.max(...valueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((points) => (
        <ChartBar
          key={points.label}
          value={points.value}
          maxValue={totalMaxValue}
          label={points.label}
        />
      ))}
    </div>
  );
};

export default Chart;
