
import {Component} from "react";
import Content from "./consctruct/Content/Content";


export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
      const options = {
          method: 'GET',
        };
      fetch('https://private-anon-48a6f402ac-lampshop.apiary-mock.com/lamps', options)
      .then(response => response.json())
      .then(response => this.setState({
        data: response
      }) )
      .catch(err => console.error(err));
  }


  render() {
      const {data} = this.state;
    return (
            <div className="App">
      <Content data={data} />
    </div>
    )
  }

}
// function App() {
//
//
//   const options = {
//     method: 'GET',
//   };
//   const [data,setData] = useState([]);
//
// useEffect(() => {
//   fetch('https://private-anon-48a6f402ac-lampshop.apiary-mock.com/lamps', options)
//       .then(response => response.json())
//       .then(response => setData(response) )
//       .catch(err => console.error(err));
// })
//   return (
//     <div className="App">
//       <Content data={data} />
//     </div>
//   );
// }
//
// export default App;
