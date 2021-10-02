import "./works.scss";

export default function Works({  id,title, active, setSelected }) {
    return (
    <li 
      className={active ? "works active" : "works"}
      onClick={() => setSelected(id)}>
        {title}
    </li>
    );
}
