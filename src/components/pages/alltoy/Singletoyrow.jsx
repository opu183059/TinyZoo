import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Singletoyrow = ({ toy }) => {
  const { sellerName, Available, subCategory, toyname, Price, _id } = toy || {};
  // console.log(subCategory[0].value);
  return (
    <>
      <tr>
        <td></td>
        <td>{sellerName}</td>
        <td>{toyname}</td>
        <td>{subCategory?.[0]?.value}</td>
        <td>{Price} tk</td>
        <td>{Available}</td>
        <td>
          <Link to={`toyDetails/${_id}`}>
            <button className="btn btn-ghost btn-xs">details</button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default Singletoyrow;
