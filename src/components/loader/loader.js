import React from 'react';

function Loader(props) {
    return (
        props.isloading &&
        <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
    );
}

export default Loader;