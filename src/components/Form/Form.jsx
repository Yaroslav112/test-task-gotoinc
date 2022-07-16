import React, { useEffect, useState } from "react";
import "./Form.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { createDelivery, editDelivery } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectDeliveryById } from "../../store/selectors";
import { Controller, useForm } from "react-hook-form";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

const typeOptions = [
  { label: "Gadgets", value: "Gadgets" },
  { label: "Drinks", value: "Drinks" },
  { label: "Clothes", value: "Clothes" },
  { label: "Medicines", value: "Medicines" },
  { label: "Other", value: "Other" },
];

const Form = ({ onClose, editedDeliveryId }) => {
  const delivery = useSelector((s) => selectDeliveryById(s, editedDeliveryId));

  const { register, control, handleSubmit, formState } = useForm({
    mode: "onChange",
    defaultValues: {
      from: delivery?.from || "",
      to: delivery?.to || "",
      date: delivery?.date || "",
      from: delivery?.from || "",
      desc: delivery?.desc || "",
      type: delivery?.type || typeOptions[0].value,
    },
  });

  const { isValid, errors } = formState;
  const dispatch = useDispatch();

  const onSubmit = (newDelivery, e) => {
    e.preventDefault();
    const action = delivery
      ? editDelivery({ id: delivery.id, ...newDelivery })
      : createDelivery(newDelivery);

    dispatch(action);
    onClose();
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <div>
        <TextField
          margin="normal"
          fullWidth
          error={!!errors.from}
          label={errors.from ? "Error" : "From"}
          variant="outlined"
          {...register("from")}
        />
        <TextField
          margin="normal"
          fullWidth
          error={!!errors.to}
          label={errors.to ? "Error" : "To"}
          variant="outlined"
          {...register("to")}
          //Allows you to register an input or select element and apply validation rules to React Hook Form.
        />
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth margin="normal">
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                label="Type"
                value={field.value}
                onChange={field.onChange}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                {typeOptions.map((o) => (
                  <MenuItem value={o.value} key={o.value}>
                    {o.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Delivery date"
                value={field.value}
                onChange={(value) => field.onChange({ target: { value } })}
                renderInput={(params) => (
                  <TextField margin="normal" fullWidth {...params} />
                )}
              />
            </LocalizationProvider>
          )}
        />
        <TextField
          fullWidth
          label="Description"
          multiline
          rows={4}
          margin="normal"
          variant="outlined"
          {...register("desc", {
            required: true,
            minLength: 10,
            maxLength: 150,
          })}
        />
        <Button
          variant="contained"
          margin="normal"
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid}
        >
          Submit
        </Button>
      </div>
    </Box>
  );
};

export default Form;
