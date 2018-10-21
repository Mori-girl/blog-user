import React,{PropTypes,Component} from 'react';
import Catalog from './Catalog';
class CatalogList extends Component{
	static propTypes = {
		loading:PropTypes.bool,
		error:PropTypes.bool,
		loadCatalogs:PropTypes.func,
		catalogList:PropTypes.arrayOf(PropTypes.object),
		push:PropTypes.func
	};
	componentDidMount(){
		this.props.loadCatalogs();
	}
	render(){
		const {loading,error,catalogList}=this.props;
		if(error){
			return <p className="message">Oops,something is wrong.</p>
		}
		if(loading){
			return <p className="message">Loading</p>
		}
           	return (
				   <div>
				     {
					   catalogList.map(item=>(
						<Catalog {...item} key={item.id} push={this.props.push}/>		  
						))
					 }
		   		  </div>
		    );	
	}
}
export default CatalogList;