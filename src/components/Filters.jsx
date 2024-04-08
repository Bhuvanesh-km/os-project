import React, { useState } from "react";
import Modal from "../components/Modal";
import BasicDatePicker from "../components/BasicDatePicker";
const Filters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <>
      <div className="brand-options">
        <div className="date-range">
          <BasicDatePicker label={"Enter start date"} />
          <BasicDatePicker label={"Enter end date"} />
        </div>
        <div className="table-container">
          <div className="checkbox-container">
            <label>Tabel 1</label>
            <input type="checkbox" label="tabel1" />
          </div>
          <div className="checkbox-container">
            <label>Tabel 2</label>
            <input type="checkbox" label="tabel2" />
          </div>
          <div className="checkbox-container">
            <label>Tabel 3</label>
            <input type="checkbox" label="tabel3" />
          </div>
          <div className="checkbox-container">
            <label>Tabel 4</label>
            <input type="checkbox" label="tabel4" />
          </div>
          <div className="checkbox-container">
            <label>Tabel 5</label>
            <input type="checkbox" label="tabel5" />
          </div>
          <div className="checkbox-container">
            <label>Tabel 6</label>
            <input type="checkbox" label="tabel6" />
          </div>
        </div>
        <div className="file-upload">
          <input type="file" onChange={handleFileChange} />
        </div>
        <div className="btn-container">
          <button className="header-btn" onClick={handleButtonClick}>
            click to select headers
          </button>
        </div>
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </>
  );
};

export default Filters;
