import Footer from "@/components/Footer";
import "./../globals.css";
import SearchHeader from "@/components/SearchHeader";

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
