
export const validateAvatarUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
}

export const validateAvatarUrlMessage = 'Esta no es una URL válida';