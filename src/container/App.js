
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox'; 
import { Component } from 'react';
import Scroll from '../components/Scroll';

 class App extends Component {
    constructor() {
        super()
        this.state = {
        robots: [],
        searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{return response.json()})
        .then(users =>{this.setState({ robots: users}) 
        })

        
    }
    
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }
   render(){
    const filterefriends = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.robots.length === 0){
        return <div><h1> Loading...</h1></div>
    }else {
        return(
        <div className='tc'>
            <h1>My Friends</h1>
            <SearchBox searchchange={this.onSearchChange}/>
            <Scroll>
            <CardList robots={filterefriends}/>
            </Scroll>
        </div>
        );
    }
        
   }
 	
 }

 export default App;