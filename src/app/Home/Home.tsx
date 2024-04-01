import style from "./home.module.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className={style.home}>
      <div className="red-blob ">
        {/* <img src="redBlob.png" width={500} height={500} alt="" /> */}
      </div>

      <div className="central-card">
        <Card className="shadow-md backdrop-filter backdrop-blur-md border rounded-3xl bg-[#1D1E1D] border-[#363736] pt-4 text-white">
          <CardHeader>
            <CardTitle className="flex justify-center items-center text-3xl">
              Hey, I'm
              <div className="text-white flex justify-center items-center pl-2  m-2 rounded-xl bg-[#9A63F5]">
                <p> Sagar</p>
                <div>
                  <img
                    className="w-[55px] relative top-1"
                    src="me.webp"
                    alt=""
                  />
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="">
            <div className="flex justify-center items-center text-3xl font-medium">
              I'm a
              <div className="text-white flex justify-center items-center p-2  m-2 rounded-xl bg-[#F69851]">
                Software Developer,
              </div>
            </div>
            <div className="flex justify-center items-center text-3xl font-medium">
              currently at
              <div className="text-white flex justify-center items-center p-2  m-2 rounded-xl bg-[#38a93b]">
                Enigma
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
