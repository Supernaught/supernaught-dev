import React, { Component } from 'react';

class TwitterTimeline extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = this.props.widgetLink;
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <div
        className="twitter-widget"
        style={{
                width: this.props.widgetWidth,
                padding: "30px 0px 30px 0px",
                margin: "0 auto",
              }}>
        <a
          className="twitter-timeline"
          data-tweet-limit="5"
          data-link-color="#FF0054"
          href={this.props.accountLink}/>
      </div>
    );
  }
}

export default TwitterTimeline;
