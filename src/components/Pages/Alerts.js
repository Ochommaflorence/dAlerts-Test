import React, { useContext, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { DataContext } from "../DataProvider";
import validate from '../Validate'


const initialState = {
    firstName: "",
    lastName: "",
    story: "",
    status: "",
    avatar: "",
  };

const Alerts = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  
  const [people, setPeople] = useContext(DataContext);

  const [person, setPerson] = useState(initialState);
  const [errorMsg, setErrorMsg] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    //  check error on submit
    const formErrors = validate(person);
    setErrorMsg(formErrors);
    if (Object.keys(formErrors).length) {
      return;
    } else {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);

      setPerson(initialState);
      setErrorMsg(initialState);
      document.getElementById("clearInput").reset();
      alert('alert created');
    }
  };

  return (
    <>
      <div className="My-container text-white mt-10 flex justify-center">
        <div className="max-w-4xl overflow-x-scroll md:overflow-x-hidden ">
          <ul className="flex gap-4 md:gap-6 lg:gap-10 text-xs md:text-sm  border-b border-blue-500 pb-3">
            <li>SYMBOL</li>
            <li>EXCHANGE</li>
            <li>ALERT PRICE</li>
            <li>CURRENT PRICE</li>
            <li>NOTIFICATION TYPE</li>
            <li
              className="text-secondary cursor-pointer hover:text-white"
              onClick={onOpenModal}
            >
              +New Alert
            </li>
          </ul>
          {/* Alert Modal */}
          <Modal open={open} onClose={onCloseModal} center>
            <div className="p-10">modal</div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Alerts;
