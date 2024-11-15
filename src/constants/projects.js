const projects = [
    {
        id: 8,
        title: 'Law Firm Website',
        description:
            'A freelance project to create a professional website for a lawyer. Features include service showcases, case studies, and a secure contact form for client inquiries. The website is fully responsive and optimized for performance across devices.',
        tags: ['JavaScript', 'CSS', '.NET'],
        thumbnail: process.env.PUBLIC_URL + '/Assets/Images/law-firm.png',
        link: 'https://lavoiicee.net/',
    },    
    {
        id: 7,
        title: 'E-Watch Store',
        description:
            'A full-stack application simulating a real e-commerce site for purchasing watches. Features include intuitive product browsing, advanced search, shopping cart functionality, user profiles, secure Stripe checkout, and product filtering.',
        tags: ['Full-Stack', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
        thumbnail: process.env.PUBLIC_URL + '/Assets/Images/e-watch.png',
        link: 'https://github.com/Sayyfz/store-front-app/',
    },
    {
        id: 1,
        title: 'MyReads',
        description:
            'Ebook app where you can manage your favourite books by searching for them and adding them to their specified shelves',
        tags: ['React', 'JavaScript', 'API server'],
        thumbnail: process.env.PUBLIC_URL + '/Assets/Images/myreads.png',
        link: 'https://myreads-seifelkady.netlify.app',
    },
    {
        id: 3,
        title: 'MERN Stack Restaurant website',
        description:
            'Landing page for a seafood restaurant. User can preform CRUD operations on this app to manipulate menu items that are saved to a dedicated database.',
        tags: ['React', 'Node', 'Express', 'MongoDB', 'CRUD'],
        thumbnail: process.env.PUBLIC_URL + '/Assets/Images/seafood.png',
        link: 'https://github.com/Sayyfz/seafood-site',
    },
    {
        id: 2,
        title: 'E-Commerce Page UI',
        description: 'Responsive product page using React, HTML and CSS',
        tags: ['E-Commerce', 'React', 'JavaScript'],
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
