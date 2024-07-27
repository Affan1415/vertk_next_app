import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <div className="text-center mt-12 mb-8">
                <h1 className="text-5xl font-bold text-gray-800 font-poppins ">What Do We Offer?</h1>
                <p className=" text-gray-700 mt-4"
                    style={{ fontSize: "1.2rem" }}>From innovative digital solutions to comprehensive marketing strategies, we empower businesses to thrive in the digital age.
                    Partner with us to transform your ideas into impactful realities.</p>
                {/* <p className="text-lg text-gray-700 mt-2"></p> */}
                {/* <p className="text-lg text-gray-700 mt-2"></p> */}
                <HoverEffect items={projects} />
            </div>
        </div>

    );
}
export const projects = [
    {
        title: "Web Development",
        description:
            "Custom web development services tailored to your business needs, from simple landing pages to complex web applications.",
        link: "#",
    },
    {
        title: "Mobile App Development",
        description:
            "Expertise in developing native and cross-platform mobile applications for iOS and Android platforms.",
        link: "#",
    },
    {
        title: "Ecommerce Store Setup",
        description: "End-to-end ecommerce solutions to help you set up and manage your online store, from product listings to payment gateways.",
        link: "#",
    },
    {
        title: "Software Consulting",
        description:
            "Professional consultancy services to help you make informed decisions about your software projects and technology stack.",
        link: "#",
    },
    {
        title: "Cloud Solutions",
        description:
            "Cloud-based solutions including migration, architecture design, and managed services to optimize your business operations.",
        link: "#",
    },
    {
        title: "Quality Assurance",
        description:
            "Comprehensive quality assurance and testing services to ensure the reliability, security, and performance of your software products.",
        link: "#",
    },
];
