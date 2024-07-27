import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">About Us.</h2>
                <p className="text-lg leading-relaxed">
                    We are a leading software house dedicated to delivering high-quality solutions to our clients. Our team of experts is committed to providing innovative and efficient services tailored to your business needs.
                </p>
            </div>
            <div className="mt-12 flex flex-wrap justify-around">
                <div className="flex flex-col items-center text-center m-4 max-w-xs">
                    <div className="text-6xl mb-4 text-green-500">🚀</div>
                    <h3 className="text-2xl font-semibold mb-2">Fast Delivery</h3>
                    <p className="text-base leading-relaxed">
                        We prioritize rapid delivery without compromising on quality, ensuring your projects are completed on time to meet your business goals.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center m-4 max-w-xs">
                    <div className="text-6xl mb-4 text-green-500">💡</div>
                    <h3 className="text-2xl font-semibold mb-2">Innovative Solutions</h3>
                    <p className="text-base leading-relaxed">
                        Our team leverages cutting-edge technologies to provide innovative solutions that drive business growth and efficiency.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center m-4 max-w-xs">
                    <div className="text-6xl mb-4 text-green-500">⚙️</div>
                    <h3 className="text-2xl font-semibold mb-2">Scalable Architecture</h3>
                    <p className="text-base leading-relaxed">
                        We design scalable and robust architectures that evolve with your business, ensuring long-term sustainability and performance.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center m-4 max-w-xs">
                    <div className="text-6xl mb-4 text-green-500">🎧</div>
                    <h3 className="text-2xl font-semibold mb-2">24/7 Support</h3>
                    <p className="text-base leading-relaxed">
                        Our dedicated support team is available around the clock to assist you with any issues or questions, ensuring smooth and uninterrupted operations.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
