const JobOffer = (props) => {
  const dynamicStyle = {
    border: `1px solid ${props.color}`,
  };

  return (
    <>
      <div className={props.style} style={dynamicStyle}>
        {props.name}
        <p>{props.contract}</p>
      </div>
    </>
  );
};

export default JobOffer;
