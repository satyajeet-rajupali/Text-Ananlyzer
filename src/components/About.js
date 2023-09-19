import React from "react";

const About = (props) => {

    const darkThemeWithBorder = {
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white'
    }

    const lightThemeWithBorder = {
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid black'
    }

    const darkThemeWithoutBorder = {
        color: 'white',
        backgroundColor: 'black'
    }

    const lightThemeWithoutBorder = {
        color: 'black',
        backgroundColor: 'white'
    }

    return (
        <div className="container mb-5" style={props.mode === 'light' ? lightThemeWithoutBorder : darkThemeWithoutBorder}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={props.mode === 'light' ? lightThemeWithBorder : darkThemeWithBorder}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button" style={props.mode === 'light' ? lightThemeWithoutBorder : darkThemeWithoutBorder} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>What is Text-Analyzer?</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Your All-in-One Text Tool for Easy Analysis and Transformation. From converting text between uppercase and lowercase, copying and clearing content, to eliminating extra spaces, our web application offers it all. Plus, get insightful statistics on word count, character count, and estimated reading time, all with a sleek and informative preview. Optimize your text with Textutils today!
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={props.mode === 'light' ? lightThemeWithBorder : darkThemeWithBorder}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={props.mode === 'light' ? lightThemeWithoutBorder : darkThemeWithoutBorder} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Compatiblity with every browser</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Unlock Word Counting Magic: Our versatile word counter software is compatible with all major web browsers, including Chrome, Firefox, Internet Explorer, Safari, and Opera. It's the perfect tool for counting characters in various contexts, whether you're on Facebook, blogging, working with books, Excel documents, PDFs, or crafting essays. Count with ease and precision with our browser-friendly word counter.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={props.mode === 'light' ? lightThemeWithBorder : darkThemeWithBorder}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button collapsed" style={props.mode === 'light' ? lightThemeWithoutBorder : darkThemeWithoutBorder} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>What Text-Analyzer provides?</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapser" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>Here, are the key functionalities of the <strong>Text-Analyzer</strong>:</p>

                            <ul>
                                <li>
                                    <strong>Text Case Conversion:</strong> Seamlessly convert text between lowercase and uppercase, offering flexibility in text formatting.
                                </li>
                                <li>
                                    <strong>Text Copying:</strong> Simplify the process of copying text, making it quick and efficient.
                                </li>
                                <li>
                                    <strong>Text Clearing:</strong> Easily remove unwanted content, ensuring your text is clean and focused.
                                </li>
                                <li>
                                    <strong>Space Removal:</strong> Effortlessly eliminate extra spaces within the provided text, enhancing readability and presentation.
                                </li>
                                <li>
                                    <strong>Statistics Display:</strong> Access valuable statistics such as word count, character count, and estimated reading time for a deeper understanding of your content.
                                </li>
                                <li>
                                    <strong>Preview Feature:</strong> Enjoy a polished and informative preview of your text, allowing you to see how your content will appear.
                                </li>
                            </ul>

                            <p>These functionalities collectively empower users to enhance their text, streamline their writing process, and gain valuable insights, makes this application an invaluable tool for various text-related tasks.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;