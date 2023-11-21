const SectionTitle = ({ headtitle, subTitle }) => {
  return (
    <>
      <div className="section-title">
        <h1>{headtitle}</h1>
        <p>{subTitle}</p>
      </div>
    </>
  );
};

export default SectionTitle;
