import BannerImageComp from "@/components/BannerImageComp";
import EditBannerTemplate from "@/components/EditBannerTemplate";

export default function Home() {
  return (
    <div className="">
      <main className="m-16">
        <h1 className="text-center text-3xl">
          Click on edit icon to edit and Download banners{" "}
        </h1>
        <div className="bg-blue-500 p-10">
          <BannerImageComp />
          <div className="flex justify-center mt-5">
            <EditBannerTemplate />
          </div>
        </div>
      </main>
    </div>
  );
}
