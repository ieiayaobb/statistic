let echarts = require('echarts')
let React = require('react');
let zrender = require('zrender');
require('echarts/chart/bar');

class ChartPanel extends React.Component {

	constructor(){
		super()
		this.option = {
	        tooltip: {
	            show: true
	        },
	        legend: {
	            data:['销量']
	        },
	        xAxis : [
	            {
	                type : 'category',
	                data : ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
	            }
	        ],
	        yAxis : [
	            {
	                type : 'value'
	            }
	        ],
	        series : [
	            {
	                "name":"销量",
	                "type":"bar",
	                "data":[5, 20, 40, 10, 10, 20]
	            }
	        ]
	    };
	}
                    
	componentWillMount() {
	    
	}

	componentDidMount() {
		var lineChartDom = React.findDOMNode(this.refs.lineChart);
		var lineChart = echarts.init(lineChartDom);
        lineChart.setOption(this.option);
	}
	render() {
		return(<div ref="lineChart" style={{
			height:'300px'
		}}></div>)
	}
}

module.exports = ChartPanel;