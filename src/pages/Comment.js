import React, { Component } from 'react';

class Comment extends Component {
  state = {
    isLike: false,
  };

  handleClickOnLikeButton = () => {
    const { isLike } = this.state;
    this.setState({
      isLike: !isLike,
    });
  };

  render() {
    const { isLike } = this.state;
    const likeText = this.props.likedText;
    const unlikeText = this.props.unlikedText;
    const name = 'test 123';
    console.log(name);
    return <button onClick={this.handleClickOnLikeButton}>{isLike ? likeText : unlikeText}</button>;
  }
}

export default Comment;
