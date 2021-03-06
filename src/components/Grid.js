import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class Grid extends Component {
  render() {
    const containerClass = this.props.fluid ? 'container-fluid' : 'container';
    const className = classNames(this.props.className, containerClass);

    return React.createElement(this.props.tagName || 'div', Object.assign({}, this.props, {
      className
    }), this.props.children);
  }
}

Grid.propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};
