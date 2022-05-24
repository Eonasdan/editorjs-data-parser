interface ImgTypes {
    stretched: boolean;
    withBorder: boolean;
    withBackground: boolean;
    file: {
        url: string;
    };
    caption: string;
    alt: string;
    pictureSet: string;
}

export const image = (param: ImgTypes) => {
    if (param.pictureSet) {
        return param.pictureSet;
    }

    const imgClass = `${param.stretched ? 'img-fullwidth' : ''} ${
        param.withBorder ? 'image-withBorder' : ''
    } ${param.withBackground ? 'img-background' : ''}`;


    if (param.caption) {
        return `<figure><img src="${param.file.url}" class="${imgClass}" alt="${param.alt}"><figcaption>${param.caption}</figcaption></figure>`
    }

    return `<img src="${param.file.url}" class="${imgClass}" alt="${param.alt}">`
};
