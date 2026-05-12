const pagination = (page = 1, limit = 10) => {
  const currentPage = parseInt(page);

  const currentLimit = parseInt(limit);

  const offset = (currentPage - 1) * currentLimit;

  return {
    limit: currentLimit,
    offset,
  };
};

export const getPagination = (page, limit) => {
  const currentPage = parseInt(page) || 1;

  const pageLimit = parseInt(limit) || 10;

  const offset = (currentPage - 1) * pageLimit;

  return {
    limit: pageLimit,
    offset,
  };
};

export default pagination;
