"use client"
import Image from "next/image";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import DonatePage from "@/components/donate/donate";
import Link from "next/link";

const articles = [
  {
    title: "ยาน Lucy เดินทางถึงดาวเคราะห์น้อย Donaldjohanson เจอว่าเป็นรูปร่างสุดแปลก",
    date: "April 22, 2025",
    image: "https://spaceth.co/wp-content/uploads/2025/05/sls-aretemis-i-768x402.jpg",
    link: "#link1",
  },
  {
    title: "ทำความเข้าใจกระบวนการค้นพบหลักฐานของชีวิตบนดาวเคราะห์นอกระบบสุริยะ K2-18 b",
    date: "April 17, 2025",
    image: "https://spaceth.co/wp-content/uploads/2025/05/sls-aretemis-i-768x402.jpg",
    link: "#link2",
  },
  {
    title: "มองสถาปัตยกรรมของ Lunar Gateway ทำไมโมดูลถึงเล็กกว่าสถานีอวกาศนานาชาติ",
    date: "April 15, 2025",
    image: "https://spaceth.co/wp-content/uploads/2025/05/sls-aretemis-i-768x402.jpg",
    link: "#link3",
  },
  {
    title: "รู้จักกับ Biomass ดาวเทียมตรวจวัดความหนาแน่นของผืนป่า ดวงใหม่ของ ESA",
    date: "April 14, 2025",
    image: "https://spaceth.co/wp-content/uploads/2025/05/sls-aretemis-i-768x402.jpg",
    link: "#link4",
  },
  {
    title: "ส่องร่างงบ NASA และ NOAA ปี 2026 ตัดงบกว่าครึ่ง เสี่ยงยุบกล้อง Nancy Roman และ Mars Sample Return",
    date: "April 12, 2025",
    image: "https://spaceth.co/wp-content/uploads/2025/05/sls-aretemis-i-768x402.jpg",
    link: "#link5",
  },
  {
    title: "เจาะลึก Axiom Mission 4 ภารกิจอวกาศเอกชนที่สองของปี 2025",
    date: "April 12, 2025",
    image: "https://spaceth.co/wp-content/uploads/2025/05/sls-aretemis-i-768x402.jpg",
    link: "#link6",
  },
];


export default function Home() {
  return (
    <div className="mt-8 w-full">

      <div className="h-[calc(100dvh-133px)]">
        <div className="relative w-full h-[512px] rounded-xl overflow-hidden">
          <motion.video
            initial={{ height: 0 }}
            animate={{ height: 512 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src="/videoplayback.mp4" type="video/mp4" />
          </motion.video>
          {/* <motion.p className="absolute bottom-20 left-0 text-white text-lg p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              N7 to die
            </motion.p>
            <Button asChild className="absolute bottom-0 left-0 p-8">
              <Link href={"/product/n7todie"}>
                Get Game
              </Link>
            </Button> */}

          <motion.div
            className="absolute bottom-0 left-0 text-white text-lg p-8 flex flex-col items-start space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" ,delay: 0.5}}
          >
            <p className="font-medium text-4xl">N7 to die</p>
            <Button asChild variant={"secondary"} className="px-4 py-2">
              <Link href="/product/n7todie" aria-label="Get the game N7 to die">
                Get Game
              </Link>
            </Button>
          </motion.div>


        </div>
        <div className="mt-20">

          <motion.h1
            className="mt-8 text-4xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
          >
            Welcome To SevenBuild
          </motion.h1>
          <motion.h1
            className="mt-4 text-xl text-muted-foreground font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          >
            hello. SevenBuild is an innovative game development team dedicated to creating immersive gaming experiences that captivate players worldwide. With a passion for storytelling, cutting-edge technology, and dynamic gameplay, SevenBuild thrives at the intersection of creativity and precision.
          </motion.h1>

        </div>
      </div>

      <motion.div className="mt-16 flex flex-col gap-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }}>
        <h1 className="text-2xl">Project</h1>
        <Card className="w-[350px]">
          <CardHeader className="space-y-4">
            <CardTitle className="text-xl">N7 to die</CardTitle>
            <CardDescription className="space-x-4">
              <Badge variant={"secondary"}>2D</Badge>
              <Badge variant={"secondary"}>Horror</Badge>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img src="https://media.discordapp.net/attachments/1366061375633231892/1366850279042977792/34side-1.png?ex=68170f45&is=6815bdc5&hm=d8fc756a5c5a66ab8964d322c72f9c817f27f0090abd79d888803f0522c97164&=&format=webp&quality=lossless" />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button size={"sm"}>Explore</Button>
          </CardFooter>
        </Card>
      </motion.div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {articles.map((article, index) => (
          <div key={index} className="rounded-2xl">
            <a href={article.link}>
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 object-cover "
              />
            </a>
            <div className="p-4">
              <a href={article.link} className="text-xl font-bold text-gray-800 hover:underline">
                {article.title}
              </a>
              <p className="text-sm text-gray-500 mt-2">{article.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
