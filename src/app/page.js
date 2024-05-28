import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <>
      <LandingPage />
      <div className="relative pb-4">
        <Header />
      </div>
    </>
  );
}
