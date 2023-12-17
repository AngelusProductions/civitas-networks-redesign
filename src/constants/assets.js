export const bucketURL = 'https://storage.googleapis.com/civitas-networks'

export default {
    logos: {
        light: `${bucketURL}/logos/logoLight.svg`,
        dark: `${bucketURL}/logos/logoDark.svg`,
    },
    icons: {
        burger: `${bucketURL}/icons/burger.svg`,
        contact: `${bucketURL}/icons/contact.svg`,
    },
    cFlakes: {
        home: {
            hero: {
                one: `${bucketURL}/cFlakes/cFlakesHomeHero1.svg`,
                two: `${bucketURL}/cFlakes/cFlakesHomeHero2.svg`,
            },
            about: {
                one: `${bucketURL}/cFlakes/cFlakesHomeAbout1.svg`,
                two: `${bucketURL}/cFlakes/cFlakesHomeAbout2.svg`,
                three: `${bucketURL}/cFlakes/cFlakesHomeAbout3.svg`,
            },
            services: {
                one: `${bucketURL}/cFlakes/cFlakesHomeServices1.svg`,
            },
        }
    },
    home: {
        hero: `${bucketURL}/home/homeHero.mp4`,
        about: `${bucketURL}/home/homeAbout.mp4`,
        services: `${bucketURL}/home/homeServices.webp`,
    }
}