import React, { useContext, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { DataContext } from "../DataProvider";
import validate from "../Validate";

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
      alert("alert created");
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

          <div class="p-8">
  <div class="bg-white flex items-center rounded-full shadow-xl">
    <input class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search"/>
    
    <div class="p-4">
      <button class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
        icon
      </button>
      </div>
    </div>
  </div>

          {/* Alert Modal */}
          <Modal open={open} onClose={onCloseModal} center>
            <div className="p-10">
              <form>
                <label>first name</label>
                <input type="text" />
                <label>second name</label>
                <input type="text" />
              </form>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Alerts;
