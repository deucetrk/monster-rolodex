
import './search-box.styles.css'

const SearchBox = ({className, placeholder, onChangeHandler}) =>(
  <input
  type="search"
  className={`search-box ${className}`}
  placeholder={placeholder}
  onChange={onChangeHandler}
/>
)
 


// class SearchBox extends Component{
//   render(){
//     return (
//         <input
//         type="search"
//         className={`search-box ${this.props.className}`}
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />
//     )
//   }
// }

export default SearchBox;