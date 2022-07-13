import React, { useEffect, useState } from "react";
import "./Form.css";
import SubmitButton from "../SubmitButton/SubmitButton";
import { createDelivery, editDelivery } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectDeliveryById } from "../../store/selectors";

const typeOptions = [
  { label: "Gadgets", value: "GADGETS" },
  { label: "Drinks", value: "DRINKS" },
  { label: "Clothes", value: "CLOTHES" },
  { label: "Medicines", value: "MEDICINES" },
  { label: "Other", value: "OTHER" },
];

const Form = ({ onClose, editedDeliveryId }) => {
  const delivery = useSelector((s) => selectDeliveryById(s, editedDeliveryId));

  const [from, setFrom] = useState(delivery?.from || "");
  const [to, setTo] = useState(delivery?.to || "");
  const [date, setDate] = useState(delivery?.date || "");
  const [desc, setDesc] = useState(delivery?.desc || "");
  const [type, setType] = useState(delivery?.type || typeOptions[0].value);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const newDelivery = { from, to, date, desc, type };
    const action = delivery
      ? editDelivery({ id: delivery.id, ...newDelivery })
      : createDelivery(newDelivery)
    
    dispatch(action);
    onClose();
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <label>
        From
        <input
          className="input-field"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          type="text"
        />
      </label>

      <label>
        To
        <input
          className="input-field"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          type="text"
        />
      </label>
      <label>
        Type
        <select
          className="select"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {typeOptions.map((o) => (
            <option value={o.value} key={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>

      <label>
        Date
        <input
          className="input-field"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
        />
      </label>

      <label>
        Desctiption
        <textarea
          className="description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
      </label>
      <SubmitButton />
    </form>
  );
};

export default Form;
