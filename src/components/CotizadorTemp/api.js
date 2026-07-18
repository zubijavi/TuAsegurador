import axios from "axios";

const API = "https://seguroauto.newbridge.com.ar/api";
const BACKEND = "https://backcoti.onrender.com";

const api = axios.create({
    baseURL: API
});

const backend = axios.create({
    baseURL: BACKEND
});

export const getYears = () =>
    api.get("/vehicles/years");

export const getBrands = (year) =>
    api.get("/vehicles/brands", {
        params: { year }
    });

export const getModels = (year, brand) =>
    api.get("/vehicles/models", {
        params: { year, brand }
    });

export const getVersions = (year, brand, model) =>
    api.get("/vehicles/versions", {
        params: { year, brand, model }
    });

export const getLocation = (cp) =>
    api.get(`/locations/${cp}`);

export const quote = (data) =>
    api.post("/quote", data);

export const contratar = (data) =>
    backend.post("/api/contrataciones", data);