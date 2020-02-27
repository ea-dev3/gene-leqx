let siteMetadata = {
    title: `GeneLeqx`,
    capitalizeTitleOnHome: true,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.jpg`,
    introTag: `ART | MUSIC`,
    description: `New and exclusive releases below: `,
    author: `eugeneAlex`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "BIO",
            url: "/about"
        },
        {
            name: "EXCLUSIVES",
            url: "/blog"
        },
        {
            name: "MUSIC",
            url: "/portfolio"
        },
        {
            name: "WAT UP!!",
            url: "/contact"
        }
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy"
        },
        {
            name: "GitHub",
            url: "https://github.com/eadev3/geneleqx"
        }
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://web.facebook.com/geneleqx"
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://twitter.com/geneleqx"
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/geneleqx"
        },
        {
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "https://www.youtube.com/"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "./test.json",
        description: `Hello there, get in touch with me `,
        mail: "contact@geneleqx.com",
        phone: "000-000-0000",
        address: "1234 \nLocation \nLocation"
    }
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-copy-linked-files",
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents/`
            }
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true
            }
        }
    ]
};
