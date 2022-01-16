import React, { useRef, useState } from "react";
import {
    Background,
    Button,
    CloseModalButton,
    ModalContent,
    ModalWrapper,
} from "./ModalElements";
import { FaAngleRight } from "react-icons/fa";
import { postProjects } from "../../utils/api";

const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef();
    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };
    const [state, setState] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setState((old) => ({ ...old, [name]: value }));
    };

    const handleSubmit = () => {
        postProjects(state).then(() => {
            setState({});
            setShowModal(false);
            window.location.reload();
        });
    };

    return (
        <>
            {showModal ? (
                <Background onClick={closeModal} ref={modalRef}>
                    <ModalWrapper showModal={showModal}>
                        <ModalContent>
                            <div className="pembungkus">
                                <div className="heading">
                                    <div className="judul">Create Project</div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Cupiditate laborum
                                        perferendis sapiente, excepturi nostrum
                                        debitis blanditiis iste, corporis,
                                        laudantium dolore
                                    </p>
                                </div>
                                <div className="content_form">
                                    <div className="form">
                                        <div className="text_form">Image</div>
                                        <input
                                            name="image"
                                            value={state.image || ""}
                                            onChange={handleChange}
                                            type="text"
                                            className="input_form"
                                        />
                                    </div>
                                    <div className="form">
                                        <div className="text_form">Title</div>
                                        <input
                                            name="title"
                                            value={state.title || ""}
                                            onChange={handleChange}
                                            type="text"
                                            className="input_form"
                                        />
                                    </div>
                                    <div className="form">
                                        <div className="text_form">Caption</div>
                                        <input
                                            name="caption"
                                            value={state.caption || ""}
                                            onChange={handleChange}
                                            type="text"
                                            className="input_form"
                                        />
                                    </div>
                                </div>
                            </div>

                            <Button onClick={handleSubmit}>
                                Process To Next Step <FaAngleRight />
                            </Button>
                        </ModalContent>
                        <CloseModalButton
                            aria-label="Close modal"
                            onClick={() => setShowModal((prev) => !prev)}
                        />
                    </ModalWrapper>
                </Background>
            ) : null}
        </>
    );
};

export default Modal;
