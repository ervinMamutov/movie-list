import './Form.css';
import PropTypes from 'prop-types';

const Form = ({ searchValue, setSearch }) => {
  const searchHandler = (e) => {
    const val = e.target.value.trim();
    setSearch(val.toLowerCase());
  };

  return (
    <div className="input__container input">
      <input
        className="input-text"
        type="text"
        placeholder="Add a movie name"
        value={searchValue}
        onChange={(e) => searchHandler(e)}
      />
    </div>
  );
};

Form.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Form;
