import './Header.css'
import {Component} from "react";
import Logo from '../../img/header/logo.png';

export default class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }
    render() {
        const {active} = this.state;
        return(
            <header className={'Header container'}>
                           <div className={"Header__inner"}>
                               <div className={"Header__logo"}>
                                   <img src={Logo} alt=""/>
                               </div>
                               <nav className={"Header__menu"}>
                                   <div onClick={() => {active === false ? this.setState({active:true}):this.setState({active: false})}} className={active ? "Header__menu-mobile menu-mobile-active" : "Header__menu-mobile"} >
                                       <div></div>
                                   </div>
                                   <ul className={active === false ? "Header__list" : "Header__list list-active"}>
                                       <li><a href="/#">COLLECTIONS</a></li>
                                       <li><a href="/#">BLOG</a></li>
                                       <li><a href="/#">ABOUT</a></li>
                                       <li><a href="/#">CONTACTS</a></li>
                                   </ul>
                               </nav>
                           </div>
                       </header>
        )
    }
}

// const Header = () => {
//     const [active,setActive] = useState(false);
//     return (
//         <header className={'Header container'}>
//             <div className={"Header__inner"}>
//                 <div className={"Header__logo"}>
//                     <img src={Logo} alt=""/>
//                 </div>
//                 <nav className={"Header__menu"}>
//                     <div onClick={() => {active === false ? setActive(true):setActive(false)}} className={active ? "Header__menu-mobile menu-mobile-active" : "Header__menu-mobile"} >
//                         <div></div>
//                     </div>
//                     <ul className={active === false ? "Header__list" : "Header__list list-active"}>
//                         <li><a href="/#">COLLECTIONS</a></li>
//                         <li><a href="/#">BLOG</a></li>
//                         <li><a href="/#">ABOUT</a></li>
//                         <li><a href="/#">CONTACTS</a></li>
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     )
// }
//
// export default Header;