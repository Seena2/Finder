import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/About.tsx"),
  // nested routes or dynamic params
  ...prefix("category", [
    //route("", "routes/Category.tsx"), // category/item or
    index("routes/Category.tsx"), // hence it is the root/parent route of this prefix
    route(":itemName", "routes/Item.tsx"), // category/item/itemName
  ]),
] satisfies RouteConfig;
