import { OrderSystem } from "../_components/order-system";
import { business } from "../../config/business";
import { menuSections } from "../../config/menu";

export default function OrderPage() {
  return <OrderSystem restaurantName={business.name} menu={menuSections} minimumDelivery={15} collectionMessage="Ready in around 20–30 minutes." />;
}
