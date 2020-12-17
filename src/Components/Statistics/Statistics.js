import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <div className={s.wrap}>
      <p className={s.param}>Good: {good}</p>
      <p className={s.param}>Neutral: {neutral}</p>
      <p className={s.param}>Bad: {bad}</p>
      <p className={s.param}>Total: {total}</p>
      <p className={s.param}>Positive feedback: {percentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
