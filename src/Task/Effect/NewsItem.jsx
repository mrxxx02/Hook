import React, {Component} from "react";

export class NewsItem extends Component {
    render() {
        let {title, description, imgUrl, newsUrl, author, pubDate, source} =
            this.props;
        return (
            <>
                <div className="card my-3 mx-3">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            position: "absolute",
                            right: 0,
                        }}
                    >
                        <span
                            className="badge rounded-pill bg-danger"
                            style={{left: "90%", zIndex: "1"}}
                        >
                            {source}
                        </span>
                    </div>
                    <img
                        src={
                            !imgUrl
                                ? "https:images.moneycontrol.com/static-mcnews/2022/03/fandosensexniftyderivative-2-770x433.jpg"
                                : imgUrl
                        }
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">
                            {!title ? "" : title + "..."}
                        </h5>
                        <p className="card-text">
                            {!description ? "" : description + "..."}
                        </p>
                        <p className="card-text mt-2">
                            <small className="text-muted">
                                Last updated by {!author ? "Unknown" : author}{" "}
                                on{" "}
                                {!pubDate
                                    ? ""
                                    : new Date(pubDate)
                                          .toGMTString()
                                          .replace("GMT", "")}
                            </small>
                        </p>
                        <a
                            rel="noreferrer"
                            href={newsUrl}
                            target="_blank"
                            className="btn btn-dark"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </>
        );
    }
}

export default NewsItem;