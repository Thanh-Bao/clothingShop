import { ProductList } from "@/constants";

export default function getStaticProps() {
    try {
      const { NewDevice, LikeDevice, DiscountDevice, GPSCar, GPSMoto, Moniter, VideoUrl } = ProductList[0];
  
      // Combine all the product arrays into one array if needed
      const allProducts = [...NewDevice, ...LikeDevice, ...DiscountDevice, ...GPSCar, ...GPSMoto, ...Moniter];
  
      // Extract categories from ProductList
      const categories = Object.keys(ProductList[0]);
  
      console.log("Categories from getStaticProps:", categories);
  
      return {
        props: {
          products: allProducts,
          categories,
        },
      };
    } catch (error) {
      console.error("Error in getStaticProps:", error);
      return {
        props: {
          products: [],
          categories: [],
        },
      };
    }
  }
  