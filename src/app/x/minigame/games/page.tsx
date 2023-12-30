import HomeStage from "@/dom/organ/stage/HomeStage";
import Link from "next/link";
import Image from "next/image";


export default function Home() {
  

  return (
    <main className="mainbackground h-100 py-8  flex-center h-min-100vh" >
      <Link href="/" className="z-600 nodeco pl-8 Q_xs_pl-2 pos-abs top-0 mb-8 left-0 opaci-chov--50" >
          <div className="flex gap-1 pa-2 flex-justify-start" >
            <div className="tx-lx" > 
              <Image className="box-shadow-5-b bord-r-100p border-white noverflow"
               alt="asd" src="/wegame2.jpg" width={48} height={48} />
            </div>
            <div className="tx-lx tx-white tx-altfont-1 " > WeGame </div>
          </div>
      </Link>
      <h1 className="tx-white tx-xxxl">Minigames</h1>
      {/* <HomeStage>
      </HomeStage> */}
    </main>
  )
}
