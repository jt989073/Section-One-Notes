import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailedReport } from '../store/reports';
import ReportForm from './ReportForm';

const EditReportForm = () => {
  const { reportId } = useParams();
  const report = useSelector((state) =>
    state.reports ? state.reports[reportId] : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailedReport(reportId));
  }, [dispatch, reportId]);

  if (!report) return(<></>);

  /* **DO NOT CHANGE THE RETURN VALUE** */
  return (
    Object.keys(report).length > 1 && (
      <>
        <ReportForm
          report={report}
          formType="Update Report"
        />
      </>
    )
  );
};

export default EditReportForm;

