import axios from "axios";
//? axios c'est une bibliotique pour envoyer des requetes vers la partie back-end
const http = axios.create({
	baseURL: "http://localhost:5000",
	Headers: { "content-type": "application/json" },
});

export default http;
