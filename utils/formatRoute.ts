import { ERoute } from "enum/route";

export const formatRoute = (route: ERoute, value: string | number): string => {
    return route.replace(":id", value.toString());
};
