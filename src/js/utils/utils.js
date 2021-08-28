export const translator = ({ en, sm }) => (`
    <span class="english" data-lang="english" aria-hidden="true">${en}</span>
    <span class="samoan" data-lang="samoan" aria-hidden="true">${sm}</span>
`);

export const getPic = (img, images) => {
    let pfp = false;

    if (images[img.slug]) {
        pfp = {
            position: '',
            slug: ''
        };

        if (images[img.slug].jpeg &&
            images[img.slug].jpeg.length > 0
        ) {
            pfp.slug = images[img.slug].jpeg;
        } else if (images[img.slug].jpg &&
            images[img.slug].jpg.length > 0
        ) {
            pfp.slug = images[img.slug].jpg;
        } else if (images[img.slug].png &&
            images[img.slug].png.length > 0
        ) {
            pfp.slug = images[img.slug].png;
        }

        pfp.position = img.position;
    }

    return pfp;
}