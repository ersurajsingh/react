import React, { useReducer } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { formConstants } from "../../constants";
import reducer, { initialState } from "./reducer";
import Form from "./form";
import Logger from "../../utility/logger";
import { updateUser } from "../../slices/userSlice";
import { useDispatch } from "react-redux";

const {
  ACTION_TYPES: { UDPATE_STATE }
} = formConstants;

const ExampleForm = () => {
  const [state, localDispatch] = useReducer(reducer, initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateState = (payload) =>
    localDispatch({ type: UDPATE_STATE, payload });

  const onSubmit = async (data) => {
    Logger.info("Login form data: ", data);
    updateState({ isLoading: true });
    await new Promise((resolve) => setTimeout(resolve, 2000));
    updateState({ isLoading: false });
    dispatch(updateUser({ ...data, isLoggedIn: true }));
    toast.success("Login successfully!");
    navigate("/");
  };

  return (
    <>
      <Form onSubmit={onSubmit} isLoading={state.isLoading} />
    </>
  );
};

export default ExampleForm;
