import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.css";

const Pagination = props => {
  const { itemsCount, pageSize, currentPage } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (

          <li  className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <a onClick={() => props.onPageChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;




