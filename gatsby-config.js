const siteMetadata = {
    title: `Paul Sud`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: true,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.jpg`,
    introTag: `Beats and Bytes`,
    description: `My personal website.`,
    author: `@paul-sud`,
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
            name: "ABOUT",
            url: "/about"
        },
        {
            name: "BLOG",
            url: "/blog"
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio"
        },
        {
            name: "CONTACT",
            url: "/contact"
        }
    ],
    footerLinks: [
        {
            name: "GitHub",
            url: "https://github.com/paul-sud/"
        }
    ],
    social: [
        {
            name: "GitHub",
            icon: "/images/github.svg",
            url: "https://www.github.com/paul-sud/"
        },
        {
            name: "LinkedIn",
            icon: "/images/linkedin.svg",
            url: "https://www.linkedin.com/in/paul-sud/"
        },
        {
            name: "Bandcamp",
            icon: "/images/bandcamp.svg",
            url: "https://paulsud.bandcamp.com/"
        },
        {
            name: "Soundcloud",
            icon: "/images/soundcloud.svg",
            url: "https://www.soundcloud.com/luapdus"
        },
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        // api_url: "./test.json",
        api_url: "",
        description: ``,
        mail: "",
        phone: "",
        address: ""
    }
    // this is optional. you can uncomment this if you use disqus
    // disqus: `your-disqus-shortname`
};

const plugins = [
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
    },
]

if(siteMetadata.disqus) {
    plugins.push({
        resolve: `gatsby-plugin-disqus`,
        options: {
          shortname: siteMetadata.disqus
        }
    })
}

module.exports = {
    siteMetadata: siteMetadata,
    plugins: plugins
};
