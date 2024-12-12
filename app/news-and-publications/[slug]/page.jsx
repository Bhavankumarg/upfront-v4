import React from 'react';
import Posts from './Newspost'; // Adjust the import path accordingly

const Page = ({ params }) => {

    return (
        <>
            <div>
                <Posts slug={params.slug} />
            </div>
        </>
    );
};

export default Page;


