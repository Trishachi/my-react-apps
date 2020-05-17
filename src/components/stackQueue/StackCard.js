import React, { Fragment } from "react";

const StackQueueCard = (props) => {
  return (
    <Fragment>
      <div className="card small-card">
        <div className="card-header">{`User  ${props.name}`}</div>
        <div className="card-body">
          <img
            src={`https://robohash.org/${props.name}?set=set5`}
            alt="user profile"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default StackQueueCard;
