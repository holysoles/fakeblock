import React from 'react'
import HeaderBar from "../components/HeaderBar";

export default function About() {
    return (
        <div>
            <HeaderBar />
            <div>
                <p>This open-source, privacy-minded project serves as a front-end viewing alternative to public pages on Facebook.
                    Fakeblock can run without client-side JavaScript, however it is recommended in order to increase
                    performance.
                </p>
                <p>Built with ReactJS, Next.js, and Node.js in order to statically render JSX Elements and to dynamically
                    render the rest of content server side.
                </p>
                <p>Built by holysoles, all code can be found on my Github Repo, and issues/bug reporting can be done there
                    as well.
                </p>
            </div>
        </div>
    );
}