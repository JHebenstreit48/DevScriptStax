import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UpgradesAndFCVManagement = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/OperationsAtScale/UpgradesAndFCVManagement';

  return (
    <>
      <PageLayout>
        <PageTitle title="Upgrades & FCV Management" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UpgradesAndFCVManagement;
