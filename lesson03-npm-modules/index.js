import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";

console.log("🚀 ~ Formated Date", format(new Date(), "yyyy-MM-dd\tHH:mm:ss"));

console.log("🚀 ~ UUID", uuidv4());
