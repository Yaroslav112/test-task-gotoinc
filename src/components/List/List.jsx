import React from "react";
import "./List.css";
import { useSelector, useDispatch } from "react-redux";
import { selectDeliveries } from "../../store/selectors";
import { deleteDelivery } from "../../store/actions";


const List = ({ onEdit }) => {
  const deliveries = useSelector(selectDeliveries);
  const dispatch = useDispatch();

  return (
    <div className="list-container">
      <ul className="list-to-add">
        {deliveries.map((d) => (
          <li key={d.id}>
            {d.type}, {d.from}, {d.to}, {d.desc}, {d.date}
            <button onClick={() => onEdit(d.id)}>edit</button>
            <button onClick={() => dispatch(deleteDelivery({ id: d.id }))}>delete</button>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
