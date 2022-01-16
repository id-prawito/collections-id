import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:9000",
});

export const getProject = (callback) => {
    instance
        .get("/get/projects")
        .then((res) => {
            callback && callback(res?.data || []);
        })
        .catch((err) => {
            console.log(err);
        });
};

//post
export const postProjects = (data = {}) => {
    return instance
        .post("/new/projects", {
            ...data,
        })
        .then(() => {
            return true;
        })
        .catch((err) => {
            console.log(err);
        });
};
