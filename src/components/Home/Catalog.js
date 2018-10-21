import React,{Component,PropTypes} from 'react';
import './Catalog.css';
class Catalog extends Component{
	static propTypes = {
		title:PropTypes.string,
		link:PropTypes.string,
		push:PropTypes.func,
	};
	handleNavigate(id,e){
		e.preventDefault();
		this.props.push('/detail/'+id);
	}
	render(){
		return (
			<div>
				<h1 className="title">
					<a href={`/detail/${this.props.id}`} onClick={this.handleNavigate.bind(this,this.props.id)}>
						{this.props.title}
					</a>
				</h1>
				<span className="num">{this.props.num}</span>
			</div>
		)
	}
}
export default Catalog;