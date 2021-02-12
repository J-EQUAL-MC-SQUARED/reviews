/* eslint-disable no-underscore-dangle */
import React from 'react';
import propTypes from 'prop-types';
import ReviewListItem from './ReviewListItem';

const ReviewList = ({
  list,
  addHelpful,
  setModal,
  setIndex,
  thumbIds,
  setThumbIds,
}) => (
  <div id="reviews-list">
    {list.map((item) => (
      <ReviewListItem
        item={item}
        key={item.id}
        addHelpful={addHelpful}
        setModal={setModal}
        setIndex={setIndex}
        thumbIds={thumbIds}
        setThumbIds={setThumbIds}
      />
    ))}
    <div
      id="reviews-no-reviews"
      style={{ display: list.length ? 'none' : 'block' }}
    >
      No reviews yet, be the first!
    </div>
  </div>
);

ReviewList.propTypes = {
  list: propTypes.arrayOf(propTypes.any).isRequired,
  addHelpful: propTypes.func.isRequired,
  setModal: propTypes.func.isRequired,
  setIndex: propTypes.func.isRequired,
  thumbIds: propTypes.arrayOf(propTypes.any).isRequired,
  setThumbIds: propTypes.func.isRequired,
};

export default ReviewList;
