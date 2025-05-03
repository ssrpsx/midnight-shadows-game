"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Instagram, Twitter, Youtube } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

interface ItemProps {
    id: number;
    name: string;
    imageUrl: string;
    instagram?: { link: string; label: string };
    youtube?: { link: string; label: string };
    twitter?: { link: string; label: string };
}

const items: ItemProps[] = [
    {
        id: 1,
        name: "IU",
        imageUrl: "https://storage.googleapis.com/atime-media-prod/content/5029dfed-a3bd-48a2-8e12-ac38c0d8e692.jpeg",
        instagram: { link: "https://www.instagram.com/dlwlrma/", label: "dlwlrma" },
        youtube: { link: "https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww", label: "이지금 [IU Official]" },
    },
    {
        id: 2,
        name: "Minami Hamabe",
        imageUrl: "https://i.pinimg.com/originals/52/1d/c8/521dc855a87f0781982d1475d721e7d2.jpg",
        instagram: { link: "https://www.instagram.com/minami_hamabe.official/", label: "minami_hamabe.official" },
        twitter: { link: "https://x.com/MINAMI373HAMABE", label: "@MINAMI373HAMABE" },
    },
    {
        id: 3,
        name: "IU",
        imageUrl: "https://storage.googleapis.com/atime-media-prod/content/5029dfed-a3bd-48a2-8e12-ac38c0d8e692.jpeg",
        instagram: { link: "https://www.instagram.com/dlwlrma/", label: "dlwlrma" },
        youtube: { link: "https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww", label: "이지금 [IU Official]" },
    },
    {
        id: 4,
        name: "IU",
        imageUrl: "https://storage.googleapis.com/atime-media-prod/content/5029dfed-a3bd-48a2-8e12-ac38c0d8e692.jpeg",
        instagram: { link: "https://www.instagram.com/dlwlrma/", label: "dlwlrma" },
        youtube: { link: "https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww", label: "이지금 [IU Official]" },
    },
];

export default function TeamsPage() {
    return (
        <div className="w-full">
            <div className="mt-8">
                <h1 className="text-4xl">Teams</h1>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {items.map((item) => (
                        <div key={item.id} className="flex flex-col items-center justify-center px-4">
                            <AspectRatio ratio={1}>
                                <motion.div
                                    className="relative flex items-center justify-center w-full h-full rounded-lg group overflow-hidden"
                                >
                                    <img
                                        src={item.imageUrl}
                                        alt={item.name}
                                        className="absolute inset-0 object-cover w-full h-full"
                                    />
                                    <div className="absolute inset-0 bg-muted/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full h-full">
                                        <div className="flex flex-col gap-4 justify-center items-center w-full h-full">
                                            <h1>{item.name}</h1>
                                            {item.instagram && (
                                                <Link href={item.instagram.link} target="_blank" className="flex items-center gap-2">
                                                    <Instagram size={18} />
                                                    {item.instagram.label}
                                                </Link>
                                            )}
                                            {item.youtube && (
                                                <Link href={item.youtube.link} target="_blank" className="flex items-center gap-2">
                                                    <Youtube size={20} />
                                                    {item.youtube.label}
                                                </Link>
                                            )}
                                            {item.twitter && (
                                                <Link href={item.twitter.link} target="_blank" className="flex items-center gap-2">
                                                    <Twitter size={20} />
                                                    {item.twitter.label}
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </AspectRatio>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
