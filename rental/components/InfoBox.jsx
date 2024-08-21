const InfoBox = ({
  heading,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-100",
  btnInfo,
  children,
}) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md mt-4`}>
      <h2 className={`text-black text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4"{children}`}> </p>
      <a
        href={btnInfo.link}
        className={`inline-block ${btnInfo.backgroundColor} ${textColor} rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        Browse Properties
      </a>
    </div>
  );
};

export default InfoBox;
