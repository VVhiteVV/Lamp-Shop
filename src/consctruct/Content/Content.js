
import './Content.css';
import {Component} from "react";
import RoomLight from "../../img/Content/Room.png";
import RoomDark from "../../img/Content/RoomDark.png";


export default class Content extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            image: null,
            light: false,
            darkMode: false
        }
    }

    render() {
        const {id,image,light,darkMode} = this.state;
        return(
            <div className="Content container">
                             <div className="Content__Left">
                                 <div className="Content__Left-top-text">
                                 <span>
                     Collection of lighting is inspired by the geometric works of the great Suprematist artists Kissitzky and Kazimir Malevich. <br/><br/>
 Suprematism is a modernist movement in the art of the early twentieth century, focused on the basic geometric forms, such as circles, squares, lines and rectangles. The geometric structure of the lamps will always look like a small art objects in your house.
                 </span>
                                 </div>

                                 <div className="Content__Lamp">
                                     <div className="Content__Lamp-info">
                                         {this.props.data.map(items =>
                             items.id === id ?
                                 <div key={items.id} className="Content__Lamp-info-inner">
                                     <div className="Content__Lamp-info-item">
                                         <div><strong>Material:</strong>{items.material}</div>
                                     </div>
                                     <div className="Content__Lamp-info-item">
                                         <div><strong>Dimensions (cm):</strong>H {items.height} x W{items.width} x D {items.width}</div>
                                     </div>
                                     <div className="Content__Lamp-info-item">
                                         <div><strong>Net Weight:</strong>{items.weight}</div>
                                     </div>
                                     <div className="Content__Lamp-info-item">
                                         <div><strong>Electrification:</strong>{items.electrification}</div>
                                     </div>
                                 </div>
                                 : false)}

                     </div>
                     <div className="Content__Lamp-image">
                         <img src={image} alt=""/>
                     </div>
                     <div className="Content__Lamp-Card">
                         <div className="Content__Lamp-items">
                             {this.props.data.map(item =>
                                 <div key={item.id} onClick={() => { this.setState({id:item.id,image:item.image,darkMode:item.isDarkMode,light:false})}} className="Content__Lamp-item">
                                     <img src={item.image} alt=""/>
                                 </div>
                             )}
                         </div>
                         <div className="Content__Button">
                             <div className="Content__Button-light-on" onClick={() => this.setState({light: false}) }>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="33" height="34" viewBox="0 0 33 34" fill="none">
                                     <path d="M4.40002 15.6066C5.22502 15.6066 5.77502 16.1639 5.77502 17C5.77502 17.8361 5.22502 18.3934 4.40002 18.3934H1.375C0.55 18.3934 0 17.8361 0 17C0 16.1639 0.55 15.6066 1.375 15.6066H4.40002ZM6.875 24.8032C7.425 24.2459 8.25003 24.2459 8.80003 24.8032C9.35003 25.3606 9.35003 26.1967 8.80003 26.7541L6.59998 28.9836C6.04998 29.5409 5.22503 29.5409 4.67503 28.9836C4.12503 28.4262 4.12503 27.5902 4.67503 27.0328L6.875 24.8032ZM4.67503 7.24591C4.12503 6.68853 4.12503 5.85244 4.67503 5.29506C5.22503 4.73768 6.04998 4.73768 6.59998 5.29506L8.80003 7.52462C9.35003 8.08199 9.35003 8.91801 8.80003 9.47538C8.25003 10.0328 7.425 10.0328 6.875 9.47538L4.67503 7.24591ZM24.2001 17C24.2001 21.459 20.625 25.0819 16.225 25.0819C11.825 25.0819 8.25 21.459 8.25 17C8.25 12.541 11.825 8.91806 16.225 8.91806C20.9 9.19675 24.2001 12.8197 24.2001 17ZM11 17C11 20.0656 13.475 22.2951 16.225 22.2951C19.25 22.2951 21.4501 19.7869 21.4501 17C21.4501 13.9344 18.975 11.7049 16.225 11.7049C13.475 11.7049 11 14.2131 11 17ZM17.875 4.73773C17.875 5.5738 17.325 6.13118 16.5 6.13118C15.675 6.13118 15.125 5.5738 15.125 4.73773V1.39344C15.125 0.557376 15.675 0 16.5 0C17.325 0 17.875 0.557376 17.875 1.39344V4.73773ZM17.875 32.6066C17.875 33.4426 17.325 34 16.5 34C15.675 34 15.125 33.4426 15.125 32.6066V29.541C15.125 28.7049 15.675 28.1475 16.5 28.1475C17.325 28.1475 17.875 28.7049 17.875 29.541V32.6066ZM26.4 5.01635C26.95 4.45898 27.7751 4.45898 28.3251 5.01635C28.8751 5.57373 28.8751 6.40983 28.3251 6.96721L26.125 9.19668C25.575 9.75405 24.7501 9.75405 24.2001 9.19668C23.6501 8.6393 23.6501 7.80329 24.2001 7.24591L26.4 5.01635ZM28.3251 27.0328C28.8751 27.5902 28.8751 28.4262 28.3251 28.9836C27.7751 29.5409 26.95 29.5409 26.4 28.9836L24.2001 26.7541C23.6501 26.1967 23.6501 25.3606 24.2001 24.8032C24.7501 24.2459 25.575 24.2459 26.125 24.8032L28.3251 27.0328ZM28.6 18.3934C27.775 18.3934 27.225 17.8361 27.225 17C27.225 16.1639 27.775 15.6066 28.6 15.6066H31.625C32.45 15.6066 33 16.1639 33 17C33 17.8361 32.45 18.3934 31.625 18.3934H28.6Z" fill="black"/>
                                 </svg>
                             </div>
                             <div className="Content__Button-light-off" onClick={() => {darkMode === true ? this.setState({light:true}):this.setState({light:false})}}>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
                                     <path d="M0 18.5983C0 12.8547 3.26314 7.93165 7.88595 6.01712C8.70174 5.74362 9.24562 5.74363 9.51755 6.29064C9.78948 6.56415 9.78948 7.11109 9.51755 7.9316C8.97369 9.02561 8.70179 10.6667 8.70179 12.5812C8.70179 19.1453 13.0527 23.5214 19.8509 23.5214C21.4825 23.5214 22.8421 23.2479 24.2018 22.7009C24.7456 22.4274 25.2895 22.4274 25.5614 22.7009C25.8333 22.9744 26.1053 23.5213 25.5614 24.3418C23.386 29.2649 19.0351 32 13.3246 32C5.71051 31.7265 0 25.9829 0 18.5983ZM22.2983 25.1624C21.7544 25.4359 20.3948 25.4359 19.307 25.4359C11.693 25.4359 6.5263 20.5128 6.5263 12.8547C6.5263 11.4872 6.79827 10.1197 7.0702 9.02568C4.3509 11.2137 2.7193 14.4957 2.7193 18.3248C2.7193 24.6154 7.07018 29.265 13.5965 29.265C17.1316 29.265 20.3948 27.8974 22.2983 25.1624ZM17.4035 6.8376C16.8596 4.37606 16.8597 4.37605 14.4123 3.82904C14.1404 3.82904 14.1404 3.82911 14.1404 3.5556C14.1404 3.2821 14.1404 3.28208 14.4123 3.28208C17.1316 2.73507 16.8596 2.73506 17.4035 0.273521C17.4035 1.66893e-05 17.6754 0 17.6754 0C17.9474 0 17.9474 1.66893e-05 17.9474 0.273521C18.4913 2.73506 18.4913 2.73507 20.9386 3.28208C21.2106 3.28208 21.2106 3.5556 21.2106 3.5556C21.2106 3.5556 21.2106 3.82904 20.9386 3.82904C18.2193 4.37605 18.2193 4.37606 17.9474 6.8376C17.9474 7.1111 17.6754 7.11112 17.6754 7.11112C17.4035 7.11112 17.4035 7.1111 17.4035 6.8376ZM24.4737 16.9573C23.9298 12.8547 23.9299 12.8547 19.579 12.0342C19.3071 12.0342 19.0351 11.7607 19.0351 11.4872C19.0351 11.2137 19.3071 10.9402 19.579 10.9402C23.6579 10.1196 23.9298 10.1197 24.4737 6.01712C24.4737 5.74362 24.7457 5.47008 25.0176 5.47008C25.2895 5.47008 25.5614 5.74362 25.5614 6.01712C26.1053 10.1197 26.1053 10.1196 30.4562 10.9402C30.7281 10.9402 31 11.2137 31 11.4872C31 11.7607 30.7281 12.0342 30.4562 12.0342C26.3772 12.8547 26.1053 12.8547 25.5614 16.9573C25.5614 17.2308 25.2895 17.5042 25.0176 17.5042C24.7457 17.5042 24.4737 17.2308 24.4737 16.9573Z" fill="white"/>
                                 </svg>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="Content__Right">
                 {darkMode === false || light === false ? <img src={image} alt=""/>: false}
                 <div className="Content__Room">
                     {light === false ? <img src={RoomLight} alt=""/> : <img src={RoomDark} alt=""/>}
                 </div>
             </div>
         </div>
        )
    }
}
// const Content = ({data}) => {
//     const [id,setID] = useState();
//     const [image,setImage] = useState();
//     const [light,setLight] = useState(false);
//     const [darkMode,setDarkMode] = useState(false);
//
//     return (
//         <div className="Content container">
//             <div className="Content__Left">
//                 <div className="Content__Left-top-text">
//                 <span>
//                     Collection of lighting is inspired by the geometric works of the great Suprematist artists Kissitzky and Kazimir Malevich. <br/><br/>
// Suprematism is a modernist movement in the art of the early twentieth century, focused on the basic geometric forms, such as circles, squares, lines and rectangles. The geometric structure of the lamps will always look like a small art objects in your house.
//                 </span>
//                 </div>
//
//                 <div className="Content__Lamp">
//                     <div className="Content__Lamp-info">
//                         {data.map(items =>
//                             items.id === id ?
//                                 <div key={items.id} className="Content__Lamp-info-inner">
//                                     <div className="Content__Lamp-info-item">
//                                         <div><strong>Material:</strong>{items.material}</div>
//                                     </div>
//                                     <div className="Content__Lamp-info-item">
//                                         <div><strong>Dimensions (cm):</strong>H {items.height} x W{items.width} x D {items.width}</div>
//                                     </div>
//                                     <div className="Content__Lamp-info-item">
//                                         <div><strong>Net Weight:</strong>{items.weight}</div>
//                                     </div>
//                                     <div className="Content__Lamp-info-item">
//                                         <div><strong>Electrification:</strong>{items.electrification}</div>
//                                     </div>
//                                 </div>
//                                 : false)}
//
//                     </div>
//                     <div className="Content__Lamp-image">
//                         <img src={image} alt=""/>
//                     </div>
//                     <div className="Content__Lamp-Card">
//                         <div className="Content__Lamp-items">
//                             {data.map(item =>
//                                 <div key={item.id} onClick={() => {setID(item.id);setImage(item.image);setDarkMode(item.isDarkMode);setLight(false)}} className="Content__Lamp-item">
//                                     <img src={item.image} alt=""/>
//                                 </div>
//                             )}
//                         </div>
//                         <div className="Content__Button">
//                             <div className="Content__Button-light-on" onClick={() => setLight(false)}>
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="33" height="34" viewBox="0 0 33 34" fill="none">
//                                     <path d="M4.40002 15.6066C5.22502 15.6066 5.77502 16.1639 5.77502 17C5.77502 17.8361 5.22502 18.3934 4.40002 18.3934H1.375C0.55 18.3934 0 17.8361 0 17C0 16.1639 0.55 15.6066 1.375 15.6066H4.40002ZM6.875 24.8032C7.425 24.2459 8.25003 24.2459 8.80003 24.8032C9.35003 25.3606 9.35003 26.1967 8.80003 26.7541L6.59998 28.9836C6.04998 29.5409 5.22503 29.5409 4.67503 28.9836C4.12503 28.4262 4.12503 27.5902 4.67503 27.0328L6.875 24.8032ZM4.67503 7.24591C4.12503 6.68853 4.12503 5.85244 4.67503 5.29506C5.22503 4.73768 6.04998 4.73768 6.59998 5.29506L8.80003 7.52462C9.35003 8.08199 9.35003 8.91801 8.80003 9.47538C8.25003 10.0328 7.425 10.0328 6.875 9.47538L4.67503 7.24591ZM24.2001 17C24.2001 21.459 20.625 25.0819 16.225 25.0819C11.825 25.0819 8.25 21.459 8.25 17C8.25 12.541 11.825 8.91806 16.225 8.91806C20.9 9.19675 24.2001 12.8197 24.2001 17ZM11 17C11 20.0656 13.475 22.2951 16.225 22.2951C19.25 22.2951 21.4501 19.7869 21.4501 17C21.4501 13.9344 18.975 11.7049 16.225 11.7049C13.475 11.7049 11 14.2131 11 17ZM17.875 4.73773C17.875 5.5738 17.325 6.13118 16.5 6.13118C15.675 6.13118 15.125 5.5738 15.125 4.73773V1.39344C15.125 0.557376 15.675 0 16.5 0C17.325 0 17.875 0.557376 17.875 1.39344V4.73773ZM17.875 32.6066C17.875 33.4426 17.325 34 16.5 34C15.675 34 15.125 33.4426 15.125 32.6066V29.541C15.125 28.7049 15.675 28.1475 16.5 28.1475C17.325 28.1475 17.875 28.7049 17.875 29.541V32.6066ZM26.4 5.01635C26.95 4.45898 27.7751 4.45898 28.3251 5.01635C28.8751 5.57373 28.8751 6.40983 28.3251 6.96721L26.125 9.19668C25.575 9.75405 24.7501 9.75405 24.2001 9.19668C23.6501 8.6393 23.6501 7.80329 24.2001 7.24591L26.4 5.01635ZM28.3251 27.0328C28.8751 27.5902 28.8751 28.4262 28.3251 28.9836C27.7751 29.5409 26.95 29.5409 26.4 28.9836L24.2001 26.7541C23.6501 26.1967 23.6501 25.3606 24.2001 24.8032C24.7501 24.2459 25.575 24.2459 26.125 24.8032L28.3251 27.0328ZM28.6 18.3934C27.775 18.3934 27.225 17.8361 27.225 17C27.225 16.1639 27.775 15.6066 28.6 15.6066H31.625C32.45 15.6066 33 16.1639 33 17C33 17.8361 32.45 18.3934 31.625 18.3934H28.6Z" fill="black"/>
//                                 </svg>
//                             </div>
//                             <div className="Content__Button-light-off" onClick={() => {darkMode === true ? setLight(true):setLight(false)}}>
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
//                                     <path d="M0 18.5983C0 12.8547 3.26314 7.93165 7.88595 6.01712C8.70174 5.74362 9.24562 5.74363 9.51755 6.29064C9.78948 6.56415 9.78948 7.11109 9.51755 7.9316C8.97369 9.02561 8.70179 10.6667 8.70179 12.5812C8.70179 19.1453 13.0527 23.5214 19.8509 23.5214C21.4825 23.5214 22.8421 23.2479 24.2018 22.7009C24.7456 22.4274 25.2895 22.4274 25.5614 22.7009C25.8333 22.9744 26.1053 23.5213 25.5614 24.3418C23.386 29.2649 19.0351 32 13.3246 32C5.71051 31.7265 0 25.9829 0 18.5983ZM22.2983 25.1624C21.7544 25.4359 20.3948 25.4359 19.307 25.4359C11.693 25.4359 6.5263 20.5128 6.5263 12.8547C6.5263 11.4872 6.79827 10.1197 7.0702 9.02568C4.3509 11.2137 2.7193 14.4957 2.7193 18.3248C2.7193 24.6154 7.07018 29.265 13.5965 29.265C17.1316 29.265 20.3948 27.8974 22.2983 25.1624ZM17.4035 6.8376C16.8596 4.37606 16.8597 4.37605 14.4123 3.82904C14.1404 3.82904 14.1404 3.82911 14.1404 3.5556C14.1404 3.2821 14.1404 3.28208 14.4123 3.28208C17.1316 2.73507 16.8596 2.73506 17.4035 0.273521C17.4035 1.66893e-05 17.6754 0 17.6754 0C17.9474 0 17.9474 1.66893e-05 17.9474 0.273521C18.4913 2.73506 18.4913 2.73507 20.9386 3.28208C21.2106 3.28208 21.2106 3.5556 21.2106 3.5556C21.2106 3.5556 21.2106 3.82904 20.9386 3.82904C18.2193 4.37605 18.2193 4.37606 17.9474 6.8376C17.9474 7.1111 17.6754 7.11112 17.6754 7.11112C17.4035 7.11112 17.4035 7.1111 17.4035 6.8376ZM24.4737 16.9573C23.9298 12.8547 23.9299 12.8547 19.579 12.0342C19.3071 12.0342 19.0351 11.7607 19.0351 11.4872C19.0351 11.2137 19.3071 10.9402 19.579 10.9402C23.6579 10.1196 23.9298 10.1197 24.4737 6.01712C24.4737 5.74362 24.7457 5.47008 25.0176 5.47008C25.2895 5.47008 25.5614 5.74362 25.5614 6.01712C26.1053 10.1197 26.1053 10.1196 30.4562 10.9402C30.7281 10.9402 31 11.2137 31 11.4872C31 11.7607 30.7281 12.0342 30.4562 12.0342C26.3772 12.8547 26.1053 12.8547 25.5614 16.9573C25.5614 17.2308 25.2895 17.5042 25.0176 17.5042C24.7457 17.5042 24.4737 17.2308 24.4737 16.9573Z" fill="white"/>
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="Content__Right">
//                 {darkMode === false || light === false ? <img src={image} alt=""/>: false}
//                 <div className="Content__Room">
//                     {light === false ? <img src={RoomLight} alt=""/> : <img src={RoomDark} alt=""/>}
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default Content;