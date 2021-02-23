import React from 'react';

const Press = () => {


// NOW Magazine
// H&M x Rethink 
// Fashion Magazine
// Toronto Life
// Cadette
// Queens Journal ​
// OCADu
// Narcity
// MARY YOUNG 
// https://knix.com/blogs/knix-blog/drawing-self-love-with-quinn-rockliff


    const pressLinks = [
        {
            company: 'CBC Arts',
            date: 'January 2021',
            url: 'https://www.cbc.ca/arts/by-drawing-her-body-over-and-over-quinn-rockliff-sees-herself-and-is-helping-others-do-the-same-1.5891645',
        },
        {
            company: 'Knix',
            date: 'May 2020',
            url: 'https://knix.com/blogs/knix-blog/drawing-self-love-with-quinn-rockliff',
        },
        {
            company: 'NUVO Magazine',
            date: 'August 2019',
            url: 'https://nuvomagazine.com/daily-edit/interdisciplinary-feminist-artist-quinn-rockliff',
        },
        {
            company: 'Mary Young',
            date: 'February 2019',
            url: 'http://www.itsmaryyoung.ca/home/2019/1/29/quinn-rockliff',
        },
        {
            company: 'Fashion Magazine',
            date: 'January 2019',
            url: 'https://fashionmagazine.com/culture/emerging-female-artists-2019/',
        },
        {
            company: 'OCAD University',
            date: 'October 2018',
            url: 'https://www2.ocadu.ca/news/digital-futures-grad-student-quinn-rockliff-collabs-with-h-m-rethink-breast-cancer',
        },
        {
            company: 'H&M x Rethink (featured on Fashion Magazine)',
            date: 'September 2018',
            url: 'https://fashionmagazine.com/style/hm-rethink-breast-cancer-shirts/'
        },
        {
            company: 'Cadette Jewelry',
            date: 'September 2018',
            url: 'https://cadettejewelry.com/blogs/cadette-women/quinn-rockliff',
        },
        {
            company: 'Narcity',
            date: 'February 2018',
            url: 'https://www.narcity.com/en-ca/life/toronto/32-toronto-girls-who-are-absolutely-killing-it-on-instagram-right-now',
        },
        {
            company: 'NOW Magazine',
            date: 'January 2018',
            url: 'https://nowtoronto.com/lifestyle/love-your-body/quinn-rockliff-visual-artist/'
        },
        {
            company: 'Toronto Life',
            date: 'October 2017',
            url: 'https://torontolife.com/city/life/inside-make-lemonade-new-co-working-space-women/',
        },
        {
            company: 'Queens Journal',
            date: 'March 2017',
            url: 'https://www.queensjournal.ca/story/2017-03-16/arts/quinn-rockliffs-project-to-free-the-female-form/',
        },
    ];

    return (
        <section className="wrapper fadeIn press">
            <h2>Press</h2>

            <ul className="pressList">
                {
                    pressLinks.map((item) => (
                        <li>
                            <a href={item.url} target="blank">
                            <span className="company">{item.company}</span>
                            <span className="date"> / {item.date}</span>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};

export default Press;
