import React from "react";

function Footer() {
    return (
        <footer className='page-footer green lighten-3'>
            <div className='footer-copyright'>
                <div className='container'>
                    © 2020 - {new Date().getFullYear()} Copyright Text
                    <a className='grey-text text-lighten-4 right' href='#!'>
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
