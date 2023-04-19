import bc from "./assets/genres/bc.jpg";
import dn from "./assets/genres/dn.jpg";
import reZero from "./assets/genres/rezero.png";
import hxh from "./assets/genres/hxh.jpg";

const genres = [
    {
        id: 0,
        imageUrl: bc,
        genre: "Shonen",
        desc: "This genre is targeted towards young boys and is characterized by its focus on action, adventure, and passionate friendships. This genre often follows male leads as they go on epic quests, overcome obstacles, and face off against formidable foes.",
    },
    {
        id: 1,
        imageUrl: dn,
        genre: "Seinen",
        desc: "This genre often features darker, grittier themes and tackles more complex thought-provoking concepts. Seinen anime is known for its mature storytelling, morally grey characters and societal critique. Death Note and Monster are among the top anime of this genre.",
    },
    {
        id: 2,
        imageUrl: reZero,
        genre: "Isekai",
        desc: "Isekai anime is a genre that features a protagonist who is transported to another world or dimension. This genre often explores the protagonist's struggles to adapt to their new environment and to find their place in this new world. Anime like Re:Zero and Sword Art Online are some of the most popular anime of this genre.",
    },
    {
        id: 3,
        imageUrl: hxh,
        genre: "Adventure",
        desc: "If you are a fan of exploration, discovery and exciting and unpredictable plot twists then this genre is tailored for you. It features protagonists who embark on epic journeys, visit exotic locations, and while making life-long friendships along the way. One Piece and Fullmetal Alchemist: Brotherhood completely captures the essence of this genre.",
    },
];

export default genres;