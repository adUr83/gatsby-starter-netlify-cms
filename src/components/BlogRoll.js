import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import blueVector from "../img/blue-vector.svg";

class BlogRoll extends React.Component {
    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;

        return (
            <div
                style={{ backgroundColor: "rgb(248, 244, 243) !important" }}
                className="columns "
            >
                <div className=" column">
                    <div className="title has-text-primary rem-10  ">
                        Vi hjälper dig att:
                    </div>
                    <div className="blue-vector">
                        <img src={blueVector} />
                    </div>
                </div>
                <div className=" column">
                    {posts &&
                        posts.map(({ node: post }) => (
                            <div className=" column" key={post.id}>
                                <article
                                    className={`blog-list-item tile is-child   ${
                                        post.frontmatter.featuredpost
                                            ? "is-featured"
                                            : ""
                                    }`}
                                >
                                    <header>
                                        {/* {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null} */}
                                        <p className="post-meta">
                                            {/* <span> &bull; </span> */}
                                            <Link
                                                className="title has-text-primary underline is-size-8 anim"
                                                to={post.fields.slug}
                                            >
                                                {post.frontmatter.title}
                                            </Link>
                                            {/*                    
                    <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </span> */}
                                        </p>
                                    </header>
                                    {/* <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p> */}
                                </article>
                            </div>
                        ))}
                </div>
            </div>
        );
    }
}

BlogRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
};

export default () => (
    <StaticQuery
        query={graphql`
            query BlogRollQuery {
                allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
                    filter: {
                        frontmatter: { templateKey: { eq: "blog-post" } }
                    }
                ) {
                    edges {
                        node {
                            excerpt(pruneLength: 400)
                            id
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                templateKey
                                date(formatString: "MMMM DD, YYYY")
                                featuredpost
                                featuredimage {
                                    childImageSharp {
                                        fluid(maxWidth: 120, quality: 100) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => <BlogRoll data={data} count={count} />}
    />
);
