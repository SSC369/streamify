import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import "./style.scss";
const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  return (
    <>
      {data ? (
        <Carousel
          title="Recommendations"
          data={data}
          loading={loading}
          endpoint={mediaType}
        />
      ) : (
        <div className="title">No Recommendations</div>
      )}
    </>
  );
};

export default Recommendation;
