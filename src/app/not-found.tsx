import { getLocation } from "@/helpers/routesHelper";
import { redirect } from "next/navigation";

export default function NotFound() {
    redirect(getLocation() + '/not-found');
}