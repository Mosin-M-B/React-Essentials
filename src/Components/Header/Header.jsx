import "./Header.css"
import ReactIMG from "../../assets/react-core-concepts.png"
export const reactDescription = ["Fundamental","Crucial","Core"];
export const genrateInt = (max) =>{
    return Math.floor(Math.random()* (max+1))
}
export const Header = () =>{
    const description =reactDescription[genrateInt(2)];
    return(
        <div>
        <header>
          <img src={ReactIMG} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {description} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
       
      </div>)
}