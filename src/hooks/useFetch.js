import { useState, useEffect } from "react";
import Axios from "axios";
import useLocalStorage from "./useLocalStorage";

export default (url) => {
    const baseUrl = "http://emphasoft-test-assignment.herokuapp.com";

    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState({});

    const [token] = useLocalStorage("token");

    const doFetch = (options = {}) => {
        setOptions(options);
        setIsLoading(true);
    };

    useEffect(() => {
        if (!isLoading) return;

        Axios(`${baseUrl}${url}`, options)
            .then((response) => {
                setIsLoading(false);
                setResponse(response.data);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err);
            });
    }, [token, response, url, isLoading, options]);

    return [{ isLoading, response, error }, doFetch];
};
