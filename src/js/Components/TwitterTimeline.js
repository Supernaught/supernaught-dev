import React, { Component } from 'react';

class TwitterTimeline extends Component {
  componentDidMount() {
    let list = document.getElementsByTagName('script');
    
    // Remove twitter script if found
    for(let i=0; i<list.length; i++) {
      if(list[i].src === this.props.widgetLink) {
        list[i].parentNode.removeChild(list[i]);
      }
    }

    // Replace twitter script with new one
    const script = document.createElement("script");
    script.src = this.props.widgetLink;
    script.async = true;
    document.body.appendChild(script);

  }
  render() {
    const widgetWidth = (!this.props.widgetWidth) ? "100%"
                                                  : this.props.widgetWidth;
    return (
      <div
        className="twitter-widget"
        style={{
                width: widgetWidth,
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
