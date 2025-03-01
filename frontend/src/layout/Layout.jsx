import AdminLayout from "./AdminLayout";
import SiteLayout from "./SiteLayout";

const isAdmin = window.location.pathname.startsWith("/admin");//admin ile başılıyorsa true döner.başlamıyorsa false döner
console.log(isAdmin);


export const Layout = isAdmin ? AdminLayout : SiteLayout;

