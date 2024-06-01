import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">About Us.</h2>
                <p className="text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam dapibus semper. Proin nunc nisl, dignissim at nisl nec, ultrices consectetur dolor. Fusce mattis nisi ut sem vestibulum, vel finibus sem posuere. Nullam at arcu ligula. Proin vehicula, ipsum id feugiat vestibulum, ipsum urna aliquet ipsum, at scelerisque velit tortor vel nibh.
                </p>
            </div>
            <div className="mt-12 flex flex-wrap justify-around">
                <div className="flex flex-col items-center text-center m-4 max-w-xs">
                    <div className="text-6xl mb-4 text-green-500">🌞</div>
                    <h3 className="text-2xl font-semibold mb-2">Energy Saving</h3>
                    <p className="text-base leading-relaxed">
                        Lorem ipsum dolor sit amet, conetur adip elit. Aliquam aliquam dapibus semper. Proins nunc nisl, dignissim at nisl nec, ultrices consectetur door.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center m-4 max-w-xs">
                    <div className="text-6xl mb-4 text-green-500">🔋</div>
                    <h3 className="text-2xl font-semibold mb-2">Smart technology</h3>
                    <p className="text-base leading-relaxed">
                        Lorem ipsum dolor sit amet, conetur adip elit. Aliquam aliquam dapibus semper. Proins nunc nisl, dignissim at nisl nec, ultrices consectetur door.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center m-4 max-w-xs">
                    <div className="text-6xl mb-4 text-green-500">🌿</div>
                    <h3 className="text-2xl font-semibold mb-2">Eco System</h3>
                    <p className="text-base leading-relaxed">
                        Lorem ipsum dolor sit amet, conetur adip elit. Aliquam aliquam dapibus semper. Proins nunc nisl, dignissim at nisl nec, ultrices consectetur door.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center m-4 max-w-xs">
                    <div className="text-6xl mb-4 text-green-500">🎧</div>
                    <h3 className="text-2xl font-semibold mb-2">Customer Support</h3>
                    <p className="text-base leading-relaxed">
                        Lorem ipsum dolor sit amet, conetur adip elit. Aliquam aliquam dapibus semper. Proins nunc nisl, dignissim at nisl nec, ultrices consectetur door.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
