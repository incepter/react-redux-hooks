import { useSelector, useDispatch } from "react-redux";
import { selectFormByKey, changeFormValue } from "../_forms";
import invariant from "invariant";

export default function useStoreForm(key = "", submitCb) {
  const values = useSelector(selectFormByKey(key));
  invariant(
    values,
    `Unable to find '${key}' form. You should dispatch 'ADD_FORM' action IN A PARENT CONTAINER before interacting with a form (to increase perfs)`
  );

  const dispatch = useDispatch();
  const handleChange = (name, value) => {
    dispatch(changeFormValue({ key, name, value }));
  };
  const handleSubmit = e => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    submitCb({ ...values });
  };

  return {
    values,
    handleChange,
    handleSubmit
  };
}
