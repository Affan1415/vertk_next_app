'use client'
import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

interface Project {
    title: string;
    description: string;
    src: string;
    link: string;
    color: string;
}

const projects: Project[] = [
    {
        title: "Matthias Leidinger",
        description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
        src: "rock.jpg",
        link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
        color: "#f4f4f4"
    },
    {
        title: "Clément Chapillon",
        description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
        src: "tree.jpg",
        link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
        color: "#f4f4f4"
    },
    {
        title: "Zissou",
        description: "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
        src: "water.jpg",
        link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
        color: "#f4f4f4"
    },
    {
        title: "Mathias Svold and Ulrik Hasemann",
        description: "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
        src: "house.jpg",
        link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
        color: "#f4f4f4"
    },
    {
        title: "Mark Rammers",
        description: "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
        src: "cactus.jpg",
        link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
        color: "#f4f4f4"
    }
];

const Card: React.FC<{ i: number, title: string, description: string, src: string, link: string, color: string, progress: any, range: number[], targetScale: number }> = ({ i, title, description, src, link, color, progress, range, targetScale }) => {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ backgroundColor: color, scale, top: `calc(-5vh + ${0}px)` }}
                className="flex flex-col relative top-[-25%] h-[500px] w-[800px] p-[50px] border-4 border-black origin-top"
            >
                <h2 className="text-center m-0 text-[28px]">{title}</h2>
                <div className="flex h-full mt-[50px] gap-[50px]">
                    <div className="w-[40%] relative top-[10%]">
                        <p className="text-[16px] first-letter:font-title">{description}</p>
                        <span className="flex items-center gap-[5px]">
                            <a href={link} target="_blank" className="text-[12px] underline cursor-pointer">See more</a>
                            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black" />
                            </svg>
                        </span>
                    </div>
                    <div className="relative w-[60%] h-full rounded-[25px] overflow-hidden">
                        <motion.div className="w-full h-full" style={{ scale: imageScale }}>
                            <Image fill src={`/${src}`} alt="image" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

const ServicesSection: React.FC = () => {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <main ref={container} className="relative  flex flex-col items-center">

            <div className="flex flex-wrap justify-center gap-6">
                {
                    projects.map((project, i) => {
                        const targetScale = 1 - ((projects.length - i) * 0.05);
                        return (
                            <Card
                                key={`p_${i}`}
                                i={i}
                                {...project}
                                progress={scrollYProgress}
                                range={[i * .25, 1]}
                                targetScale={targetScale}
                            />
                        );
                    })
                }
            </div>
        </main>

    );
}

export default ServicesSection;
