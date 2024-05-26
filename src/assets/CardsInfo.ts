export default [{title: "The Complete 2024 Web Development BootCamp.", author: "Dr.Angel Yu", rating: 4.5, totalRatings: "(378,179)", price: "₹3,099", bestSeller: true, img: "card1.jpeg"},
{title: "The Web Developer Bootcamp 2024", author: "Colt Steele", rating: 4.7, totalRatings: "(272,475)", price: "₹3,099", bestSeller: false, img: "card2.jpeg"},
{title: "Web Development Masterclass - Online Certification Course", author: "YouAccel Training", rating: 4.4, totalRatings: "(9,796)", price: "₹3,099", bestSeller: false, img: "card3.jpeg"},
{title: "Practical Web Development: 22 Courses in 1", author: "Creative online School", rating: 4.3, totalRatings: "(4,303)", price: "₹3,099", bestSeller: false, img: "card4.jpeg"},
{title: "The Complete Web Developer Course 3.0", author: "Rob Percival, Codestars • over 2 million students worldwide!", rating: 4.5, totalRatings: "(72,091)", price: "₹4,499", bestSeller: false, img: "card5.jpeg"},
{title: "Internet and Web Development Fundamentals", author: "YouAccel Training", rating: 4.3, totalRatings: "(1,696)", price: "₹1,799", bestSeller: false, img: "card6.jpeg"},
{title: "How the Internet Works & the Web Development Process", author: "YouAccel Training", rating: 4.2, totalRatings: "(1,775)", price: "₹1,299", bestSeller: false, img: "card7.jpeg"},
{title: "The Complete 2023 PHP Full Stack Web Developer Bootcamp", author: "Srini Vanamala", rating: 4.5, totalRatings: "(5,319)", price: "₹5,900", bestSeller: false, img: "card8.jpeg"},
{title: "Pre-Programming: Everything you need to know before you code", author: "Evan Kimbrell", rating: 4.6, totalRatings: "(12,060)", price: "₹3,699", bestSeller: false, img: "card9.jpeg"},
{title: "The Complete 2020 Fullstack Web Developer Course", author: "Kalob Taulien", rating: 4.6, totalRatings: "(7,377)", price: "₹3,699", bestSeller: false, img: "card10.jpeg"},
{title: "CSS, Bootstrap ,JavaScript, Web Development Course", author: "PROPER DOT INSTITUTE", rating: 4.4, totalRatings: "(972)", price: "₹2,299", bestSeller: false, img: "card11.jpeg"},
{title: "The Advanced Web Developer Bootcamp", author: "Colt Steele, Elie Schoppik, Tim Garcia, Matt Lane", rating: 4.6, totalRatings: "(9,313)", price: "₹3,099", bestSeller: false, img: "card12.jpeg"},
{title: "Ultimate Web Designer & Web Developer Course", author: "Brad Hussey", rating: 4.6, totalRatings: "(14,432)", price: "₹3,699", bestSeller: true, img: "card13.jpeg"},
{title: "The Full Stack Web Development Bootcamp (Frontend & Backend)", author: "Faisal Zamir, Jafri Code", rating: 4.5, totalRatings: "(395)", price: "₹2,499", bestSeller: false, img: "card14.jpeg"},
{title: "Become a Certified Web Developer: HTML, CSS and JavaScript", author: "SkillSprints Inc., Mark Lassoff", rating: 4.5, totalRatings: "(3,728)", price: "₹3,099", bestSeller: false, img: "card15.jpeg"},
{title: "The Complete Web Development Course - Build 15 Projects", author: "Development Island (UK)", rating: 4.4, totalRatings: "(8,350)", price: "₹3,699", bestSeller: false, img: "card16.jpeg"}, ]

interface CardObj{
    title: string;
    author: string;
    rating: number;
    totalRatings: string;
    price: string;
    bestSeller: boolean;
    img: string;
}

export type {CardObj}