import ghee from "../assets/dairy/ghee.jpg";
import lassi from "../assets/dairy/lasii.jpg";
import matta from "../assets/dairy/matta.jpg";
import Mcurd from "../assets/dairy/GMDahi.jpg";
import curd from "../assets/dairy/gDahi.jpg";
import paneer from "../assets/dairy/paneer.jpg";
import butter from "../assets/dairy/Butter.jpg";
import brownbread from "../assets/dairy/brownBreed.jpg";
import WhiteBread from "../assets/dairy/Whitebread.jpg";
import milk from "../assets/dairy/milk.jpg";


const DairyProduct = [
    {
        id:1,
        image:ghee,
        Name:"Anik Ghee",
        BrandName:"Anik",
        Type:"Ghee",
        Price:74,
        MRP:76,
        Avb:"In Stock",
        Unit:1,
        Qty:"100 ml"
    },
    {
        id:2,
        image:lassi,
        Name:"Gyan Lassi",
        BrandName:"Gyan",
        Type:"Lassi",
        Price:17,
        // MRP:80,
        Avb:"In Stock",
        Unit:1,
        Qty:"100 ml"
    },

    {
        id:3,
        image:matta,
        Name:"Gyan Matta",
        BrandName:"Gyan",
        Type:"Matta",
        Price:10,
        // MRP:40,
        Avb:"In Stock",
        Unit:1,
        Qty:"300 ml"
    },   
    {
        id:4,
        image:Mcurd,
        Name:"Gyan Meeta Dahi",
        BrandName:"Gyan",
        Type:"Curd",
        Price:20,
        // MRP:40,
        Avb:"In Stock",
        Unit:1,
        Qty:"200 g"
    },    
    
    {
        id:5,
        image:curd,
        Name:"Gyan Dahi",
        BrandName:"Gyna",
        Type:"Curd",
        Price:35,
        // MRP:35,
        Avb:"In Stock",
        Unit:1,
        Qty:"600 g"
    },
    {
        id:6,
        image:paneer,
        Name:"Gyna Panner",
        BrandName:"Gyna",
        Type:"Panner",
        Price:86,
        MRP:90,
        Avb:"In Stock",
        Unit:1,
        Qty:"200 g"
    },
    {
        id:7,
        image:butter,
        Name:"Gyna Butter",
        BrandName:"Gyna",
        Type:"Butter",
        Price:56,
        MRP:58,
        Avb:"In Stock",
        Unit:1,
        Qty:"100 g"
    },

    {
        id:8,
        image:brownbread,
        Name:"Brown Bread",
        BrandName:"Gomti Brown Bread",
        Type:"Brown Bread",
        Price:30,
        // MRP:30,
        Avb:"In Stock",
        Unit:1,
        Qty:"250 g"
    },   
    {
        id:9,
        image:WhiteBread,
        Name:"White Bread",
        BrandName:"Gomti Bread",
        Type:"White Bread",
        Price:25,
        // MRP:40,
        Avb:"In Stock",
        Unit:1,
        Qty:"300 g"
    },    
    
    {
        id:10,
        image:milk,
        Name:"Full Cream Milk",
        BrandName:"Gyan",
        Type:"Milk",
        Price:33,
        // MRP:35,
        Avb:"In Stock",
        Unit:1,
        Qty:"500 ml"
    },
]

export default DairyProduct;