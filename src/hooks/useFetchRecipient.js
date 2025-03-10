import React, { useEffect, useState } from "react";
import { baseUrl, getRequest } from "../utils/service";

function useFetchRecipient(chat, user) {
    const [recipientUser, setRecipientUser] = useState(null);
    const [error, setError] = useState(null);

    const recipientId = chat?.members.find((id) => id !== user?._id);

    useEffect(() => {
        const getUser = async () => {
            if (!recipientId) return null;

            const response = await getRequest(
                `${baseUrl}/users/find/${recipientId}`
            );

            if (response?.error) {
                return setError(error);
            }
            setRecipientUser(response);
        };
        getUser();
    }, [recipientId]);
    return { recipientUser };
}

export default useFetchRecipient;
