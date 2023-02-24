const projects = [
    {
        id: 1,
        title: 'MyReads',
        description:
            'Ebook app where you can manage your favourite books by searching for them and adding them to their specified shelves',
        tags: ['Ebooks', 'Responsive', 'ReactJs', 'API server', 'JavaScript'],
        thumbnail: process.env.PUBLIC_URL + '/Assets/Images/myreads.png',
        link: 'https://myreads-seifelkady.netlify.app',
    },
    {
        id: 3,
        title: 'MERN Stack Restaurant website',
        description:
            'Landing page for a seafood restaurant. User can preform CRUD operations on this app to manipulate menu items that are saved to a dedicated database.',
        tags: ['Branding', 'CRUD', 'Responsive', 'MERN'],
        thumbnail: process.env.PUBLIC_URL + '/Assets/Images/seafood.png',
        link: 'https://github.com/Sayyfz/seafood-site',
    },
    {
        id: 2,
        title: 'E-Commerce Page UI',
        description: 'Responsive product page using React, HTML and CSS',
        tags: ['Branding', 'E-Commerce', 'React', 'Responsive', 'JavaScript'],
        thumbnail: process.env.PUBLIC_URL + '/Assets/Images/e-commerce-page.png',
        link: 'https://e-commerce-page-seifelkady.netlify.app/',
    },
    {
        id: 6,
        title: 'Image Processor',
        description:
            'Full-Stack Application responsible for doing various image processing operations on a given image and saving it to the server file system, then it gets previewed in the Front-End',
        tags: ['Full-Stack', 'React', 'Node', 'Express'],
        thumbnail: process.env.PUBLIC_URL + '/Assets/Images/image-processor.png',
        link: 'https://github.com/Sayyfz/Image-Processing-App',
    },
];

export default projects;
