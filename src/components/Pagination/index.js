import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";

import { Wrapper } from "./style";

function Pagination({ pageCount, onPageChange, className }) {
  const { isMobile } = useSelector(({ resolution }) => resolution);

  return (
    <Wrapper className={className}>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={onPageChange}
        pageRangeDisplayed={isMobile ? 1 : 5}
        marginPagesDisplayed={1}
        previousLabel={<ChevronLeftRoundedIcon />}
        nextLabel={<ChevronRightRoundedIcon />}
        containerClassName="pagination"
        activeClassName="activated"
      />
    </Wrapper>
  );
}

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Pagination.defaultProps = {
  className: "",
};

export default Pagination;
