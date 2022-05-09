interface ImgTypes {
    stretched: boolean;
    withBorder: boolean;
    withBackground: boolean;
    file: {
        url: string;
    };
    caption: string;
    alt: string;
    srcSet: string;
}

export const image = (param: ImgTypes) => {
    if (param.srcSet) {
        return param.srcSet;
    }

    const imgClass = `${param.stretched ? 'img-fullwidth' : ''} ${
        param.withBorder ? 'image-withBorder' : ''
    } ${param.withBackground ? 'img-background' : ''}`;


    if (param.caption) {
        return `<figure><img src="${param.file.url}" class="${imgClass}" alt="${param.alt}"><figcaption>${param.caption}</figcaption></figure>`
    }

    return `<img src="${param.file.url}" class="${imgClass}" alt="${param.alt}">`
};
