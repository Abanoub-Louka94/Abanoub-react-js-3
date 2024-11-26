import Gallery from "./Tasks 1/challenge 1/challenge-1";
import Profile from "./Tasks 1/challenge 3/challenge-3";
import MyButton from "./Tasks 1/challenge 4/challenge-4";
import PackingList from "./Task 2/challenge 1/challenge-1";
export default function App() {
   return (

       <div className="container">
           <div className="gallery">
               <Gallery />
           </div>
           <div className="profile">
               <Profile />
           </div>
           <div className="list">
               <PackingList/>
           </div>
           <div className="btn">
               <MyButton/>
           </div>
       </div>
   );
}