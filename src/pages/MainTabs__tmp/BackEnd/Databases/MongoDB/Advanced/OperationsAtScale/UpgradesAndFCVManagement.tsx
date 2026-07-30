import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
