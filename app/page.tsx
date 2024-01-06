import BannerBase from "@/components/uiParts/banner/BannerBase";
import FeedBase from "@/components/uiParts/feed/FeedBase";
import RightMenuBase from "@/components/uiParts/right-menu/RightMenuBase";


export default function Home() {
  return (
    <main className="px-10 mt-4">
      <BannerBase />
      <div className="md:flex mt-6">
      <FeedBase />
      <RightMenuBase />

      </div>
    </main>
  )
}
