export const TabButton = ({children,lable,onSelect , isSelected}) =>{
   console.log("form button");
    return <>
    <li><button className={isSelected ?  "active" : undefined} onClick={onSelect}>{children || lable}</button></li>
    {/*<li><button>{lable}</button></li>*/}
    </>
}