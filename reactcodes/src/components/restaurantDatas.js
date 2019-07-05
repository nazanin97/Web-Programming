import FoodT from './foodT';
import MyComment from './commentTest';
const restaurants = [
    {
        _id: "1",
        name: "دان تاون",
        logo: "https://dist.reyhoon-static.com/uploads/images/restaurants/logos/downtown_6473_1549979103.jpeg@!branch_logo_web_default",
        averageRate: 3,
        categories: [
            "pizza", "salad"
        ],
        address: "address line",
        openingTime: 10,
        closingTime: 3,
        foods: {
            FoodT
        },
        comments: {
            MyComment
        }
    },
    {
        id: "12",
        name: "اژدر زاپاتا",
        logo: "https://dist.reyhoon-static.com/uploads/images/restaurants/logos/ajdar-zapata_433_1537774478.jpeg@!branch_logo_web_default",
        averageRate: 0,
        categories: [
            "pizza", "buger"
        ],
        address: "address line",
        openingTime: 10,
        closingTime: 22,
        foods: {
            FoodT
        },
        comments: {
            MyComment
        }
    },
    {
        id: "3",
        name: "پنجره",
        logo: "https://dist.reyhoon-static.com/uploads/images/restaurants/logos/panjere-saadat-abad_3175_1520945332.jpeg@!branch_logo_web_default",
        averageRate: 5,
        categories: [
            "salad", "kebab"
        ],
        address: "address line",
        openingTime: 10,
        closingTime: 18,
        foods: {
            FoodT
        },
        comments: {
            MyComment
        }
    }
]
export default restaurants;