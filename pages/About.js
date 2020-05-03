import React from 'react'
import HeaderBar from "../components/nav/HeaderBar";

export default function About() {
    return (
        <div>
            <HeaderBar />
            <div>
                <p>This open-source, privacy-minded project serves as a front-end viewing alternative to public pages on Facebook.
                    Fakeblock can run without client-side JavaScript, however it is recommended to allow a better UI. The only
                    Javascript that runs client side is generation of UI components and onClick event listeners.
                </p>
                <p>Built with ReactJS, Next.js, and Node.js in order to statically render JSX Elements and to dynamically
                    render the rest of content server side.
                </p>
                <p>Built by holysoles, all code can be found on my
                    <a href={'https://holysoles.github.com/fakeblock'}>
                        Github Repo
                    </a>
                    , and issues/bug reporting can be done there
                    as well.
                </p>
            </div>
        </div>
    );
}