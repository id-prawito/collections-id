import React, { useEffect, useState } from "react";
import { FiEdit3, FiMessageSquare, FiTrash } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import { Button, ButtonEdit, ButtonTrash, HeroSite } from "./ProjectElements";

import { getProject } from "../../utils/api";
import Modal from "../modal";
import axios from "axios";

const Project = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getProject(setData);
    }, []);

    // console.log(data);

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal((prev) => !prev);
    };

    const deleteRequestHandler = async (id) => {
        const response = await axios.delete(
            `https://limitless-dawn-39905.herokuapp.com/project/${id}`
        );

        console.log(response);
        window.location.reload();

        // setData(response);
    };

    return (
        <HeroSite>
            <div className="project__container">
                <div className="project_content">
                    <div className="heading">
                        <div className="heading_one">
                            Project List and Create
                        </div>
                        <p>Project listing UI by SathishKumar B on Dribbble</p>
                    </div>
                    <div className="form_create">
                        <div className="button_hero">
                            <div className="button_my-course">
                                <FiMessageSquare />
                                <input
                                    type="text"
                                    placeholder="Search Project"
                                />
                            </div>
                        </div>
                        <div className="sort_create">
                            <div className="button_hero">
                                <div className="button_my-course">
                                    <div className="text">
                                        Sort A-Z Descending
                                    </div>
                                    <FaAngleDown />
                                </div>
                            </div>

                            <Button onClick={openModal}>I'm a modal</Button>
                            <Modal
                                showModal={showModal}
                                setShowModal={setShowModal}
                            />
                        </div>
                    </div>

                    <div className="card_content">
                        {data.map((item, _id) => (
                            <div key={_id} className="card-box text-center">
                                <div className="button_trash">
                                    <ButtonEdit
                                        onClick={() =>
                                            console.log("Edit Belum Bisa")
                                        }
                                    >
                                        <FiEdit3 />
                                    </ButtonEdit>
                                    <ButtonTrash
                                        onClick={() =>
                                            deleteRequestHandler(item._id)
                                        }
                                    >
                                        <FiTrash />
                                    </ButtonTrash>
                                </div>
                                <div className="user-pictures">
                                    <div className="pembungkus">
                                        <img
                                            src={item.image}
                                            className="img-fluid"
                                            alt="User Pic"
                                        />
                                    </div>
                                </div>
                                <div className="heading_card">{item.title}</div>
                                <div className="decsription_card">
                                    {item.caption}
                                </div>
                                <div className="form_create">
                                    <div className="button_my-course">
                                        <FiMessageSquare />
                                        <a
                                            href="/facebok"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Create Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </HeroSite>
    );
};

export default Project;
