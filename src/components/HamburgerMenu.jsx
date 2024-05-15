// import { connect } from "react-redux"
// import actions from "../../redux/actions"
// import Hamburger from "./Hamburger"
// import Navbar from "./Navbar"


// const HamburgerMenu = (props) => {
//     const menu = {
//         width:"100%",
//         maxWidth: "200px",
//         position: "absolute",
//         top: "0",
//         left: "0",
//         zIndex: "5",
//         display: "flex",
//         flexDirection: "column"
//     }
//     return (
//         <>
//             {
//                 !props.hamburger ?
//                     <Hamburger /> :
                  
//                         <dialog open={props.hamburger} style={menu}>
//                             <Navbar isHam={true} />
                          
//                             <button onClick={props.closeHamburger}>close</button>
//                         </dialog>
//             }
//         </>

//     )
// }

// const mapStateToProps = ({ actions }) => {
//     return {
//         hamburger: actions.hamburger,
       
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         closeHamburger: () => dispatch(actions.closeHamburger()),
     
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(HamburgerMenu)