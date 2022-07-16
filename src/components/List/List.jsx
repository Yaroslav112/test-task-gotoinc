import React from "react";
import "./List.css";
import { useSelector, useDispatch } from "react-redux";
import { selectDeliveries } from "../../store/selectors";
import { deleteDelivery } from "../../store/actions";
import { format } from "date-fns";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const List = ({ onEdit }) => {
  const deliveries = useSelector(selectDeliveries);
  const dispatch = useDispatch();

  return (
    <div className="list-container">
      <ol className="list-to-add">
        {deliveries.map((d) => (
          <li className="item-card" key={d.id}>
            <Card>
              <CardContent>
                <Typography>From: {d.from}</Typography>{" "}
                <Typography>To: {d.to}</Typography>
                <Typography>Type: {d.type}</Typography>
                <Typography>
                  Description: {d.desc}
                  <br />
                </Typography>
                <Typography>Date: {format(d.date, "dd/MM/yyyy")}</Typography>
              </CardContent>
              <div className="button-container">
                <Button variant="outlined" onClick={() => onEdit(d.id)}>
                  edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => dispatch(deleteDelivery({ id: d.id }))}
                >
                  delete
                </Button>
              </div>
            </Card>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default List;
