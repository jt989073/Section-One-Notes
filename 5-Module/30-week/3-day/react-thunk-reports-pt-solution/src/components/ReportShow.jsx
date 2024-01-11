import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailedReport } from '../store/reports';

const ReportShow = () => {
  const { reportId } = useParams();
  const navigate = useNavigate();
  const [goToReport, setGoToReport] = useState(reportId);
  const report = useSelector((state) =>
    state.reports ? state.reports[reportId] : null
  );
  const dispatch = useDispatch();

  // Don't forget to add `dispatch` to the dependency array!
  // (3 specs will fail if you do not add it.)
  useEffect(() => {
    dispatch(fetchDetailedReport(reportId));
  }, [dispatch, reportId]);

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/reports/${goToReport}`);
  }

  /* **DO NOT CHANGE THE RETURN VALUE** */
  return (
    <section>
      <table id="report-table">
        <thead>
          <tr>
            <th colSpan="2">Report #{reportId}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="attribute">Understanding:</td>
            <td className="value">{report?.understanding}</td>
          </tr>
          <tr>
            <td className="attribute">Improvement:</td>
            <td className="value">{report?.improvement}</td>
          </tr>
        </tbody>
      </table>
      <div className="footer">
        <Link
          className="back-button"
          to="/"
        >
          Back to Report Index
        </Link>
        <form className="go-to-report-form" onSubmit={handleSubmit}>
          Go to Report #
          <input
            type="number"
            min={1}
            max={99}
            value={goToReport}
            onChange={(e) => setGoToReport(e.target.value)}
            required
          />
          <button>Go!</button>
        </form>
      </div>
    </section>
  );
};

export default ReportShow;
