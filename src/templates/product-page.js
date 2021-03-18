import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import "./oml.css";
import Slick from "./Slick";
import sticker1 from "./assets/sticker1.webp";
import sticker2 from "./assets/sticker2.webp";
import sticker3 from "./assets/sticker3.webp";
export const ProductPageTemplate = ({
    image,
    title,
    heading,
    description,
    intro,
    main,
    testimonials,
    fullImage,
    pricing,
}) => (
    <div className="oml-1">
        {/* <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          backgroundColor: '#f40',
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div> */}

        <div className="page">
            <div className="row">
                <span className="side-header">Vi är BLK LZY </span>
                <div className="slider-container">
                    <Slick />
                </div>
            </div>
            <div className="row text-box">
                <span>
                    Vi är ett konsultbolag med många olika personligheter. Här
                    är vi helt enkelt oss själva, vi vet att det blir bäst så.
                    Vi finns på två orter och vi har alla olika bakgrund, ålder,
                    och erfarenhet. Gemensamt är att vi ständigt utvecklar vår
                    förmåga att lyssna, fråga, testa och våga.
                </span>
                <span>
                    Vi innoverar, designar och utvecklar tillsammans. Vi dansar
                    och gråter tillsammans. Vi vinner och förlorar tillsammans.
                    Vi lever i en tid som förändras snabbt. Det är inte helt
                    lätt att hänga med, varken som människa eller företag. Vår
                    kärnverksamhet är att skapa trygghet och tillit så att vi
                    kan möta och skapa förändring med nyfikenhet och
                    kreativitet.
                    <p className="link">
                        <br /> VÅRA TJÄNSTER {"–> "}
                    </p>
                </span>
            </div>
            <div className="sticker-1">
                <img src={sticker1} />
            </div>
            <div className="parallax-container">
                <div className="parallax"></div>
            </div>
            <div className="sticker-container">
                <img className="sticker-2" src={sticker2} />
                <img className=" sticker-3" src={sticker3} />
            </div>
        </div>
    </div>
);

ProductPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
    main: PropTypes.shape({
        heading: PropTypes.string,
        description: PropTypes.string,
        image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
    testimonials: PropTypes.array,
    fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    pricing: PropTypes.shape({
        heading: PropTypes.string,
        description: PropTypes.string,
        plans: PropTypes.array,
    }),
};

const ProductPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <ProductPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                heading={frontmatter.heading}
                description={frontmatter.description}
                intro={frontmatter.intro}
                main={frontmatter.main}
                testimonials={frontmatter.testimonials}
                fullImage={frontmatter.full_image}
                pricing={frontmatter.pricing}
            />
        </Layout>
    );
};

ProductPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default ProductPage;

export const productPageQuery = graphql`
    query ProductPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                heading
                description
                intro {
                    blurbs {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 240, quality: 64) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        text
                    }
                    heading
                    description
                }
                main {
                    heading
                    description
                    image1 {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 526, quality: 92) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    image2 {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 526, quality: 92) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    image3 {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 1075, quality: 72) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
                testimonials {
                    author
                    quote
                }
                full_image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                pricing {
                    heading
                    description
                    plans {
                        description
                        items
                        plan
                        price
                    }
                }
            }
        }
    }
`;
